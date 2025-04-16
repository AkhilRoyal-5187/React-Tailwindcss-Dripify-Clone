import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from './TabAnimation';

const Result = () => {
    const numberVariants = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { 
            scale: 1, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.8
            }
        }
    };


    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="container mx-auto px-24 py-24"
        >
            <motion.div 
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <motion.h3 
                    className="text-5xl font-semibold text-gray-900 mb-4"
                >
                    Powerful lead generation software that
                </motion.h3>
                <motion.h3 
                    className="text-5xl font-semibold text-gray-900 mb-4"
                >
                     brings incredible results
                </motion.h3>
                <motion.p 
                    className="text-gray-500"
                >
                    On average each Dripify user achieves the following numbers
                </motion.p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
                <motion.div 
                    variants={numberVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-6 rounded-lg"
                >
                    <motion.p className="text-6xl font-bold text-gray-900 text-center">9000</motion.p>
                    <p className="text-center mt-2">Leads reached per mo.</p>
                </motion.div>

                <motion.div 
                    variants={numberVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-6 rounded-lg"
                >
                    <motion.p className="text-6xl font-bold text-gray-900 text-center">+182%</motion.p>
                    <p className="text-center mt-2">Close rate increase</p>
                </motion.div>

                <motion.div 
                    variants={numberVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-6 rounded-lg"
                >
                    <motion.p className="text-6xl font-bold text-gray-900 text-center">550</motion.p>
                    <p className="text-center mt-2">Replies received per mo.</p>
                </motion.div>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
                <motion.div 
                    variants={numberVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-6 rounded-lg"
                >
                    <motion.p className="text-6xl font-bold text-gray-900 text-center">X10</motion.p>
                    <p className="text-center mt-2">Overall productivity</p>
                </motion.div>

                <motion.div 
                    variants={numberVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-6 rounded-lg"
                >
                    <motion.p className="text-6xl font-bold text-gray-900 text-center">1000%</motion.p>
                    <p className="text-center mt-2">More ROI</p>
                </motion.div>
            </motion.div>

            <motion.div 
                variants={fadeInUp}
                className="flex justify-center"
            >
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://app.dripify.io/signup/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded"
                >
                    Start free trial
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Result;