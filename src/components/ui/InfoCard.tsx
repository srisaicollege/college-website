import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface InfoCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    className?: string;
    index?: number;
}

const InfoCard = ({ title, description, icon: Icon, className }: InfoCardProps) => {
    return (
        <motion.div
            variants={itemVariants}
            className={cn(
                "p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300",
                "hover:shadow-xl hover:border-brand-gold/50 hover:-translate-y-1 group",
                className
            )}
        >
            {Icon && (
                <div className="mb-6 h-12 w-12 bg-slate-50 text-brand-navy rounded-2xl flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                </div>
            )}
            <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default InfoCard;
