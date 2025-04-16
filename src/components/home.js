import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from './TabAnimation';
import { fadeIn, slideInFromLeft, slideInFromRight, mobileMenuAnim } from './sharedAnimations';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
    }, []);

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            className="w-full bg-custom"
        >
            <motion.header 
                variants={fadeIn}
                className="fixed top-0 w-full bg-white shadow-sm z-40 bg-custom"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div 
                            variants={slideInFromLeft}
                            className="flex-shrink-0"
                        >
                            <span className="text-2xl font-bold text-primary">Dripify</span>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn}
                            className="hidden md:block"
                        >
                            <div className="ml-10 flex items-center space-x-4">
                                <div className="relative group">
                                    <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                        Software
                                        <svg className="ml-2 -mr-1 h-5 w-5 inline-block" xmlns="http://www.w3.dripifyorg/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-1">
                                            <a href="#features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Features</a>
                                            <a href="#use-cases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Use Cases</a>
                                            <a href="#integrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Integrations</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                        Resources
                                        <svg className="ml-2 -mr-1 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-1">
                                            <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
                                            <a href="#demos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Demos</a>
                                            <a href="#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                                <a href="#partners" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Partners</a>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={slideInFromRight}
                            className="hidden md:flex items-center space-x-4"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-700 hover:text-primary font-medium"
                            >
                                Login
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
                            >
                                Book a demo
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
                            >
                                Start for free
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn}
                            className="md:hidden"
                        >
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMenuOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </motion.button>
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div 
                                variants={mobileMenuAnim}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="md:hidden"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <div className="space-y-1">
                                        <button className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                                            Software
                                        </button>
                                        <div className="pl-4 space-y-1">
                                            <a href="#features" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">Features</a>
                                            <a href="#use-cases" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">Use Cases</a>
                                            <a href="#integrations" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">Integrations</a>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <button className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                                            Resources
                                        </button>
                                        <div className="pl-4 space-y-1">
                                            <a href="#blog" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">Blog</a>
                                            <a href="#demos" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">Demos</a>
                                            <a href="#faq" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm">FAQ</a>
                                        </div>
                                    </div>
                                    <a href="#pricing" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                                    <a href="#partners" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Partners</a>
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="space-y-1">
                                        <button className="w-full text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Login</button>
                                        <button className="w-full text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Login</button>

                                        <button className="w-full text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Book demo</button>
                                        <button className="w-full bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary text-base font-medium">Start for free</button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>
            
            <motion.main 
                variants={staggerContainer}
                className="relative pt-16"
            >
            </motion.main>
        </motion.div>
    );
};

export default Home;
