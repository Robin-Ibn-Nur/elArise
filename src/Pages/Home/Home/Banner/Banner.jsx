import { Button, Card, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const images = ['https://img.freepik.com/free-photo/glowing-cyborg-statue-illuminated-blue-mystery-generated-by-ai_188544-14044.jpg?t=st=1701848287~exp=1701851887~hmac=9f4d7190d1b6a83e6715d1f374989d95129b112ed6abcd57f661706a8f5da2bb&w=826',
        'https://img.freepik.com/free-photo/biometrics-concept-identity-person-use_587448-5027.jpg?t=st=1701854453~exp=1701858053~hmac=421ee52dbbc217ce138f6493fbfed8a0a9f9e8769531bec42ce2b960cc8661d4&w=826',
        'https://img.freepik.com/premium-photo/shaking-hands-conclusion-business-deal-ai-generative_407474-6415.jpg?w=740'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center mt-5 h-100">
            <div className="w-2/3 h-80 rounded-lg overflow-hidden shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg border">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        alt={`Background Image ${i + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6 transition-opacity duration-500">
                    <Typography variant='h2' className="text-3xl font-bold text-white mb-4">Welcome to elArise</Typography>
                    <Typography variant='h6' className="text-white mb-4">{`Content ${index + 1} goes here.`}</Typography>
                    <Button variant='outlined' color='indigo' className="px-4 py-2 text-white rounded">{`Click Me ${index + 1}`}</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;