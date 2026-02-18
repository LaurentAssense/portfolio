import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Application E-commerce',
    description: 'Plateforme de vente en ligne complète avec panier, paiement sécurisé et gestion des commandes en temps réel.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'modern ecommerce website',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser des données complexes avec graphiques dynamiques.',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
    image: 'analytics dashboard',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Application Mobile',
    description: 'Application mobile hybride pour la gestion de tâches avec synchronisation cloud instantanée.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'mobile app interface',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Portfolio Créatif',
    description: 'Site portfolio pour artiste avec galerie interactive et animations fluides.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    image: 'creative portfolio website',
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Plateforme SaaS',
    description: 'Solution SaaS complète avec authentification sécurisée et gestion multi-utilisateurs.',
    tags: ['React', 'Supabase', 'Stripe', 'PostgreSQL'],
    image: 'saas platform',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Site E-learning',
    description: 'Plateforme d\'apprentissage en ligne avec cours vidéo, quiz et suivi de progression.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    image: 'online learning platform',
    color: 'from-pink-500 to-rose-500'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              Projets Récents
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
