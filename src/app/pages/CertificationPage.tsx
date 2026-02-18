import { motion } from 'motion/react';
import { ExternalLink, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useState } from 'react';

interface Certification {
  title: string;
  description: string;
  source: string;
  link: string;
  objectives: string[];
  why: string[];
  tools: string[];
  concepts: string[];
}

const certifications: Certification[] = [
  {
    title: 'HTML5 - CSS3',
    description: "Dans cette formation, j'ai appris comment utiliser HTML5 et CSS3, les deux langages de programmation à la base de tous les sites web.",
    source: 'Formation OpenClassRooms',
    link: 'https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3',
    objectives: [
      'utiliser du code HTML',
      'structurer une page web en HTML',
      'mettre en forme une page web en CSS',
      'organiser les éléments d\'une page web grâce au CSS',
      'modifier l\'agencement d\'une page HTML avec CSS',
      'intégrer des formules dans une page web',
      'adapter une page pour les petites résolutions en CSS'
    ],
    why: [
      'Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO',
      'Me servir lors de mon stage',
      'Compétences qui me serviront dans mon futur professionnel'
    ],
    tools: [
      'Navigateur WEB',
      'l\'interface de Développement : Visual Studio Code'
    ],
    concepts: [
      'Création d\'un formulaire : Les formulaires HTML vont permettre d\'envoyer des données que nous allons ensuite pouvoir manipuler et / ou stocker. On peut utiliser les formulaires pour permettre à des utilisateurs de s\'inscrire sur notre site (formulaires d\'inscription), de se connecter (formulaire de connexion), de nous envoyer des messages (formulaire de contact), de laisser des commentaires, etc.'
    ]
  },
  {
    title: 'Les ateliers de la CNIL - RGPD',
    description: "Cette formation ma permis de comprendre et appliquer les principes du RGPD pour assurer la conformité des traitements de données personnelles en entreprise.",
    source: 'CISCO',
    link: 'https://atelier-rgpd.cnil.fr/login/index.php',
    objectives: [
      'Comprendre les principes et obligations du Règlement Général sur la Protection des Données',
      'Identifier les droits des personnes et les responsabilités des organisations en matière de données personnelles',
      'Apprendre à mettre en place des pratiques de conformité au RGPD dans le cadre professionnel',
      'Savoir gérer les incidents liés à la protection des données',
      'Connaître les outils et ressources de la CNIL pour accompagner les démarches de mise en conformité'
    ],
    why: [
      'Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO',
      'Me servir lors de mon stage',
      'Compétences qui me serviront dans mon futur professionnel'
    ],
    tools: [
      'Navigateur WEB'
    ],
    concepts: [
      'Minimisation des données : Ce concept illustre l\'importance de collecter uniquement les données essentielles et nécessaires conformément au RGPD.'
    ]
  },
  {
    title: 'Gérez Git & GitHub',
    description: "Dans cette formation, j'ai appris comment utiliser Git et GitHub, le logiciel et la platforme web qui sont important",
    source: 'Formation OpenClassRooms',
    link: 'https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github',
    objectives: [
      'créer des répertoire local',
      'héberger du code',
      'voir l\'évolution d\'un projet',
      'créer des dépôts distant'
    ],
    why: [
      'Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO',
      'Me servir lors de mon stage',
      'Compétences qui me serviront dans mon futur professionnel'
    ],
    tools: [
      'Navigateur WEB',
      'Logiciel git',
      'l\'interface de Développement : Visual Studio Code'
    ],
    concepts: [
      'Dépôt (Repository) : Un dossier qui contient tous les fichiers d\'un projet et leur historique de version.'
    ]
  },
  {
    title: 'Apprenez les bases du langage Python',
    description: "Dans cette formation, j'ai appris les fondamentaux de la programmation en Python, incluant la syntaxe, les structures de données et les concepts de base.",
    source: 'Formation OpenClassRooms',
    link: 'https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python',
    objectives: [
      'Enregistrez des données complexes avec des dictionnaires',
      'Répétez des tâches facilement à l\'aide de boucles',
      'Importez des packages Python'
    ],
    why: [
      'Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO',
      'Me servir lors de mon stage',
      'Compétences qui me serviront dans mon futur professionnel'
    ],
    tools: [
      'Navigateur WEB',
      'l\'interface de Développement : Visual Studio Code'
    ],
    concepts: [
      'Une classe est un modèle permettant de créer plusieurs objets de même type. Elle facilite l\'organisation du code et la réutilisation des objets.',
      'La méthode __init__ est le constructeur de la classe. Elle permet d\'initialiser les attributs pour chaque nouvelle instance.',
      'Les boucles en Python : La boucle for permet d\'itérer sur une liste. La boucle while répète une action tant qu\'une condition est vraie.'
    ]
  },
  {
    title: 'Adoptez les API REST pour vos projets web',
    description: "Dans cette formation, j'ai appris à concevoir, implémenter et utiliser des API REST pour permettre la communication entre applications web et services.",
    source: 'Formation OpenClassRooms',
    link: 'https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web',
    objectives: [
      'Comprendre les principes d\'une API REST',
      'Utiliser les verbes HTTP (GET, POST, PUT, DELETE)',
      'Gérer l\'authentification et la sécurité des APIs'
    ],
    why: [
      'Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO',
      'Me servir lors de mon stage',
      'Compétences qui me serviront dans mon futur professionnel'
    ],
    tools: [
      'Navigateur WEB'
    ],
    concepts: [
      'Une API REST (Representational State Transfer) est une interface qui permet à des applications de communiquer entre elles en utilisant les standards du web, notamment le protocole HTTP.',
      'Les verbes HTTP : GET (récupérer), POST (créer), PUT (mettre à jour), DELETE (supprimer).',
      'Codes de statut HTTP : 200 OK (succès), 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error.',
      'Authentification : Token d\'API, OAuth 2.0, JWT (JSON Web Token) pour sécuriser les requêtes.'
    ]
  }
];

export function CertificationPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Parcours de Certification</h1>
          <div className="h-1 w-20 bg-blue-600 mb-8"></div>
          
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Au cours de mes formations j'ai, été amené à travailler mon parcours de formation complémentaire. 
            Vous trouverez ci-dessous l'ensemble des formations que j'ai suivies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h2>
              
              <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-sm text-blue-700 mb-4">
                {cert.source}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                {cert.description}
              </p>

              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 space-y-6"
                >
                  {/* Mes objectifs */}
                  <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Mes objectifs</h3>
                    <ul className="space-y-2">
                      {cert.objectives.map((objective, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pourquoi cette formation */}
                  <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Pourquoi cette formation ?</h3>
                    <ul className="space-y-2">
                      {cert.why.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Les outils utilisés */}
                  <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Les outils que j'ai utilisé :</h3>
                    <ul className="space-y-2">
                      {cert.tools.map((tool, i) => (
                        <li key={i} className="text-slate-700">• {tool}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Quelques notions */}
                  <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Quelques notions</h3>
                    <div className="space-y-3">
                      {cert.concepts.map((concept, i) => (
                        <p key={i} className="text-slate-700 leading-relaxed">{concept}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className="flex items-center gap-4">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Voir la formation</span>
                </a>
                
                <button 
                  onClick={() => toggleExpand(index)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 text-sm transition-colors"
                >
                  <span>Voir {expandedIndex === index ? 'moins' : 'plus'}</span>
                  {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}