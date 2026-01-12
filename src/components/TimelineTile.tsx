import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Building2, Briefcase, GraduationCap } from "lucide-react";

interface TimelineTileProps {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  icon?: "work" | "education" | "personal";
  isActive?: boolean;
  children: React.ReactNode;
}

const TimelineTile = ({ 
  id, 
  year, 
  title, 
  subtitle, 
  icon = "work",
  isActive = false,
  children 
}: TimelineTileProps) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  const IconComponent = {
    work: Briefcase,
    education: GraduationCap,
    personal: MapPin,
  }[icon];

  return (
    <div id={id} className="relative">
      {/* Timeline connector line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      
      {/* Timeline node */}
      <motion.div
        className={`absolute left-3 md:left-5 top-6 w-6 h-6 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
          isExpanded 
            ? "bg-primary border-primary shadow-glow" 
            : "bg-background border-muted-foreground/50 hover:border-primary"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconComponent className={`w-3 h-3 ${isExpanded ? "text-primary-foreground" : "text-muted-foreground"}`} />
      </motion.div>

      {/* Tile content */}
      <div className="ml-14 md:ml-20">
        {/* Collapsed tile header */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full text-left group relative overflow-hidden rounded-xl transition-all duration-300 ${
            isExpanded 
              ? "glass-strong shadow-2xl border-primary/30" 
              : "glass hover:glass-strong hover:shadow-xl border-transparent hover:border-primary/20"
          } border p-4 md:p-6`}
          whileHover={{ x: isExpanded ? 0 : 4 }}
          whileTap={{ scale: 0.99 }}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isExpanded ? "opacity-100" : ""}`} />
          
          <div className="relative flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-bold font-mono">
                  {year}
                </span>
                {isActive && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Latest
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isExpanded ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
            </motion.div>
          </div>
        </motion.button>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-8">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineTile;
