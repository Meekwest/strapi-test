// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/globals.scss"],
    runtimeConfig: {
        public: {
          baseURL: process.env.BASE_API_URL
        }
      },
    
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/scss/_variables.scss";
                             @import "@/assets/scss/_mixins.scss";
                             `,
          },
        },
      },
    },
  });
  