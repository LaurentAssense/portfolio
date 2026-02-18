import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Smartphone, Zap, Globe, Database } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Développement Frontend',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Développement Backend',
    description: 'Node.js, Python, API REST, GraphQL',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Figma, Adobe XD, Prototypage, Design Systems',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first, Progressive Web Apps',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation, SEO, Lighthouse',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Déploiement',
    description: 'Vercel, AWS, Docker, CI/CD',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              Compétences
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-slate-900">
                  {skill.title}
                </h3>
                <p className="text-slate-600">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}