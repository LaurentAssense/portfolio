import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { symfonyImages } from '../../../assets/imageAssets';

export function SymfonyPage() {
  const context = [
    "Afin d'améliorer la promotion de ses produits vétérinaires, le laboratoire GSB a mis en place un système de gestion des relations avec les vétérinaires.",
    'Effectuer un suivi régulier des vétérinaires afin de connaitre leurs problèmes et répondre à leurs questions. Les visiteurs médicaux sont chargés de contacter régulièrement les vétérinaires clients pour répondre au mieux à leurs besoins et anticiper la promotion des nouveaux produits.',
    'Fixer des objectifs commerciaux sur les produits GSB vendus par les vétérinaires clients, afin de mieux cerner le marché et anticiper les changements de comportements des consommateurs.',
  ];

  const technology = [
    'Architecture MVC',
    'Framework Symfony / ORM Doctrine',
    'Langages : HTML, CSS, PHP, JavaScript',
    'Base de données MySQL',
    'Conteneur Docker (PHP, MySQL, PhpMyAdmin)',
    'GitHub',
  ];

  const skills = [
    {
      title: 'Gérer le patrimoine informatique',
      items: [
        'Recenser et identifier les ressources numériques',
        'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
        "Vérifier le respect des règles d'utilisation des ressources numériques",
      ],
    },
    {
      title: 'Travailler en mode projet',
      items: [
        "Analyser les objectifs et les modalités d'organisation d'un projet",
        'Planifier les activités',
        "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
      ],
    },
    {
      title: 'Organiser son développement professionnel',
      items: ["Mettre en place son environnement d'apprentissage personnel"],
    },
  ];

  const annexes = [
    { image: symfonyImages.diagrammeClasse, title: 'Diagramme de classe' },
    { image: symfonyImages.diagrammeCasUtilisation, title: "Diagramme de cas d'utilisation" },
    { image: symfonyImages.listeObjectifs, title: 'Liste des objectifs' },
    { image: symfonyImages.codeIndex, title: 'Code de la page index' },
    { image: symfonyImages.listeProduits, title: 'Liste des produits' },
    { image: symfonyImages.codeTwig, title: 'Code Twig pour les produits' },
    { image: symfonyImages.rechercheVeterinaires, title: 'Recherche des vétérinaires' },
    { image: symfonyImages.buildFormCategory, title: 'Formulaire de mise à jour' },
    { image: symfonyImages.listeUtilisateurs, title: 'Liste des utilisateurs' },
    { image: symfonyImages.codeTwigUsers, title: 'Code Twig utilisateurs' },
    { image: symfonyImages.modificationUtilisateur, title: "Modification d'un utilisateur" },
    { image: symfonyImages.structureProjet, title: 'Structure du projet' },
  ];

  const [expanded, setExpanded] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleSkill = (index: number) => {
    setExpanded((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projet GsbVeto : gestion des relations avec les vétérinaires
          </h1>
          <div className="h-1 w-20 bg-blue-600"></div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contexte</h2>
            <div className="space-y-3">
              {context.map((paragraph) => (
                <p key={paragraph} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Environnement technologique</h2>
            <ul className="space-y-2">
              {technology.map((tech) => (
                <li key={tech} className="text-slate-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">&gt;</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Compétences</h2>
            <div className="space-y-3">
              {skills.map((skill, i) => (
                <div key={skill.title} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => toggleSkill(i)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-left">{skill.title}</span>
                    <ChevronDown
                      className={`text-blue-600 flex-shrink-0 transition-transform ${
                        expanded.includes(i) ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  {expanded.includes(i) && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-3 space-y-2 border-t border-slate-200"
                    >
                      {skill.items.map((item) => (
                        <li key={item} className="text-slate-700 flex items-start gap-2 pt-2">
                          <span className="text-blue-600">&gt;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Annexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {annexes.map((annexe, i) => (
                <motion.div
                  key={`${annexe.title}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(annexe.image)}
                >
                  <div className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-md transition-all">
                    <div className="aspect-video bg-slate-100 overflow-hidden">
                      <img
                        src={annexe.image}
                        alt={annexe.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-lg p-2 shadow-2xl">
              <img
                src={selectedImage}
                alt="Annexe agrandie"
                className="w-full h-full max-h-[85vh] object-contain rounded"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
