import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to Product Management roles, Web3 consulting, and collaborative projects.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:placements@iift.edu"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover-lift hover:border-primary/30 transition-all group"
            >
              <Mail className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">placements@iift.edu</p>
            </motion.a>

            <motion.a
              href="tel:01139147305"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover-lift hover:border-primary/30 transition-all group"
            >
              <Phone className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">011-39147305</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <MapPin className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Kolkata, India</p>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover-lift hover:glow-cyan transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover-lift hover:glow-cyan transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full glow-cyan"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-full border-border hover:bg-muted hover:border-primary/50 transition-all"
            >
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Srijan Varma. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
