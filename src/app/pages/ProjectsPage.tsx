import { motion } from 'motion/react';
import { Link } from 'react-router';
import { projectDocuments, projectIcons } from '../../assets/imageAssets';

type InternalProject = {
  title: string;
  icon: string;
  to: string;
  external: false;
};

type ExternalProject = {
  title: string;
  icon: string;
  href: string;
  external: true;
};

type Project = InternalProject | ExternalProject;

const projects: Project[] = [
  {
    title: 'GSB Projet Équipement',
    icon: projectIcons.gsbEquipement,
    href: projectDocuments.gsbEquipement,
    external: true,
  },
  {
    title: 'GSB Frais',
    icon: projectIcons.gsbFrais,
    to: '/projets/gsb-frais',
    external: false,
  },
  {
    title: 'Symfony',
    icon: projectIcons.symfony,
    to: '/projets/symfony',
    external: false,
  },
  {
    title: 'Dotnet',
    icon: projectIcons.dotnet,
    to: '/projets/dotnet',
    external: false,
  },
  {
    title: 'Tableau de synthèse',
    icon: projectIcons.synthese,
    href: projectDocuments.tableauSynthese,
    external: true,
  },
  {
    title: 'Veille Technologique',
    icon: projectIcons.veilleTechnologique,
    href: projectDocuments.veilleTechnologique,
    external: true,
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mes Projets</h1>
          <div className="h-1 w-20 bg-blue-600 mb-8"></div>

          <p className="text-lg text-slate-600 max-w-2xl">
            Découvrez les différents projets sur lesquels j&apos;ai travaillé au cours de mes formations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const card = (
              <div className="bg-white border border-slate-200 rounded-xl p-8 h-full hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-400 transition-all overflow-hidden">
                    <img src={project.icon} alt={project.title} className="w-full h-full object-contain p-1" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {project.external ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  <Link to={project.to}>{card}</Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
