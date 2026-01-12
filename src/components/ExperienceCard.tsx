import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MetricCounter from "./MetricCounter";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  metrics?: Metric[];
  technologies?: string[];
  isCurrent?: boolean;
  variant?: "default" | "highlight";
}

const ExperienceCard = ({
  company,
  role,
  duration,
  location,
  description,
  achievements,
  metrics = [],
  technologies = [],
  isCurrent = false,
  variant = "default",
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative p-8 rounded-2xl transition-all duration-500 hover-glow ${
        variant === "highlight"
          ? "glass gradient-border"
          : "glass"
      }`}
    >
      {/* Current badge */}
      {isCurrent && (
        <div className="absolute -top-3 right-8">
          <Badge className="bg-success/20 text-success border-success/30 px-4 py-1 animate-pulse-glow">
            <span className="w-2 h-2 bg-success rounded-full mr-2 inline-block" />
            Current
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {role}
          </h3>
          <p className="text-xl text-primary font-medium">{company}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

      {/* Metrics */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <MetricCounter
              key={index}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
            />
          ))}
        </div>
      )}

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
