"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import TeamTag from "./TeamTag";
import { motion, useInView } from "framer-motion";
//import TeamTag from "./TeamTag";

const projectsData = [
  {
    id: 1,
    title: "UI/UX Developer",
    description: "Meet our UI/UX maestro, [Designer's Name]. With a blend of creativity and user-centric thinking, they craft visually stunning and intuitively designed experiences, ensuring our digital solutions not only meet but exceed user expectations.",
    image: "/images/projects/1.png",
    tag: ["All", "Web","UI/UX Designers"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project Manager",
    description: "Meet our Project Manager, [Managers Name]. Expertly navigating projects from start to finish, [Manager's Name] ensures smooth collaboration, on-time delivery, and client satisfaction.",
    image: "/images/projects/2.png",
    tag: ["All", "Managers"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "WordPress Developer",
    description: "Developer description",
    image: "/images/projects/3.png",
    tag: ["All", "Developers"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Developers",
    description: "React Native Developer",
    image: "/images/projects/4.png",
    tag: ["All", "Developers"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Software Quality Assurance/ Testers",
    description: "SQA Engineer 1",
    image: "/images/projects/5.png",
    tag: ["All", "SQA"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "UI/UX Developer2",
    description: "second UI/UX  description",
    image: "/images/projects/6.png",
    tag: ["All", "UI/UX Designers"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Team
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <TeamTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <TeamTag
          onClick={handleTagChange}
          name="UI/UX Designers"
          isSelected={tag === "UI/UX Designers"}
        />
        <TeamTag
          onClick={handleTagChange}
          name="Managers"
          isSelected={tag === "Managers"}
        />
        <TeamTag
          onClick={handleTagChange}
          name="Developers"
          isSelected={tag === "Developers"}
        />
        <TeamTag
          onClick={handleTagChange}
          name="SQA"
          isSelected={tag === "SQA"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
