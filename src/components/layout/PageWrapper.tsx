import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { pageVariants } from '@/lib/motion';

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
