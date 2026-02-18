import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Check, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { dotnetImages } from '../../../assets/imageAssets';

const technologies = [
  'Architecture applicative en couches',
  '.NET Framework / ORM Entity Framework',
  'Langages : C#, Linq To Entities',
  'Base de données MS SQL Server',
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
    title: 'Mettre à disposition des utilisateurs un service informatique',
    items: ["Réaliser les tests d'intégration et d'acceptation d'un service"],
  },
];

const annexes: { image: string; title: string }[] = [
  { image: dotnetImages.diagrammeClasse, title: 'Diagramme de classe' },
  { image: dotnetImages.listeZones, title: 'Liste des zones de stockage' },
  { image: dotnetImages.codeRemplirListe, title: 'Code pour remplir la liste des zones' },
  { image: dotnetImages.formulaireAjout, title: "Formulaire d'ajout de zone" },
  { image: dotnetImages.codeEnregistrement, title: 'Code pour enregistrer une nouvelle zone' },
  { image: dotnetImages.methodeAjouter, title: 'Méthode pour ajouter une zone' },
  { image: dotnetImages.formulaireGestion, title: 'Formulaire de gestion des zones' },
  { image: dotnetImages.methodesModifierSupprimer, title: 'Méthodes pour modifier et supprimer des zones' },
  { image: dotnetImages.codeModification, title: 'Code pour modifier une zone' },
  { image: dotnetImages.codeSuppression, title: 'Code pour supprimer une zone' },
  { image: dotnetImages.codeValidation, title: 'Code pour valider une zone' },
  { image: dotnetImages.structureProjet, title: 'Structure du projet' },
];

export function DotnetPage() {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleSkill = (index: number) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((i) => i !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link
          to="/projets"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dotnet : Contrôle des zones de stockage
          </h1>
          <div className="h-1 w-20 bg-blue-600 mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contexte</h2>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Les médicaments contiennent un principe actif aux effets thérapeutiques et des
                excipients facilitant leur mise en forme, leur stabilité et leur dissolution.
              </p>

              <p>
                La réglementation française impose des contrôles réguliers sur la sécurité des
                zones de stockage des produits chimiques. GSB, qui stocke des substances et des
                médicaments, y est soumise.
              </p>

              <p className="font-semibold">Ces contrôles permettent d&apos;assurer :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  la bonne conservation des substances et des médicaments (humidité, lumière,
                  risques de dégradation des principes actifs),
                </li>
                <li>la sécurité du personnel et des marchandises stockées,</li>
                <li>
                  la protection de l&apos;environnement contre des accidents (explosion, incendie,
                  infiltration de produits dangereux dans le sol).
                </li>
              </ul>

              <p>
                L&apos;entreprise GSB dispose de plusieurs zones de stockage pour entreposer les
                médicaments qu&apos;elle fabrique et les substances utilisées pour les fabriquer.
                GSB fait appel à des entreprises spécialisées pour ces vérifications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Environnement technologique</h2>
            <ul className="space-y-2">
              {technologies.map((tech, i) => (
                <li key={tech} className="text-slate-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">&gt;</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-slate-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Compétences</h2>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSkill(index)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-left">{skill.title}</span>
                    <ChevronDown
                      size={20}
                      className={`text-blue-600 transition-transform duration-300 ${
                        expanded.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expanded.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white"
                    >
                      <div className="p-4 space-y-3">
                        {skill.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border border-slate-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Annexes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
