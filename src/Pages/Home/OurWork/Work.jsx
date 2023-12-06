import { Typography } from '@material-tailwind/react';
import React from 'react';
import { details } from '../../../Data/Data';

const Work = () => {

    return (
        <>
            <Typography variant='h2' color='blue-gray' className='text-center mt-5'>Our work spans a number of domains and industries</Typography>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center my-10">
                {details.map((detail, index) => (
                    <div key={index} className="border border-green-200 hover:border-green-500 cursor-pointer transition-transform transform hover:scale-110 p-4 w-64 bg-gray-200 text-center shadow">
                        {detail}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Work;