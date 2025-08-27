import { createBackend } from '@backstage/backend-defaults';

const backend = createBackend();

backend.add(import('@backstage/plugin-techdocs-backend'));

backend.add(import('@backstage/plugin-catalog-backend'));

backend.add(import('@backstage/plugin-app-backend'));

backend.add(import('@backstage/plugin-search-backend'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

backend.start();
