import { motion } from 'motion/react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
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
            PORTFOLIO | LAURENT ASSENSÉ
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-blue-600"
          ></motion.div>
        </motion.div>

        <div className="space-y-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-4 border-blue-600 pl-8 pr-4 py-3"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Actuellement étudiant à l’Institut Supérieur des Sciences Et Techniques (INSSET) de Saint-Quentin en<br />
              <span className="text-slate-900 font-semibold">Licence professionnelle Métiers de l'informatique</span> : conception, développement et test de logiciels.<br />
              Je suis à la recherche d'un <span className='text-slate-900 font-semibold'>stage d'une durée de minimum 15 semaines à partir du 04/05/2026 dans le domaine</span><br />
              conception et développement d'applications web et mobile.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-blue-600 pl-8 pr-4 py-3"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Ce portfolio a pour objectif de présenter les cas pratiques et projets professionnels 
              menés tout au long de mon parcours universitaire, ainsi que les certifications obtenues.<br></br>
              Vous y trouverez également mon CV détaillant mon parcours académique et mes expériences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-l-4 border-blue-600 pl-8 pr-4 py-3"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              J’ai pour ambition de renforcer mes compétences et de perfectionner mon savoir-faire.<br />
              Intégrer une école d’ingénieur en informatique constitue pour moi une étape essentielle pour évoluer, à terme, vers un 
              poste à responsabilités dans le domaine du développement informatique.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
