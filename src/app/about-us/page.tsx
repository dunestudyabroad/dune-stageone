import Layout from "@/components/Layout/Layout";
import React from "react";

const AboutRadhikaPage = () => {
  return (
    <Layout>
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-24 lg:py-16">
        {/* Heading */}
        <div>
          <h2 className="text-2xl md:text-[44px] font-bold text-gray-900 leading-snug">
            About
            <span className="block text-[#CEB3FE]">Radhika Deemanth Suvarna</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium text-[#9A77D8]">Transforming Dreams into International Journeys</p>
        </div>

        {/* Two-column content */}
        <div className="mt-7 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
              Radhika Deemanth Suvarna is a dynamic entrepreneur, visionary educationist, and dedicated career mentor with over 20 years of
              professional experience. At the helm of the Mangaluru operations, she is passionately committed to empowering students to achieve their
              global education aspirations.
            </p>

            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
              Her distinguished career is a testament to her leadership and dedication. Journeying from customer relations to holding key leadership
              roles in education, healthcare, and management, she has cultivated a profound ability to connect with people, lead teams, and develop
              impactful, student-centric solutions.
            </p>

            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
              Armed with a Master’s in Business Administration (HR & Marketing) and a Bachelor’s in Human Resource Management, Radhika blends academic
              expertise with real-world insight. This powerful combination allows her to effectively mentor students, conduct inspiring seminars at
              prestigious institutions, and instill the confidence needed to explore global opportunities.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
              Her mentorship is both comprehensive and personal. She excels at guiding students through the entire process—from identifying best-fit
              universities and programs that align with their strengths, to providing hands-on support in developing communication skills and a global
              outlook. Her guidance has been instrumental in shaping the academic and professional success of countless young individuals.
            </p>

            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
              Beyond her professional accolades, Radhika is known for her approachable nature, unwavering ethical values, and deep-seated commitment
              to student success. She fosters a supportive environment where every student receives personalized attention, ensuring clarity and
              confidence at every step, from university applications to navigating the visa process.
            </p>

            <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed font-medium italic">
              Her mission is simple yet profound: to empower students to dream big, achieve beyond boundaries, and step confidently into a brighter,
              global future.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutRadhikaPage;
