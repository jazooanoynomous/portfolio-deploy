"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const STAGES = [
  {
    title: "Our Moto",
    id: "Our Moto",
    content: (
      <>
        <p className="text-base lg:text-lg">
          YOUR SOFTWARE PARTNER FOR YOUR BUSINESS TRANSFORMATION
        </p>
        <p className="text-base lg:text-lg">
        Delivering custom software solutions to automate tasks and take your business to the next level

</p>
      </>
    ),
  },
  {
    title: "Deep Dive Discovery",
    id: "deep-dive",
    content: (
      <>
        <p className="text-base lg:text-lg">
          We don't begin with assumptions; we begin with immersion. Through in-depth interviews, data analysis, and process mapping, we collaboratively uncover your unique business challenges, goals, and workflows. This deep dive ensures our custom software solution isn't just built for you, it's built with you.
        </p>
      </>
    ),
  },
  {
    title: "Design and Execution",
    id: "design-execution",
    content: (
      <>
        <p className="text-base lg:text-lg">
          Leveraging our expertise and your insights, we co-create a solution that seamlessly integrates with your existing systems and infrastructure. We utilize cutting-edge technologies to address your specific needs, maximizing efficiency and impact. Agile development keeps you involved throughout the process, ensuring the solution perfectly reflects your vision.
        </p>
      </>
    ),
  },
  {
    title: "Delivery and Ongoing Support",
    id: "delivery-support",
    content: (
      <>
        <p className="text-base lg:text-lg">
          Your success is our success. We don't disappear after launch. Our expert implementation ensures smooth integration and minimal disruption. Comprehensive training empowers your team to utilize the software effectively, while ongoing support and maintenance guarantee long-term value. We proactively address issues and optimize your solution, ensuring it continually evolves alongside your business.
        </p>
      </>
    ),
  },
];

const AboutSection = () => {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStageIndex((prevIndex) => (prevIndex + 1) % STAGES.length);
    }, 5000); // Change stage every 15 seconds

    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (index) => {
    setStageIndex(index);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us &  Our Strategies</h2>
          <div className="flex flex-row justify-start mt-8">
  {STAGES.map((stage, index) => (
    <TabButton
      key={index}
      selectTab={() => handleTabChange(index)}
      active={stageIndex === index}
    >
      {stage.title}
    </TabButton>
  ))}
</div>

          <div className="mt-8">
            {STAGES[stageIndex].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
