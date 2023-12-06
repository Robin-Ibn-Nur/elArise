import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';

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
            <div className={`flex items-center justify-center h-screen ${loading ? '' : 'hidden'}`}>
                <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
            </div>
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