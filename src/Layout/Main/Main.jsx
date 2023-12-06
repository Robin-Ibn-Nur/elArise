import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';
import Opening from '../../Loader/Opening';

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        loading ? (
            <Opening />
        ) : (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )

    );
};

export default Main;