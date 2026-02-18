import { motion } from 'motion/react';
import { Briefcase, FileText } from 'lucide-react';
import { cvDocuments } from '../../assets/imageAssets';

export function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">CV et stages réalisés</h1>
          <div className="h-1 w-20 bg-blue-600"></div>
        </motion.div>

        <div className="space-y-8">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={cvDocuments.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-slate-200 rounded-xl p-12 text-center hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <FileText className="text-blue-600 mx-auto mb-6" size={64} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Mon Curriculum Vitae</h2>
            <p className="text-slate-600">Cliquez pour ouvrir mon CV dans un nouvel onglet.</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            href={cvDocuments.stage1}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-slate-200 rounded-xl p-12 text-center hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <Briefcase className="text-blue-600 mx-auto mb-6" size={64} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Stage 1ère année de BTS</h2>
            <p className="text-slate-600">Cliquez pour ouvrir le rapport de stage dans un nouvel onglet.</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href={cvDocuments.stage2}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-slate-200 rounded-xl p-12 text-center hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <Briefcase className="text-blue-600 mx-auto mb-6" size={64} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Stage 2ème année de BTS</h2>
            <p className="text-slate-600">Cliquez pour ouvrir le rapport de stage dans un nouvel onglet.</p>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
