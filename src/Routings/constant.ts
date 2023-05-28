import { faCog, faDatabase, faFolderMinus, faPieChart, faUser } from '@fortawesome/free-solid-svg-icons';

interface routePath {
  connectionPage: string;
  createConnectionPage: string;
  feature2: string;
  feature3: string;
  feature4: string;
  administration: string;
}

export const ROUTE_PATHS: routePath = {
  connectionPage: '/',
  createConnectionPage: '/new',
  feature2: '/feature2',
  feature3: '/feature3',
  feature4: '/feature4',
  administration: '/administration',
};

interface documentTitle {
  homePage: string;
  connectionPage: string;
  createConnectionPage: string;
}

export const DOCUMENT_TITLE: documentTitle = {
  homePage: 'Welcome to connection',
  connectionPage: 'Connection Page',
  createConnectionPage: 'Create New Connection Page'
};

export const SIDEBAR_ROUTES = [
  {
    path: ROUTE_PATHS.connectionPage,
    name: 'Connections',
    icon: faDatabase
  },
  {
    path: ROUTE_PATHS.feature2,
    name: 'Feature 2',
    icon: faUser
  },
  {
    path: ROUTE_PATHS.feature3,
    name: 'Feature 3',
    icon: faPieChart
  },
  {
    path: ROUTE_PATHS.feature4,
    name: 'Feature 4',
    icon:faCog
  },
  {
    path: ROUTE_PATHS.administration,
    name: 'Administration',
    icon: faFolderMinus
  },
];
