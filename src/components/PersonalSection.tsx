import { motion } from "framer-motion";
import { Plane } from "lucide-react";

interface TravelPhoto {
  url: string;
  aspectRatio: "landscape" | "portrait" | "square";
}

interface PersonalSectionProps {
  embedded?: boolean;
  travelPhotos?: TravelPhoto[];
}

const PersonalSection = ({ embedded = false, travelPhotos = [] }: PersonalSectionProps) => {
  const content = (
    <>
      {!embedded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The person behind the professional — passions that shape perspective.
          </p>
        </motion.div>
      )}

      {/* Digital Nomad Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`glass rounded-2xl ${embedded ? 'p-5 mb-4' : 'p-8 mb-8'}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`${embedded ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center`}>
            <Plane className={`${embedded ? 'w-6 h-6' : 'w-8 h-8'} text-primary`} />
          </div>
          <div>
            <h3 className={`font-display font-bold ${embedded ? 'text-lg' : 'text-2xl'}`}>Digital Nomad</h3>
            <p className="text-muted-foreground text-sm">2+ Years of Remote Travel</p>
          </div>
          <div className="ml-auto text-right">
            <p className={`font-bold text-gradient ${embedded ? 'text-3xl' : 'text-4xl'}`}>2+</p>
            <p className="text-muted-foreground text-xs">Years</p>
          </div>
        </div>
        <p className={`text-muted-foreground ${embedded ? 'text-sm' : 'text-base'} leading-relaxed`}>
          Working remotely while exploring new cultures — every destination brings fresh perspective to problem-solving and product thinking.
        </p>
      </motion.div>

      {/* Travel Gallery */}
      {travelPhotos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h4 className={`font-display font-semibold ${embedded ? 'text-base' : 'text-lg'} mb-3`}>
            Travel Gallery
          </h4>

          {/* Masonry-style grid optimized for 14 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {travelPhotos.map((photo, index) => {
              // Determine grid span based on aspect ratio and position
              let colSpan = "col-span-1";
              let rowSpan = "row-span-1";

              if (photo.aspectRatio === "landscape") {
                colSpan = "col-span-2";
              } else if (photo.aspectRatio === "portrait") {
                rowSpan = "row-span-2";
              }

              // Determine aspect ratio class based on actual image proportions
              let aspectClass = "aspect-square";
              if (photo.aspectRatio === "landscape") {
                aspectClass = "aspect-video"; // 16:9 for wide landscape
              } else if (photo.aspectRatio === "portrait") {
                aspectClass = "aspect-[3/4]"; // 3:4 for portrait
              } else if (photo.aspectRatio === "square") {
                aspectClass = "aspect-[4/3]"; // 4:3 for square-ish images (actually ~1.3:1)
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`${colSpan} ${rowSpan} relative group cursor-pointer`}
                >
                  <div className={`rounded-xl overflow-hidden ${aspectClass}`}>
                    <img
                      src={photo.url}
                      alt={`Travel photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Quote */}
      {!embedded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-display text-foreground/90 italic mb-4">
              "The best products are built by those who understand both the code that powers them and the humans that use them."
            </p>
            <cite className="text-muted-foreground">— Personal Philosophy</cite>
          </blockquote>
        </motion.div>
      )}
    </>
  );

  if (embedded) {
    return <div>{content}</div>;
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {content}
      </div>
    </section>
  );
};

export default PersonalSection;
