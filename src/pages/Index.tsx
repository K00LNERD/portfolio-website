import HeroSection from "@/components/HeroSection";
import TimelineNav from "@/components/TimelineNav";
import TimelineTile from "@/components/TimelineTile";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import SkillsSection from "@/components/SkillsSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import techBackground from "@/assets/tech-background.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed tech background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${techBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <TimelineNav />
        
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Timeline Content */}
        <div id="timeline" className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Present - Product Management */}
            <TimelineTile
              id="present"
              year="2025"
              title="Product Management"
              subtitle="CARS24 • Leading BRE Migration"
              icon="work"
              isActive={true}
            >
              <ExperienceCard
                company="CARS24"
                role="Product Management Intern"
                duration="Apr 2025 - Jun 2025"
                location="India"
                description="Leading the transformation of credit decisioning infrastructure through a strategic BRE migration initiative. Driving end-to-end product ownership of the Business Rules Engine migration, collaborating with cross-functional teams to streamline loan approval workflows and enhance operational efficiency."
                achievements={[
                  "Spearheaded BRE migration reducing turnaround time by 66%",
                  "Validated 10,000+ records ensuring seamless data integrity",
                  "Projected ₹75 Lakh annual profit increase through process optimization",
                  "Collaborated with engineering and data teams for end-to-end delivery",
                ]}
                metrics={[
                  { value: 66, suffix: "%", label: "TAT Reduction" },
                  { value: 75, prefix: "₹", suffix: "L", label: "Profit Increase" },
                  { value: 10000, suffix: "+", label: "Records Validated" },
                ]}
                technologies={["Python", "BRE Systems", "Data Validation", "Process Optimization"]}
                isCurrent={true}
                variant="highlight"
              />
            </TimelineTile>

            {/* Blockchain Leadership */}
            <TimelineTile
              id="blockchain-lead"
              year="2024"
              title="Blockchain Leadership"
              subtitle="Sparkshift & Ethix Labs • Web3 Architecture"
              icon="work"
            >
              <div className="space-y-6">
                <ExperienceCard
                  company="Sparkshift"
                  role="Blockchain Lead"
                  duration="Apr 2024 - Jul 2024"
                  description="Architected Web3 gaming infrastructure for a play-to-earn ecosystem. Led the development of comprehensive smart contract suite including Vesting, Airdrop, NFT, FT, and Marketplace contracts. Integrated Wallet-as-a-Service (WaaS) for seamless user onboarding."
                  achievements={[
                    "Designed and deployed complete smart contract ecosystem in 3 months",
                    "Integrated Wallet-as-a-Service for frictionless Web3 onboarding",
                    "Collaborated with 3D designers for immersive gaming experience",
                    "Established technical architecture for scalable gaming platform",
                  ]}
                  technologies={["Solidity", "Web3.js", "NFT Standards", "WaaS", "Play-to-Earn"]}
                />
                
                <ExperienceCard
                  company="Ethix Labs"
                  role="Blockchain Lead"
                  duration="May 2023 - Jan 2024"
                  location="Remote"
                  description="Led a team of 6 developers to deliver blockchain solutions generating $180K in revenue. Established technical standards and best practices while managing client relationships across global markets. Specialized in Algorand blockchain development."
                  achievements={[
                    "Generated $180K in revenue through strategic project delivery",
                    "Led team of 6 developers across multiple blockchain projects",
                    "Built NFT marketplaces and DeFi protocols on Algorand",
                    "Established technical documentation and development standards",
                  ]}
                  metrics={[
                    { value: 180, prefix: "$", suffix: "K", label: "Revenue Generated" },
                    { value: 6, label: "Developers Led" },
                  ]}
                  technologies={["Algorand", "Smart Contracts", "NFT Marketplace", "DeFi", "PyTeal"]}
                />
              </div>
            </TimelineTile>

            {/* Developer Foundations */}
            <TimelineTile
              id="blockchain-dev"
              year="2022-23"
              title="Developer Foundations"
              subtitle="KnowFly Labs • Blockchain Infrastructure"
              icon="work"
            >
              <ExperienceCard
                company="KnowFly Labs"
                role="Blockchain Developer"
                duration="Oct 2022 - Apr 2023"
                description="Built the foundational blockchain infrastructure that powered the platform's growth from 0 to 50+ games. Created reusable NFT/FT templates and integrated wallet solutions managing 100K wallets and 250K NFTs."
                achievements={[
                  "Scaled platform from 0 to 50+ games onboarded",
                  "Built wallet integration managing 100K+ user wallets",
                  "Created 250K+ NFTs through optimized minting templates",
                  "Developed comprehensive developer documentation",
                ]}
                metrics={[
                  { value: 50, suffix: "+", label: "Games Onboarded" },
                  { value: 100, suffix: "K", label: "Wallets Managed" },
                  { value: 250, suffix: "K", label: "NFTs Created" },
                ]}
                technologies={["Algorand", "NFT Templates", "Wallet Integration", "APIs"]}
              />
            </TimelineTile>

            {/* Education Journey */}
            <TimelineTile
              id="education"
              year="2019-26"
              title="Education Journey"
              subtitle="IIFT Kolkata • VIT Vellore"
              icon="education"
            >
              <div className="space-y-6">
                <EducationCard
                  institution="Indian Institute of Foreign Trade (IIFT)"
                  degree="Master of Business Administration"
                  specialization="International Business"
                  duration="2024 - 2026"
                  achievements={[
                    "Pursuing specialization in International Business Strategy",
                    "Bridging technical expertise with business acumen",
                    "Focus on product management and market strategy",
                  ]}
                  certifications={[
                    { name: "Product Management Marketing", provider: "Udemy", year: "2024" },
                    { name: "Product Management 101", provider: "Udemy", year: "2024" },
                  ]}
                />

                <EducationCard
                  institution="VIT Vellore"
                  degree="Bachelor of Technology"
                  specialization="Electronics & Communication Engineering"
                  duration="2019 - 2023"
                  score="CGPA: 7.07/10"
                  achievements={[
                    "Event Coordinator - IET on Campus VIT (2019)",
                    "VITTUC Conference - Led mock UN setup on AI regulation & green energy",
                    "Collaborated with industry leaders including representatives from Tesla and Google",
                  ]}
                  certifications={[
                    { name: "Computational Vision", provider: "University of Colorado Boulder", year: "2020" },
                  ]}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EducationCard
                    institution="Delhi Public School, Bhilai"
                    degree="Class XII"
                    duration="2018"
                    score="68.6%"
                  />
                  <EducationCard
                    institution="Delhi Public School, Durg"
                    degree="Class X"
                    duration="2016"
                    score="CGPA: 10/10"
                    achievements={["Perfect Score Achievement"]}
                  />
                </div>
              </div>
            </TimelineTile>

            {/* Personal Section */}
            <TimelineTile
              id="personal"
              year="Beyond"
              title="Personal Journey"
              subtitle="Digital Nomad • Travel Adventures"
              icon="personal"
            >
              <PersonalSection embedded />
            </TimelineTile>
          </div>
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Impact Dashboard */}
        <ImpactDashboard />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
