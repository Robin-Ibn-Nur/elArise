import { Button, Typography } from '@material-tailwind/react';
import React from 'react';

const SmartGovernance = () => {
    return (
        <div className='smart-gov p-10 flex flex-col items-center justify-center gap-10'>
            <Typography variant='h2' color='blue-gray' className='text-center'>Smart Governance</Typography>
            <Typography color='blue-gray' className='container mx-auto w-full text-center text-2xl'>Our collaboration with governments has been transformative, redefining governance through innovative technologies — proudly terming it "Smart Governance."

                Immersed in innovation, we've introduced unprecedented solutions. "Smart Governance" is our commitment to pushing boundaries and making innovation a cornerstone of progress.

                Each project is a canvas for creativity, where smart technologies converge. Our stories echo the success of "Smart Governance," propelling governments into a new era of thriving in an ever-evolving landscape.</Typography>
            <Button variant='outlined' color='blue'>Learn More</Button>
        </div>
    );
};

export default SmartGovernance;