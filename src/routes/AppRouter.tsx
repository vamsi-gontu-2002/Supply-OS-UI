import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Suppliers from "../pages/Suppliers/Suppliers";
import Manufacturing from "../pages/Manufacturing/Manufacturing";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<AppLayout />}>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/suppliers"
                        element={<Suppliers />}
                    />

                    <Route
                        path="/manufacturing"
                        element={<Manufacturing />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

} 