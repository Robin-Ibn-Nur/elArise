import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import flood from '../../../../../public/images/flood.jpg'
const RightCard = () => {
    return (
        <Card className="w-full flex-col lg:flex-row">

            <CardBody>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    Solving the Flood through elArise OpenX Model
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    At elArise, we've developed the OpenX Model to address this pressing challenge. The OpenX Model is a sophisticated, data-driven solution that combines the power of technology, artificial intelligence, and geospatial analysis to revolutionize flood management. Our approach is multifaceted, addressing key aspects of flood management:
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="outlined" color='blue' className="flex items-center gap-2">
                        Learn More
                    </Button>
                </a>
            </CardBody>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 lg:w-2/5 shrink-0 lg:rounded-l-none"
            >
                <img
                    src={flood}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
        </Card>
    );
};

export default RightCard;