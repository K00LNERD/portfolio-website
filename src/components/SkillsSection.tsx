import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Product Management",
    color: "from-primary to-accent",
    skills: ["Stakeholder Management", "Product Architecture", "Agile/Scrum", "Requirements Gathering", "Data Analysis", "A/B Testing"],
  },
  {
    name: "Blockchain & Web3",
    color: "from-secondary to-orange-400",
    skills: ["Smart Contracts", "Algorand", "NFT/FT Standards", "DeFi Protocols", "Wallet Integration", "Tokenomics"],
  },
  {
    name: "Technical",
    color: "from-emerald-400 to-teal-500",
    skills: ["Python", "Solidity", "Web3.js", "Git", "API Integration", "Testing & QA"],
  },
  {
    name: "Business & Strategy",
    color: "from-purple-400 to-pink-500",
    skills: ["International Business", "Cross-functional Leadership", "Revenue Generation", "Client Management", "Market Analysis"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unique blend of technical depth and business acumen, bridging the gap between blockchain innovation and product strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
