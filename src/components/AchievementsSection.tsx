"use client";
import { Trophy, Award, Star, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Star,
      title: "NMMS Achievement",
      description: "Cleared NMMS (National Means-cum-Merit Scholarship) Exam in Class 10. Awarded a national-level scholarship by the Government of India for academic excellence."
    },
    {
      icon: Award,
      title: "KSCST Project Selection",
      description: "Breast Tumor Segmentation project selected by Karnataka State Council for Science and Technology for innovation and research."
    },
    {
      icon: Target,
      title: "CODEKAZE Participant",
      description: "Participated in CODEKAZE coding competition hosted by Coding Ninjas in June 2023, showcasing problem-solving skills."
    },
    {
      icon: Trophy,
      title: "TechGig Coding Rank",
      description: "Achieved a rank of 841 in C programming competition on TechGig in March 2021 among thousands of participants."
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-[#581c87] via-[#a78bfa] to-[#f3f4ff] min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-2 relative group inline-block">
            Achievements
            <div className="w-16 h-1.5 bg-black mt-2 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-black/80 text-lg mt-4 font-semibold">
            Recognition and professional accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="p-8 bg-white/40 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-2 cursor-default group rounded-[24px]"
            >
              <div className="flex flex-col items-start">
                <div className="mb-6 w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <achievement.icon className="w-7 h-7 text-black group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-black text-2xl font-bold mb-3 group-hover:underline transition-all">
                  {achievement.title}
                </h3>
                
                <p className="text-black/80 text-base leading-relaxed font-semibold">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;