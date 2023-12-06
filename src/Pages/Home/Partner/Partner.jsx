import { Typography } from '@material-tailwind/react';
import React from 'react';

const Partner = () => {
    const backers = ["Startup TN", "Government of Tamil Nadu", "GUSEC", "Google"];

    return (
        <div className="bg-gray-100 py-8 my-10">
            <div className="container mx-auto text-center">
                <Typography variant='h2' color='blue-gray' className='text-center'>Backed By</Typography>
                <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-0 lg:space-x-8 my-10">
                    {backers.map((backer, index) => (
                        <div key={index} className="flex-shrink-0 mb-4 sm:mb-4 lg:mb-0">
                            <div className="border border-green-200 hover:border-green-500 cursor-pointer transition-transform transform hover:scale-110 p-4 sm:w-full md:w-1/2 lg:w-64 bg-gray-200 text-center shadow">
                                {backer}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Partner;
