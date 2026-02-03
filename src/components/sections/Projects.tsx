"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, Folder, Brain, Globe, FlaskConical, Cpu, Box } from "lucide-react";
import { projects } from "@/lib/data";
import {
  Section,
  SectionHeader,
  Card,
  Badge,
  Button,
  FadeInWhenVisible,
  GradientThumbnail,
  ProjectThumbnail,
} from "@/components/ui";

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  ai: <Brain className="w-5 h-5" />,
  web: <Globe className="w-5 h-5" />,
  research: <FlaskConical className="w-5 h-5" />,
  systems: <Cpu className="w-5 h-5" />,
  other: <Box className="w-5 h-5" />,
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web" },
  { id: "research", label: "Research" },
  { id: "systems", label: "Systems" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <Section id="projects" withGrid>
      <SectionHeader
        title="Projects"
        subtitle="A selection of projects I've built, from AI-powered applications to full-stack systems."
      />

      {/* Category Filter */}
      <FadeInWhenVisible>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white"
                  : "bg-background-secondary border border-border text-foreground-muted hover:text-foreground hover:border-border-hover"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </FadeInWhenVisible>

      {/* Featured Projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {featuredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {featuredProjects.map((project, index) => (
                <FadeInWhenVisible key={project.id} delay={index * 0.1}>
                  <Card
                    variant="interactive"
                    padding="none"
                    className="h-full group relative overflow-hidden"
                  >
                    {/* Project Thumbnail Header */}
                    <ProjectThumbnail
                      title={project.title}
                      category={project.category}
                      className="mb-0"
                    />

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="primary">Featured</Badge>
                    </div>

                    {/* Category Icon Overlay */}
                    <div className="absolute top-4 left-4">
                      <GradientThumbnail
                        text={project.title}
                        category={project.category}
                        size="sm"
                        icon={categoryIcons[project.category] || <Folder className="w-4 h-4" />}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted mb-4 line-clamp-3">
                        {project.longDescription || project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                          <Badge variant="outline">
                            +{project.technologies.length - 5}
                          </Badge>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        {project.paper && (
                          <a
                            href={project.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              ))}
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                More Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project, index) => (
                  <FadeInWhenVisible key={project.id} delay={index * 0.05}>
                    <Card
                      variant="default"
                      padding="md"
                      className="h-full group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <GradientThumbnail
                          text={project.title}
                          category={project.category}
                          size="sm"
                          icon={categoryIcons[project.category] || <Folder className="w-4 h-4" />}
                        />
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground-muted hover:text-foreground transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground-muted hover:text-foreground transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-foreground-muted line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-foreground-muted"
                          >
                            {tech}
                            {project.technologies.indexOf(tech) < 2 &&
                              project.technologies.length > 1 &&
                              " · "}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </FadeInWhenVisible>
                ))}
              </div>
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground-muted">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
