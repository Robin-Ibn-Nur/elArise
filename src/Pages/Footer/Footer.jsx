import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#192023] text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <p className="text-lg font-bold mb-2">Experience the Change, You want to see.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">LinkedIn</a>
                        <a href="#" className="hover:text-gray-400">Facebook</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">Medium</a>
                    </div>
                    <p className="mt-4">Join our Community</p>
                </div>

                <div className="md:w-1/4 mb-4 md:mb-0">
                    <p className="text-lg font-bold mb-2">elArise For</p>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-gray-400">Governments</a>
                        <a href="#" className="hover:text-gray-400">Institutes</a>
                        <a href="#" className="hover:text-gray-400">Industries</a>
                        <a href="#" className="hover:text-gray-400">Legal</a>
                    </div>
                </div>

                <div className="md:w-1/4">
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">GDPR</a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p>Corporate Address</p>
                <p>Chennai, Tamil Nadu - 600001</p>
            </div>

            <div className="mt-8 text-center">
                <p>© 2019-2023 elArise India Pvt. Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;
