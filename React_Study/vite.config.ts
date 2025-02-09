import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url),
            ),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
            '@recoil': fileURLToPath(new URL('./src/recoil', import.meta.url)),
            '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
        },
    },

    // SCSS 전역적으로 활용되는 CSS 스타일링 코드
    css: {
        preprocessorOptions: {
            scss: {
                /**
                 * additionalData를 활용해 모든 SCSS 파일에서 main.scss 자동 포함
                 */
                additionalData: `@import "./src/assets/styles/main.scss";`,
            },
        },
    },
});
