import { type Variants, type Easing } from 'framer-motion';

/**
 * Standardized easing function for premium feel
 */
export const premiumEase: Easing = [0.25, 0.1, 0.25, 1];

/**
 * Page transition variants
 */
export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: premiumEase,
        },
    },
    exit: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 0.5,
            ease: premiumEase,
        },
    },
};

/**
 * Section container variants (for staggered children)
 */
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

/**
 * Item variants for scroll reveal
 */
export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: premiumEase,
        },
    },
};

/**
 * Viewport configuration for whileInView
 */
export const viewportConfig = {
    once: true,
    margin: "-100px",
};

/**
 * Hover transitions for interactive elements
 */
export const hoverTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
};
