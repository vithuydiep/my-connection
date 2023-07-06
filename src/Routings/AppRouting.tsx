import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import ConnectionsPage from "../pages/CreateConnectionPage/CreateConnectionPage";
import HomePage from "../pages/HomePage/HomePage";
import { ROUTE_PATHS } from "./constant";
import LoginFormPage from "../pages/LoginForm/LoginFormPage";

export function AppRoutes() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path={ROUTE_PATHS.loginPage} element={<LoginFormPage />} />
                <Route path={ROUTE_PATHS.connectionPage} element={<HomePage />} />
                <Route path={ROUTE_PATHS.createConnectionPage} element={<ConnectionsPage />} />
            </Routes>
        </ScrollToTop>
    )
}