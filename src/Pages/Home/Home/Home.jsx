
import Work from '../OurWork/Work';
import Partner from '../Partner/Partner';
import SmartGovernance from '../SmartGovernance/SmartGovernance';
import Banner from './Banner/Banner';
import DevelopOptions from './DevelopOptions/DevelopOptions';
import Mrq from './Mrq';

const Home = () => {


    return (

        <>
            <Banner />
            {/* <Mrq /> */}
            <DevelopOptions />
            {/* <Mrq /> */}
            <Work />
            <SmartGovernance />
            <Partner />
        </>
    );
};

export default Home;
