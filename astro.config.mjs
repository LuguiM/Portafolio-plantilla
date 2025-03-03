import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://luguim.github.io/Portafolio-plantilla/.',
  base: '/Portafolio-plantilla/',
  output: 'static',
  integrations: [tailwind()]

});
