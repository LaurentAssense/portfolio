import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour aux projets</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projet {slug}</h1>
          <div className="h-1 w-20 bg-blue-600"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-slate-200 rounded-xl p-12 text-center"
        >
          <p className="text-slate-600 text-lg">Contenu à venir pour ce projet...</p>
        </motion.div>
      </div>
    </div>
  );
}
