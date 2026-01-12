import { motion } from "framer-motion";
import { Plane, ImagePlus, Video } from "lucide-react";

interface PersonalSectionProps {
  embedded?: boolean;
}

const PersonalSection = ({ embedded = false }: PersonalSectionProps) => {
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h4 className={`font-display font-semibold ${embedded ? 'text-base' : 'text-lg'} mb-3`}>
          Travel Gallery
        </h4>
        
        {/* Main Feature Row - 2 large items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured Video Placeholder */}
          <div className="glass rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors">
            <div className="text-center">
              <Video className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2 group-hover:text-primary/60 transition-colors" />
              <p className="text-muted-foreground/60 text-sm">Add Featured Video</p>
              <p className="text-muted-foreground/40 text-xs">Travel highlights reel</p>
            </div>
          </div>
          
          {/* Featured Image Placeholder */}
          <div className="glass rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors">
            <div className="text-center">
              <ImagePlus className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2 group-hover:text-primary/60 transition-colors" />
              <p className="text-muted-foreground/60 text-sm">Add Featured Photo</p>
              <p className="text-muted-foreground/40 text-xs">Favorite destination</p>
            </div>
          </div>
        </div>

        {/* Secondary Row - 3 medium items */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Add Photo", sublabel: "Adventure moment" },
            { label: "Add Video", sublabel: "Short clip", isVideo: true },
            { label: "Add Photo", sublabel: "Scenic view" },
          ].map((item, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden aspect-square flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors"
            >
              <div className="text-center p-2">
                {item.isVideo ? (
                  <Video className="w-8 h-8 text-muted-foreground/40 mx-auto mb-1 group-hover:text-primary/60 transition-colors" />
                ) : (
                  <ImagePlus className="w-8 h-8 text-muted-foreground/40 mx-auto mb-1 group-hover:text-primary/60 transition-colors" />
                )}
                <p className="text-muted-foreground/60 text-xs">{item.label}</p>
                <p className="text-muted-foreground/40 text-[10px] hidden md:block">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 4 smaller items */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Photo", sublabel: "Culture" },
            { label: "Photo", sublabel: "Food" },
            { label: "Video", sublabel: "Vlog", isVideo: true },
            { label: "Photo", sublabel: "Nature" },
          ].map((item, index) => (
            <div 
              key={index}
              className="glass rounded-lg overflow-hidden aspect-square flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors"
            >
              <div className="text-center p-1">
                {item.isVideo ? (
                  <Video className="w-6 h-6 text-muted-foreground/40 mx-auto mb-0.5 group-hover:text-primary/60 transition-colors" />
                ) : (
                  <ImagePlus className="w-6 h-6 text-muted-foreground/40 mx-auto mb-0.5 group-hover:text-primary/60 transition-colors" />
                )}
                <p className="text-muted-foreground/40 text-[10px]">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Row - 2 wide items */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-xl overflow-hidden aspect-[2/1] flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors">
            <div className="text-center">
              <Video className="w-10 h-10 text-muted-foreground/40 mx-auto mb-1 group-hover:text-primary/60 transition-colors" />
              <p className="text-muted-foreground/60 text-sm">Add Panoramic Video</p>
              <p className="text-muted-foreground/40 text-xs">Wide landscape shot</p>
            </div>
          </div>
          <div className="glass rounded-xl overflow-hidden aspect-[2/1] flex items-center justify-center group cursor-pointer hover:bg-primary/5 transition-colors">
            <div className="text-center">
              <ImagePlus className="w-10 h-10 text-muted-foreground/40 mx-auto mb-1 group-hover:text-primary/60 transition-colors" />
              <p className="text-muted-foreground/60 text-sm">Add Panoramic Photo</p>
              <p className="text-muted-foreground/40 text-xs">Mountain or beach view</p>
            </div>
          </div>
        </div>
      </motion.div>

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
