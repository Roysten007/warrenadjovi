import React, { useState } from 'react';
import { CategoryType, Project } from '../types';
import { PROJECTS_DATA } from '../data/content';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="realisations" className="py-24 relative bg-black overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Mes dernières{' '}
            <span className="text-[#84cc16] font-extrabold">réalisations</span>
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
            Parcourez une sélection de mes meilleurs projets. Chaque réalisation reflète une approche stratégique et un objectif clair : performer.
          </p>
        </div>

        {/* Clean 4-Column Video Grid without text legends */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Interactive Video Player Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
