import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import HomePage from "../pages/HomePage/HomePage";
import { ROUTE_PATHS } from "./constant";
import ConnectionsPage from "../pages/CreateConnectionPage/CreateConnectionPage";

export function AppRoutes() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path={ROUTE_PATHS.connectionPage} element={<HomePage />} />
                <Route path={ROUTE_PATHS.createConnectionPage} element={<ConnectionsPage />} />
            </Routes>

        </ScrollToTop>
    )
}