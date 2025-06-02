// @ts-check
import { defineConfig,envField,fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Baloo 2",
      cssVariable: "--font-Baloo"
  }]
},

  env: {
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
      PHOTOSET4: envField.string({
        context: "client", access: "public"
      }),
      PHOTOSET5: envField.string({
        context: "client", access: "public"
      }),
      EXTRAS: envField.string({
        context: "client",access: "public"
      }),
    
    }
  }
});
