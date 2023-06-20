import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/naver_login': {
				target: 'https://nid.naver.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/naver_login/, ''),
				secure: false
			}
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
