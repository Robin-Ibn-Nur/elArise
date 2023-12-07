import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import WorkAreas from "../Pages/WorkAreas/WorkAreas";
import Technologies from "../Pages/Technologies/Technologies";
import Careers from "../Pages/Careers/Careers";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'Work_Areas', element: <WorkAreas /> },
            { path: 'Technologies', element: <Technologies /> },
            { path: 'Careers', element: <Careers /> },
            { path: 'Contact_Us', element: <ContactUs /> },
        ]
    }
])