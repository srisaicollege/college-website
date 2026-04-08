import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    badge?: string;
    centered?: boolean;
    className?: string;
    dark?: boolean;
}

const SectionHeader = ({
    title,
    highlight,
    subtitle,
    badge,
    centered = false,
    className,
    dark = false,
}: SectionHeaderProps) => {
    const renderTitle = () => {
        if (!highlight || !title.includes(highlight)) {
            return title;
        }

        const parts = title.split(new RegExp(`(${highlight})`, "gi"));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={i} className="text-brand-gold">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };
    return (
        <motion.div
            variants={itemVariants}
            className={cn(
                "space-y-4 mb-12",
                centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
                className
            )}
        >
            {badge && (
                <div className={cn("flex items-center gap-3", centered && "justify-center")}>
                    <div className="h-[2px] w-8 bg-brand-gold rounded-full" />

                    {/* Badge - Italic */}
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold italic">
                        {badge}
                    </span>

                    <div className="h-[2px] w-8 bg-brand-gold rounded-full" />
                </div>
            )}

            {/* Title - Italic */}
            <h2
                className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight italic",
                    dark ? "text-white" : "text-brand-navy"
                )}
            >
                {renderTitle()}
            </h2>

            {subtitle && (
                /* Subtitle - Normal */
                <p
                    className={cn(
                        "text-lg md:text-xl font-medium leading-relaxed not-italic",
                        dark ? "text-blue-100/70" : "text-slate-600"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;