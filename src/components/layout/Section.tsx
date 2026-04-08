import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

const Section = ({ children, className, containerClassName }: SectionProps) => {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <div className={cn("max-w-7xl mx-auto px-6 lg:px-12", containerClassName)}>
                {children}
            </div>
        </section>
    );
};

export default Section;
