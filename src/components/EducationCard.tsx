import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  institution: string;
  degree: string;
  specialization?: string;
  duration: string;
  score?: string;
  achievements?: string[];
  certifications?: { name: string; provider: string; year: string }[];
}

const EducationCard = ({
  institution,
  degree,
  specialization,
  duration,
  score,
  achievements = [],
  certifications = [],
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-2xl hover-glow"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-primary/10 rounded-xl">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">
            {institution}
          </h3>
          <p className="text-lg text-primary font-medium">{degree}</p>
          {specialization && (
            <p className="text-muted-foreground">{specialization}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
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
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-secondary" />
            Highlights
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {certifications.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
            Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-3 bg-muted/30 rounded-lg border border-border/50"
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
    </motion.div>
  );
};

export default EducationCard;
