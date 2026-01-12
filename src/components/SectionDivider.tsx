import { motion } from "framer-motion";

interface SectionDividerProps {
  year: string;
  title: string;
}

const SectionDivider = ({ year, title }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 py-16"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="text-center">
        <span className="font-display text-4xl md:text-5xl font-bold text-gradient">{year}</span>
        <p className="text-muted-foreground text-sm mt-2">{title}</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  );
};

export default SectionDivider;
