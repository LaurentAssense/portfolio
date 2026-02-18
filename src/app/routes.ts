import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { CertificationPage } from './pages/CertificationPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CVPage } from './pages/CVPage';
import { GSBFraisPage } from './pages/projects/GSBFraisPage';
import { SymfonyPage } from './pages/projects/SymfonyPage';
import { DotnetPage } from './pages/projects/DotnetPage';
import { ProjectDetailPage } from './pages/projects/ProjectDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'parcours-certification', Component: CertificationPage },
      { path: 'projets', Component: ProjectsPage },
      { path: 'projets/gsb-frais', Component: GSBFraisPage },
      { path: 'projets/symfony', Component: SymfonyPage },
      { path: 'projets/dotnet', Component: DotnetPage },
      { path: 'projets/:slug', Component: ProjectDetailPage },
      { path: 'cv-stages', Component: CVPage },
    ],
  },
]);
