import cvPdf from './ASSENSE_Laurent_CV.pdf';

import dotnetIcon from './dotnet/dotnet.png';
import dotnetDiagrammeClasse from './dotnet/mcd.png';
import dotnetListeZones from './dotnet/lstZone.jpg';
import dotnetCodeRemplirListe from './dotnet/lstZoneCode.jpg';
import dotnetFormulaireAjout from './dotnet/ajtZone.jpg';
import dotnetCodeEnregistrement from './dotnet/ajtZoneCode.jpg';
import dotnetMethodeAjouter from './dotnet/ajtZoneCodeManager.jpg';
import dotnetFormulaireGestion from './dotnet/gererZone.jpg';
import dotnetMethodesModifierSupprimer from './dotnet/gererZoneCodeManager.jpg';
import dotnetCodeModification from './dotnet/editCode.jpg';
import dotnetCodeSuppression from './dotnet/delete.jpg';
import dotnetCodeValidation from './dotnet/controleDonnees.jpg';
import dotnetStructureProjet from './dotnet/architecture.jpg';

import gsbEquipementIcon from './gsbEquipement/gsb.png';
import gsbEquipementPdf from './gsbEquipement/GSB_Projet_Equipement.pdf';

import gsbFraisIcon from './gsbFrais/gsb.png';
import gsbFraisArchitectureMVC from './gsbFrais/architecture.jpg';
import gsbFraisDiagrammeClasse from './gsbFrais/mcd.jpg';
import gsbFraisBugSaisie from './gsbFrais/probleme1.jpg';
import gsbFraisValidationFrais from './gsbFrais/fraisForfait.jpg';
import gsbFraisBugValidation from './gsbFrais/probleme2.jpg';
import gsbFraisFichesFrais from './gsbFrais/probleme1Resolu.jpg';
import gsbFraisTableauVisiteurs from './gsbFrais/indicateur.jpg';
import gsbFraisNoteService from './gsbFrais/Note de service 1 - ASSENSE Laurent.jpg';
import gsbFraisCreateRegion from './gsbFrais/tableRegion.jpg';
import gsbFraisCreateUtilisateur from './gsbFrais/tableUtilisateur.jpg';
import gsbFraisInsertRegion from './gsbFrais/regionDonnees.jpg';
import gsbFraisNoteServiceIndicateurs from './gsbFrais/Note de service 2 - ASSENSE Laurent.jpg';
import gsbFraisCodeMontantTotales from './gsbFrais/probleme2Resolu1.jpg';
import gsbFraisCodeTableauVisiteurs from './gsbFrais/probleme2Resolu2.jpg';

import stage1Pdf from './stages/ASSENSE Laurent rapport de stage.pdf';
import stage2Pdf from './stages/ASSENSE Laurent rapport de stage2.pdf';

import symfonyIcon from './symfony/symfony.png';
import symfonyDiagrammeClasse from './symfony/mcd.jpg';
import symfonyDiagrammeCasUtilisation from './symfony/diagrammeUtilisation.jpg';
import symfonyListeObjectifs from './symfony/liste-objectif-fixe.jpg';
import symfonyCodeIndex from './symfony/goal.jpg';
import symfonyListeProduits from './symfony/majProduct.jpg';
import symfonyCodeTwig from './symfony/byCateg.jpg';
import symfonyRechercheVeterinaires from './symfony/veto-categ.jpg';
import symfonyBuildFormCategory from './symfony/date-maj-prod.jpg';
import symfonyListeUtilisateurs from './symfony/user.jpg';
import symfonyCodeTwigUsers from './symfony/user-role.jpg';
import symfonyModificationUtilisateur from './symfony/user-role-edit.jpg';
import symfonyStructureProjet from './symfony/architecture.jpg';

import syntheseIcon from './synthese/excel.png';
import pdfIcon from './synthese/pdf1.png';
import tableauSynthesePdf from './synthese/Tableau de synthese.pdf';

import veilleTechnologiquePdf from './technologie/Veille Technologique.pdf';

export const projectIcons = {
  gsbEquipement: gsbEquipementIcon,
  gsbFrais: gsbFraisIcon,
  symfony: symfonyIcon,
  dotnet: dotnetIcon,
  synthese: syntheseIcon,
  veilleTechnologique: pdfIcon,
} as const;

export const projectDocuments = {
  gsbEquipement: gsbEquipementPdf,
  tableauSynthese: tableauSynthesePdf,
  veilleTechnologique: veilleTechnologiquePdf,
} as const;

export const cvDocuments = {
  cv: cvPdf,
  stage1: stage1Pdf,
  stage2: stage2Pdf,
} as const;

export const dotnetImages = {
  diagrammeClasse: dotnetDiagrammeClasse,
  listeZones: dotnetListeZones,
  codeRemplirListe: dotnetCodeRemplirListe,
  formulaireAjout: dotnetFormulaireAjout,
  codeEnregistrement: dotnetCodeEnregistrement,
  methodeAjouter: dotnetMethodeAjouter,
  formulaireGestion: dotnetFormulaireGestion,
  methodesModifierSupprimer: dotnetMethodesModifierSupprimer,
  codeModification: dotnetCodeModification,
  codeSuppression: dotnetCodeSuppression,
  codeValidation: dotnetCodeValidation,
  structureProjet: dotnetStructureProjet,
} as const;

export const gsbFraisImages = {
  diagrammeClasse: gsbFraisDiagrammeClasse,
  bugSaisie: gsbFraisBugSaisie,
  validationFrais: gsbFraisValidationFrais,
  bugValidation: gsbFraisBugValidation,
  fichesFrais: gsbFraisFichesFrais,
  tableauVisiteurs: gsbFraisTableauVisiteurs,
  noteService: gsbFraisNoteService,
  createRegion: gsbFraisCreateRegion,
  createUtilisateur: gsbFraisCreateUtilisateur,
  insertRegion: gsbFraisInsertRegion,
  noteServiceIndicateurs: gsbFraisNoteServiceIndicateurs,
  codeMontantTotales: gsbFraisCodeMontantTotales,
  codeTableauVisiteurs: gsbFraisCodeTableauVisiteurs,
  architectureMVC: gsbFraisArchitectureMVC,
} as const;

export const symfonyImages = {
  diagrammeClasse: symfonyDiagrammeClasse,
  diagrammeCasUtilisation: symfonyDiagrammeCasUtilisation,
  listeObjectifs: symfonyListeObjectifs,
  codeIndex: symfonyCodeIndex,
  listeProduits: symfonyListeProduits,
  codeTwig: symfonyCodeTwig,
  rechercheVeterinaires: symfonyRechercheVeterinaires,
  buildFormCategory: symfonyBuildFormCategory,
  listeUtilisateurs: symfonyListeUtilisateurs,
  codeTwigUsers: symfonyCodeTwigUsers,
  modificationUtilisateur: symfonyModificationUtilisateur,
  structureProjet: symfonyStructureProjet,
} as const;
