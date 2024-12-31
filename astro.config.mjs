// @ts-check
import { defineConfig,envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env:{
    schema:{
      PUBLIC_FLICKR_API_KEY: envField.string({
        context: "client",access: "public"
      }),
      PUBLIC_PHOTOSET1: envField.string({
        context: "client",access: "public"
      }),
      PUBLIC_PHOTOSET2: envField.string({
        context: "client",access: "public"
      }),
      PUBLIC_EXTRAS: envField.string({
        context: "client",access: "public"
      }),
      
    }
  }
});
