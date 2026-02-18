import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Coffee, Users, Briefcase } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '5+', label: 'Années d\'expérience' },
  { icon: Users, value: '50+', label: 'Clients satisfaits' },
  { icon: Award, value: '100+', label: 'Projets réalisés' },
  { icon: Coffee, value: '1000+', label: 'Tasses de café' }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              À propos de moi
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-9xl">
                      🎯
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-2xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-2xl -z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-3xl text-slate-900">
                  Développeur passionné
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Bonjour ! Je suis Laurent, développeur full stack passionné par 
                  la création d'expériences web exceptionnelles. Avec une expertise 
                  en React, TypeScript et Node.js, je transforme des idées en 
                  applications performantes et élégantes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Mon approche combine design réfléchi et code de qualité pour 
                  créer des solutions qui non seulement fonctionnent bien, mais 
                  qui sont aussi agréables à utiliser.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Je crois fermement en l'apprentissage continu et j'aime rester 
                  à jour avec les dernières technologies et tendances du 
                  développement web.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl mb-2 text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
