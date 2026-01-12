import { motion } from "framer-motion";
import MetricCounter from "./MetricCounter";
import { TrendingUp, Users, Coins, FileCheck, Clock, Gamepad2, Wallet, Image } from "lucide-react";

const metrics = [
  { value: 75, prefix: "₹", suffix: "L", label: "Profit Impact", icon: TrendingUp },
  { value: 180, prefix: "$", suffix: "K", label: "Revenue Generated", icon: Coins },
  { value: 10000, suffix: "+", label: "Records Validated", icon: FileCheck },
  { value: 66, suffix: "%", label: "TAT Reduction", icon: Clock },
  { value: 6, label: "Developers Led", icon: Users },
  { value: 50, suffix: "+", label: "Games Onboarded", icon: Gamepad2 },
  { value: 100, suffix: "K", label: "Wallets Managed", icon: Wallet },
  { value: 250, suffix: "K", label: "NFTs on Platform", icon: Image },
];

const ImpactDashboard = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid/50 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            By The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable impact across product management and blockchain development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass p-6 rounded-2xl text-center hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <metric.icon className="w-6 h-6 mx-auto mb-4 text-primary/60" />
                  <MetricCounter 
                    value={metric.value} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix} 
                    label={metric.label}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
