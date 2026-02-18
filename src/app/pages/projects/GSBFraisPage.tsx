import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Check, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { gsbFraisImages } from '../../../assets/imageAssets';

export function GSBFraisPage() {
  const context = [
    'Le laboratoire Galaxy Swiss Bourdin (GSB) résulte de la fusion en 2009 de Galaxy, spécialisé dans les maladies virales, et de Swiss Bourdin. Son siège administratif est à Paris, tandis que son siège social est à Philadelphie, aux États-Unis.',
    "GSB emploie 540 visiteurs médicaux. L'entreprise compte 480 visiteurs médicaux en France métropolitaine et 60 dans les départements et territoires d'outre-mer.",
    'Les visiteurs médicaux sont répartis en 7 secteurs géographiques : Paris-Centre, Sud, Nord, Ouest, Est, DOM-TOM Caraïbes-Amériques, DOM-TOM Asie-Afrique.',
    "Leur mission est d'informer les professionnels de santé sur les produits du laboratoire. Leurs frais de déplacement sont remboursés sur une base forfaitaire après justification.",
  ];

  const technology = ['Architecture MVC', 'Langage : PHP, Bootstrap', 'Conteneur : Docker', 'GitHub'];

  const work = ['Travail en équipe de quatre personnes avec une partie individuelle'];

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
      title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
      items: ['Collecter, suivre et orienter des demandes', 'Traiter des demandes concernant les applications'],
    },
    {
      title: "Développer la présence en ligne de l'organisation",
      items: ["Participer à l'évolution d'un site Web exploitant les données de l'organisation"],
    },
    {
      title: 'Travailler en mode projet',
      items: [
        "Analyser les objectifs et les modalités d'organisation d'un projet",
        'Planifier les activités',
      ],
    },
    {
      title: 'Mettre à disposition des utilisateurs un service informatique',
      items: ["Réaliser les tests d'intégration et d'acceptation d'un service", 'Déployer un service'],
    },
  ];

  const annexes = [
    { title: 'Diagramme de classe', image: gsbFraisImages.diagrammeClasse },
    { title: 'Maintenance de la saisie des frais hors forfait', image: gsbFraisImages.bugSaisie },
    { title: 'Maintenance de la consultation des fiches frais', image: gsbFraisImages.fichesFrais },
    { title: 'Maintenance évolutive du contrôle de kilomètres', image: gsbFraisImages.noteService },
    { title: 'Création de la table region', image: gsbFraisImages.createRegion },
    { title: 'Clé étrangère reliée à la table utilisateur', image: gsbFraisImages.createUtilisateur },
    { title: 'Insertion des données', image: gsbFraisImages.insertRegion },
    {
      title: 'Maintenance évolutive de la nouvelle fonctionnalité Indicateurs',
      image: gsbFraisImages.tableauVisiteurs,
    },
    { title: 'Fiche frais forfait', image: gsbFraisImages.validationFrais },
    { title: 'Indicateur pour les visiteurs médicaux', image: gsbFraisImages.codeMontantTotales },
    { title: 'Validation des frais', image: gsbFraisImages.bugValidation },
    { title: 'Note de service pour les indicateurs', image: gsbFraisImages.noteServiceIndicateurs },
    { title: 'Code pour les montants totaux', image: gsbFraisImages.codeMontantTotales },
    { title: 'Code pour le tableau des visiteurs', image: gsbFraisImages.codeTableauVisiteurs },
    { title: 'Architecture MVC', image: gsbFraisImages.architectureMVC },
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projet GSB Frais</h1>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Travail</h2>
            {work.map((item) => (
              <p key={item} className="text-slate-700 flex items-start gap-2">
                <span className="text-blue-600 font-bold">&gt;</span>
                <span>{item}</span>
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
                          <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
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
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Annexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {annexes.map((annexe, i) => (
                <motion.div
                  key={`${annexe.title}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
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
