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
        <NavLink to="Work_Areas" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Work Areas
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="Technologies" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Technologies
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="Careers" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Careers
        </NavLink>
    </Typography>
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
    >
        <NavLink to="Contact_Us" className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
            Contact Us
        </NavLink>
    </Typography>
</ul>);

export const details = ["Smart City Management", "Data and Analytics", "EdTech", "Defense and Paramilitary", "Law and Enforcement", "Cyber Security", "MarketingTech", "MediTech", "FinTech"]

export const services = [
    'Application Development',
    'Website Development',
    'UI/UX',
    'Website Design',
    'Digital Marketing',
    'Digitization',
    'Prototyping & Interaction',
    'Software Development',
    'IT Consulting',
    'Cloud Services'
];

export const technologies = [
    { title: 'Frontend Developer', experience: 'Remote', description: 'We are looking for an Enthusiast Frontend Developer.' },
    { title: 'UI-UX Designer', experience: '1+ year', description: 'Join our team of designers and developers to create websites.' },
    { title: 'Machine Learning Researcher', experience: 'Entry Level', description: 'Join our team of machine learning researchers to create models.' },
    { title: 'Backend Developer', experience: '1+ year', description: 'Join in as a Backend Developer to create APIs and backend.' },
    { title: 'Senior Machine Learning Researcher', experience: '1+ year', description: 'Join us as a Senior Machine Learning Researcher to create models.' },
    { title: 'GIS Researcher', experience: '1+ year', description: 'Join us for building and maintaining GIS databases, software applications, and programs.' },
];

