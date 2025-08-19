import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'wyrd-vibe'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter:  adapter({
			pages: 'docs', // output folder for GitHub Pages
			assets: 'docs',
			fallback: 'index.html' // for SPA routing
		}),
		paths: {
			base: dev ? '' : `/${repoName}`,
			assets: dev ? '' : `https://odinson87.github.io/${repoName}`, // use relative paths for JS/CSS assets on dev, absolute on prod
		}
	}
};

export default config;
