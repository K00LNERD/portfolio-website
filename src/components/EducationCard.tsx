import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Image, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MediaItem {
  type: "image";
  url?: string;
  placeholder?: boolean;
}

interface EducationCardProps {
  institution: string;
  degree: string;
  specialization?: string;
  duration: string;
  score?: string;
  achievements?: string[];
  certifications?: { name: string; provider: string; year: string }[];
  media?: MediaItem[];
}

const EducationCard = ({
  institution,
  degree,
  specialization,
  duration,
  score,
  achievements = [],
  certifications = [],
  media = [],
}: EducationCardProps) => {
  // Default to 2 placeholder media items if none provided
  const displayMedia = media.length > 0 ? media : [
    { type: "image" as const, placeholder: true },
    { type: "image" as const, placeholder: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass p-6 md:p-8 rounded-2xl hover-glow"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main content - 3/4 width */}
        <div className="lg:col-span-3 space-y-5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {institution}
              </h3>
              <p className="text-lg text-primary font-medium">{degree}</p>
              {specialization && (
                <p className="text-muted-foreground text-sm">{specialization}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            {score && (
              <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                {score}
              </Badge>
            )}
          </div>

          {achievements.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                Highlights
              </h4>
              <ul className="space-y-1.5">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {certifications.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-2.5 bg-muted/30 rounded-lg border border-border/50"
                  >
                    <p className="font-medium text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Media Gallery - 1/4 width */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Photos
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
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
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <Image className="w-5 h-5 text-muted-foreground/50" />
                    <span className="text-[10px] text-muted-foreground/50">Add Photo</span>
                    <Plus className="absolute top-1.5 right-1.5 w-3 h-3 text-muted-foreground/30" />
                  </div>
                ) : (
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={item.url}
                      alt="Education photo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

export default EducationCard;
