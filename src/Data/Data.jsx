import React from "react";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


export const navList = (<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="/" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Home
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Work Areas
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Technologies
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Careers
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Contact Us
        </NavLink>
    </Typography>
</ul>);

export const details = ["Smart City Management", "Data and Analytics", "EdTech", "Defense and Paramilitary", "Law and Enforcement", "Cyber Security", "MarketingTech", "MediTech", "FinTech"]

// export default { navList, details };

