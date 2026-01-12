import { motion } from "framer-motion";
import { Plane, Gamepad2, Target } from "lucide-react";

const PersonalSection = () => {
  return (
    <section id="personal" className="py-24">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Digital Nomad */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-glow text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <Plane className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Digital Nomad</h3>
            <p className="text-5xl font-bold text-gradient mb-2">2+</p>
            <p className="text-muted-foreground mb-4">Years of Remote Travel</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Working remotely while exploring new cultures — every destination brings fresh perspective to problem-solving and product thinking.
            </p>
          </motion.div>

          {/* Chess */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-glow text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-orange-400/20 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Chess Enthusiast</h3>
            <p className="text-muted-foreground mb-6">
              Strategy & Pattern Recognition
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chess mirrors product strategy — anticipating moves, optimizing for long-term outcomes, and making decisions with incomplete information.
            </p>
          </motion.div>

          {/* Badminton */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-glow text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
              <Gamepad2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Badminton Player</h3>
            <p className="text-muted-foreground mb-6">
              Speed & Agility
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quick reflexes, endurance, and the balance between offense and defense — skills that translate to fast-paced startup environments.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
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
      </div>
    </section>
  );
};

export default PersonalSection;
