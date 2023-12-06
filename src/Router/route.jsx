import { createBrowserRouter } from "react-router-dom";
import Header from "../Header";

export const router = createBrowserRouter([
    { path: "/", element: <Header /> }
])