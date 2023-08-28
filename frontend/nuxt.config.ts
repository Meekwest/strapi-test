// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/globals.scss"],
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
  