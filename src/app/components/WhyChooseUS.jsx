"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const purpleTextStyle = {
    color: "#8B5CF6", // Light Purple Color
  };

  return (
    <motion.section
      id="why-choose-us"
      className="text-white py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Why Choose{" "}
          <span style={purpleTextStyle}>OperateWise Limited</span>
        </h2>
        <motion.p className="text-lg mb-8 text-center" variants={itemVariants}>
          Forget off-the-shelf solutions that leave you wanting more. At OperateWise Limited, we offer a powerful combination of experience, expertise, and a true partnership approach to empower your business with custom software solutions that deliver game-changing results.
        </motion.p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={itemVariants}>
          <div className="flex flex-col items-center bg-[#282c36] rounded p-6">
            <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
            <p className="text-base">
              We believe in solutions that fit like a glove, not a one-size-fits-all approach. We take the time to understand your specific goals, challenges, and workflows to craft a software solution that perfectly aligns with your vision.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#282c36] rounded p-6">
            <h3 className="text-2xl font-bold mb-4">Measurable Results</h3>
            <p className="text-base">
              We don't operate on gut feeling. We leverage in-depth analysis and data insights to make informed decisions throughout the process, ensuring your solution delivers quantifiable improvements and tangible ROI.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#282c36] rounded p-6">
            <h3 className="text-2xl font-bold mb-4">Agile & Collaborative Approach</h3>
            <p className="text-base">
              We believe in transparency and collaboration. We work iteratively, keeping you involved at every step and incorporating your feedback to ensure the final solution surpasses expectations.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#282c36] rounded p-6">
            <h3 className="text-2xl font-bold mb-4">Long-Term Commitment</h3>
            <p className="text-base">
              Our partnership doesn't end with launch. We offer ongoing support, maintenance, and optimization to ensure your software continuously evolves with your business needs, staying ahead of the curve and maximizing its value over time.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
