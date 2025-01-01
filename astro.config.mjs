// @ts-check
import { defineConfig,envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  integrations: [tailwind()],
  env:{
    schema:{
      // Flickr related API calls
      API: envField.string({
        context: "client",access: "public"
      }),
      PHOTOSET1: envField.string({
        context: "client",access: "public"
      }),
      PHOTOSET2: envField.string({
        context: "client",access: "public"
      }),
      PHOTOSET3: envField.string({
        context:"client",access: "public"
      }),
      EXTRAS: envField.string({
        context: "client",access: "public"
      }),
    
    }
  }
});
