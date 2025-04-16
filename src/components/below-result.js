import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './TabAnimation';

const BelowResult = () => {
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const imageVariants = {
        initial: { 
            x: -100,
            opacity: 0 
        },
        animate: { 
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const contentVariants = {
        initial: { 
            x: 100,
            opacity: 0 
        },
        animate: { 
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div className="mx-8 my-8">
            <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
                className="bg-primary px-4 py-16 md:py-24 rounded-3xl"
                id="cta-rocket"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <motion.div 
                            variants={imageVariants}
                            className="w-full md:w-[54.5%]"
                        >
                            <div className="flex justify-center">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    width="640"
                                    height="493"
                                    src="https://dripify.io/wp-content/uploads/2023/11/cta-rocket.svg"
                                    alt="Skyrocket your sales results"
                                    className="w-full max-w-2xl"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={contentVariants}
                            className="w-full md:w-[35%]"
                        >
                            <div className="bg-primary rounded-[20px] p-8">
                                <motion.div
                                    variants={fadeInUp} 
                                    className="mb-8"
                                >
                                    <motion.h3 
                                        className="text-3xl md:text-4xl font-bold text-white mb-4 text-left"
                                    >
                                        Try out a smarter way to crush sales – all automated
                                    </motion.h3>
                                    <motion.p 
                                        className="text-neutral-50 text-left"
                                    >
                                        Kickstart your sales outreach campaign today and see your{' '}
                                        <strong>first results in less than 48 hours</strong>, while enjoying your free trial
                                    </motion.p>
                                </motion.div>

                                <motion.div 
                                    variants={fadeInUp}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full px-5 py-4 pr-40 rounded-md bg-white text-gray-800 
                                                     focus:outline-none focus:ring-2 focus:ring-blue-500
                                                     text-base placeholder:text-gray-400 text-left"
                                        />
                                        <motion.button
                                            
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                                     bg-gray-900 text-white px-5 py-2.5 rounded-md 
                                                     hover:bg-gray-800 transition-colors duration-300
                                                     text-base font-medium"
                                        >
                                            Start free trial
                                        </motion.button>
                                    </div>

                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-sm text-white text-left mt-5"
                                    >
                                        10 people or more?{' '}
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            href="/book-a-demo/"
                                            className="text-white underline hover:text-blue-200"
                                        >
                                            Get a personalized introduction to Dripify
                                        </motion.a>
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BelowResult;
