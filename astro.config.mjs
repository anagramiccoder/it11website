import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://YOUR-USERNAME.github.io',
	base: '/it11website',
});
