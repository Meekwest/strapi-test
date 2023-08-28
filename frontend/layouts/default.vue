<template>
    <div class="layout__header">
      <div class="wrapper">
        <div class="layout__content">
          <nuxt-link class="layout__main-link" to="/">LEVKIN</nuxt-link>
          <p></p>
          <nav class="bg-purple-700 text-white">
            <NuxtLink class="layout__page-link" to="/">Главная</NuxtLink>
            <NuxtLink class="layout__page-link" to="/about">Обо мне</NuxtLink>
            <NuxtLink class="layout__page-link" to="/contacts">Контакты</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  
    <slot />
  </template>
  
  <script setup></script>
  
  <style lang="scss">
  .layout {
    &__header {
      @include cross-browser(box-shadow, 0px 3px 6px 1px rgba(#223c50d9, 0.2));
    }
  
    &__content {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr auto;
      height: 70px;
  
      text-transform: uppercase;
  
      margin: 0 0 20px 0;
  
      @include mq(400) {
        grid-template-columns: 1fr;
        justify-items: center;
        height: 85px;
      }
    }
  
    &__main-link {
      color: #fff;
      background: $blue;
      padding: 10px;
      border-radius: 25px;
      text-align: center;
    }
  
    &__page-link {
      color: $blue;
      letter-spacing: 0.03em;
  
      &:not(:last-child) {
        margin: 0 15px 0 0;
      }
    }
  }
  </style>
  