import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import earth from '../../../../../public/images/earth.jpg'

const LeftCard = () => {
    return (
        <Card className="w-full flex-col lg:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 lg:w-2/5 shrink-0 lg:rounded-r-none"
            >
                <img
                    src={earth}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    Satellite Imagery: Explore the World from Above
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    At elArise, we recognize the immense potential of satellite imagery and are committed to leveraging it to address diverse challenges. Our expertise lies in collecting, processing, and analyzing satellite data to generate meaningful insights for our clients. Whether it's supporting environmental conservation, disaster response, or urban development, we use satellite imagery to drive positive change and innovation.
                </Typography>
                <a href="#" className="inline-block">
                    <Button color='light-blue' variant="outlined" className="flex items-center gap-2">
                        Learn More
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

export default LeftCard;