import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profilePicture from "@/assets/PXL_20250809_130016659~2.jpg";

const HeroSection = () => {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Srijan Varma_CV.pdf';
    link.download = 'Srijan_Varma_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability - lighter overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed top-8 right-8 z-50 flex gap-4"
      >
        <a
          href="https://www.linkedin.com/in/srijan-varma-iift/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass rounded-full hover-lift hover:glow-cyan transition-all"
        >
          <Linkedin className="w-5 h-5 text-foreground" />
        </a>
        <a
          href="https://github.com/K00LNERD"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass rounded-full hover-lift hover:glow-cyan transition-all"
        >
          <Github className="w-5 h-5 text-foreground" />
        </a>
        <a
          href="mailto:nsrijan90@gmail.com"
          className="p-3 glass rounded-full hover-lift hover:glow-cyan transition-all"
        >
          <Mail className="w-5 h-5 text-foreground" />
        </a>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Profile picture container with glow */}
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
              
              {/* Profile picture */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 glass">
                <img
                  src={profilePicture}
                  alt="Srijan Varma"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-success/30">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-success">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                Product Manager • Blockchain DEV • MBA (Strategy Major)
              </span>
            </motion.div>

            {/* Side by side name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              style={{ textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.9)' }}
            >
              <span className="text-foreground">SRIJAN</span>
              <span className="text-foreground ml-4 md:ml-6">VARMA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.95)' }}
            >
              From Code to Product: Bridging{" "}
              <span className="text-primary font-medium">Blockchain Innovation</span>{" "}
              & Strategic Execution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full glow-cyan"
                onClick={scrollToTimeline}
              >
                Explore My Journey
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-medium rounded-full border-border hover:bg-muted hover:border-primary/50 transition-all"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-primary/50 rounded-full flex justify-center pt-1.5"
        >
          <motion.div 
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
