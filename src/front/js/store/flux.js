const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			signup: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: email,
							password: password
						})
					});
					const data = await resp.json();
					console.log(data)
					return true
				} catch (error) {
					console.log("there was an error at sign up", error);
					throw error;
				}
			},

			login: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: email,
							password: password
						})
					});
					if (resp.status === 200) {
						let data = await resp.json();
						sessionStorage.setItem("token", data.token);
						return true;
					} else if (resp.status === 401) {
						return false;
					} else {
						console.log("unexpected error ocurred during the login", resp.status);
						return false;
					}

				} catch (error) {
					console.log("there was an error at login", error);
					return false;
				}
			},

			private: async () => {
				if (sessionStorage.getItem("token")) {
					try {
						const resp = await fetch(process.env.BACKEND_URL + "/api/private", {
							
							headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
							
						});
						if (!resp.ok) {
							return false;
						
						} else {
							let data= await resp.json()
							console.log(data)
							return true
						}

					} catch (error) {
						console.log(error);
						return false;
					}
				}

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
