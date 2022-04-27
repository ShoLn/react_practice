import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import AddForm from "./pages/ListPage/AddForm";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/listpage" element={<AddForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
