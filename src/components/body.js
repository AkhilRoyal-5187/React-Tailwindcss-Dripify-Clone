import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './TabAnimation';
import { fadeIn } from './sharedAnimations';

const Body = () => {
    return (
        <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            className='my-8 mx-8'
        >
           <motion.div 
                variants={staggerContainer}
                className='body-container bg-custom rounded-3xl py-4 px-2 sm:px-3 lg:px-4 relative z-30'
            >
                <motion.div 
                    variants={fadeInUp}
                    className='flex justify-center w-full pt-0'
                > 
                    <figure className='wb-block-image flex justify-center items-center m-0 w-35 mt-20'> 
                        <motion.img 
                            variants={fadeIn}
                            src="https://dripify.io/wp-content/uploads/2023/11/reviews.svg" 
                            alt='body-image'
                            className='mx-auto block w-full'
                        />
                    </figure>
                </motion.div>

                <motion.div 
                    variants={staggerContainer}
                    className='flex justify-center w-full pt-0 flex-col'
                >
                    <motion.p 
                        variants={fadeInUp}
                        className='text-center text-7xl font-bold text-white mt-10'
                    >
                        You Only Need a Single <br />
                    </motion.p>
                    <motion.p 
                        variants={fadeInUp}
                        className='text-center text-7xl font-bold text-white mt-4'
                    >
                        Tool to Crush Sales
                    </motion.p>
                    <motion.p 
                        variants={fadeInUp}
                        className='text-center text-xl text-white mt-12'
                    >  
                        Reach hundreds of prospects per day on LinkedIn & through <br /> Email and close more deals on complete autopilot
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={fadeInUp}
                    className='button-container flex justify-center mt-12 mb-8 flex-col items-center'
                >
                    <div className='relative max-w-md w-full'>
                        <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            type="email" 
                            placeholder="Enter your work email" 
                            className="w-full px-6 py-4 text-gray-800 bg-white 
                                     border border-white/30 rounded-md 
                                     placeholder-gray-400 
                                     focus:outline-none focus:ring-2 focus:ring-custom/50
                                     text-lg"
                        />
                        <motion.button 
                           
                            className="absolute right-2 top-1/2 transform -translate-y-1/2
                                     bg-black text-white hover:bg-gray-800
                                     rounded-md px-6 py-3 transition-all duration-300
                                     flex items-center justify-center
                                     focus:outline-none focus:ring-2 focus:ring-black/50
                                     text-sm font-medium"
                        >
                            Start now
                        </motion.button>
                    </div>
                    <motion.div 
                        variants={fadeInUp}
                        className='below-lable flex justify-center items-center mt-2'
                    >
                        <p className='text-white text-center text-sm'>
                            &#10003; one Minute Setup <span className='ml-2'></span> 
                            &#10003; 7-Day Free Trail <span className='ml-2'></span> 
                            &#10003; No Credit Card Required
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div 
                    variants={fadeInUp}
                    className='flex justify-center items-center mt-12 px-4 sm:px-6 lg:px-8'
                >
                    <motion.video 
                        variants={fadeIn}
                        src="https://dripify.io/wp-content/uploads/2023/12/Automate-LinkedIn-compreessed.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        className='w-full max-w-4xl rounded-lg shadow-lg' 
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Body;