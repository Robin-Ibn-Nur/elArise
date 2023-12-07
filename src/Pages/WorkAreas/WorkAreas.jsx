import { Typography } from '@material-tailwind/react';
import serviceImage from '../../../public/images/computer.jpg';
import { services } from '../../Data/Data';

const WorkAreas = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="my-10">
                <img src={serviceImage} alt="Services Image" className="max-w-full h-auto mx-auto rounded-md shadow-lg border border-gray-200" />
            </div>
            <Typography variant='h3' className="mb-6">Services</Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                    <div key={index} className="border border-green-200 hover:border-green-500 transition ease-in-out delay-150 duration-300 cursor-pointer shadow-lg p-2 rounded">
                        <Typography variant='h6' className="mb-3">{service}</Typography>
                        <Typography>
                            The Institute has from time to time identified thrust areas of research,
                            around which several research projects and studies are designed cutting
                            across disciplinary boundaries.
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkAreas;
