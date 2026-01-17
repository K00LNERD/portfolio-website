import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  category?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  videoUrl,
  liveUrl,
  githubUrl,
  year,
  category,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl overflow-hidden group hover:glow-cyan transition-all duration-300"
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {category}
              </span>
            </div>
          )}

          {/* Year Badge */}
          {year && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {year}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Video Embed (Loom, YouTube, or Google Drive) */}
      {videoUrl && (
        <div className="relative overflow-hidden">
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={
                videoUrl.includes('loom.com')
                  ? videoUrl.replace('/share/', '/embed/')
                  : videoUrl.includes('youtube.com/watch?v=')
                  ? videoUrl.replace('watch?v=', 'embed/') + '?mute=1'
                  : videoUrl.includes('youtu.be/')
                  ? videoUrl.replace('youtu.be/', 'youtube.com/embed/') + '?mute=1'
                  : videoUrl.includes('drive.google.com/file/d/')
                  ? videoUrl.replace('/view?usp=sharing', '/preview').replace('view?usp=sharing', 'preview')
                  : videoUrl
              }
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="mb-4">
          <p className={`text-muted-foreground text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs mt-1 flex items-center gap-1 hover:text-primary/80 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-border/50">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
          {!liveUrl && !githubUrl && (
            <span className="text-sm text-muted-foreground">Private Project</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
