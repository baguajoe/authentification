import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Page from "./pages/Page.js";
import Home from "./pages/home"; // Default import
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Single } from "./pages/single";
import Kickstarter from "./pages/Kickstarter"; // Import your Kickstarter component
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Private } from "./pages/private";
import { Signup } from "./pages/signup";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Page />} path="/page" />
                        <Route path="/kickstarter" element={<Kickstarter />} />  {/* Add this route */}
                        <Route element={<Private />} path="/private" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
