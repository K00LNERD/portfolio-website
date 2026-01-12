import { motion } from "framer-motion";
import { Calendar, MapPin, Image, Play, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MetricCounter from "./MetricCounter";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface MediaItem {
  type: "image" | "video";
  url?: string;
  placeholder?: boolean;
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
  media?: MediaItem[];
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
  media = [],
  isCurrent = false,
  variant = "default",
}: ExperienceCardProps) => {
  // Default to 3 placeholder media items if none provided
  const displayMedia = media.length > 0 ? media : [
    { type: "image" as const, placeholder: true },
    { type: "image" as const, placeholder: true },
    { type: "video" as const, placeholder: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative p-6 md:p-8 rounded-2xl transition-all duration-500 hover-glow ${
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {role}
              </h3>
              <p className="text-lg text-primary font-medium">{company}</p>
            </div>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
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
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>

          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
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
                  className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Media Gallery - 1/3 width */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
            Gallery
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {displayMedia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                {item.placeholder ? (
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    {item.type === "video" ? (
                      <>
                        <Play className="w-6 h-6 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/50">Add Video</span>
                      </>
                    ) : (
                      <>
                        <Image className="w-6 h-6 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/50">Add Image</span>
                      </>
                    )}
                    <Plus className="absolute top-2 right-2 w-4 h-4 text-muted-foreground/30" />
                  </div>
                ) : (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    {item.type === "video" ? (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt="Project media"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
