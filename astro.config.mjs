import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://anagramiccoder.github.io',
	base: '/it11website',
});
