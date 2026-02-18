import { motion } from 'motion/react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bienvenue sur mon portfolio
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-blue-600"
          ></motion.div>
        </motion.div>

        <div className="space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-4 border-blue-600 pl-6 py-2"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Actuellement étudiant à l'<span className="text-slate-900 font-semibold">INSSET de Saint-Quentin</span> en{' '}
              <span className="text-slate-900 font-semibold">Licence professionnelle Métiers de l'informatique : conception, développement et test de logiciels</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-blue-600 pl-6 py-2"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Je vous propose de retrouver sur ce portfolio les différentes études, certifications et projets
              professionnels que j'ai pu entreprendre au sein de ma scolarité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-l-4 border-blue-600 pl-6 py-2"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Je suis désireux de constamment approfondir mes connaissances. Je souhaiterai intégrer une
              école d'ingénieur informatique, afin d'avoir je l'espère un poste à responsabilité plus tard.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
