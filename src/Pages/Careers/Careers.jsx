import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useEffect, useRef } from 'react';
import { technologies } from "../../Data/Data";

const Careers = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Add animation classes when the component mounts
        sectionRef.current.classList.add('animate-fade-in');
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto my-10">
            <Typography variant='h3' className="mb-6 text-center whitespace-normal">Work Beyond Boundaries, Embrace the Freedom of Remote Work.</Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3">
                {technologies.map((tech, index) => (
                    <Card key={index} className="mt-6 w-full bg-white border border-green-200 hover:border-green-500 transition ease-in-out delay-150 duration-300 cursor-pointer shadow-lg p-2 rounded">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {tech.title}
                            </Typography>
                            <Typography variant="small" color="white" className='bg-pink-300 w-fit p-1 rounded'>{tech.experience}</Typography>
                            <Typography className="my-2">
                                {tech.description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant='outlined' color='blue' size='sm' >Apply Now</Button>
                        </CardFooter>
                    </Card>

                ))}
            </div>
        </div>
    );
};

export default Careers;
