"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
// ... (imports remain the same)

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
             Welcome, We are Operate Wise & provides{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Development",
                500,
                "Mobile App Development",
                500,
                "UI/UX Design",
                500,
                "Custom Software Development",
                500,
                "Technology Consulting",
                500,
                "E-commerce Solutions",
                500,
                "Data Analytics and Business Intelligence",
                500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Tired of off-the-shelf solutions that fall short? At OperateWise
            Limited, we empower businesses like yours to achieve breakthrough
            results with custom software solutions. We go beyond just "making
            software". We become your trusted partner, deeply understanding your
            unique challenges, crafting tailored solutions that fit seamlessly,
            and providing ongoing support to ensure your long-term success.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Get Quote
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
