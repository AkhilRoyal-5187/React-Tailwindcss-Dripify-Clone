import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 0.9
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const imageAnimation = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.9
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}; 