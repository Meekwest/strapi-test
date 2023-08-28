<template>
    <div class="main-page">
      <div class="wrapper">
        <div class="page__title">
          <h1>Знакомство</h1>
        </div>
        <div class="main-page__content">
          <div class="main-page__description">
            <p class="main-page__description-greeting">
              <span>Привет</span>, давай знакомиться!
            </p>
            <p class="main-page__description-represent">
              Меня зовут <span>Никита Левкин</span>, я
            </p>
            <p class="main-page__description-profession">Frontend-разработчик</p>
            <nuxt-link class="main-page__detailed-button" to="/about"
              >Подробная информация</nuxt-link
            >
          </div>
          <img src="@/static/photo.jpg" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "default",
  });
  </script>
  
  <style lang="scss">
  .main-page {
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
  
      @include mq(950) {
        grid-template-columns: 1fr;
        justify-items: center;
      }
  
      img {
        border-radius: 15px;
  
        @include mq(950) {
          margin: 20px 0 0 0;
          width: 100%;
          height: auto;
        }
      }
    }
  
    &__description {
      display: grid;
      align-content: center;
      text-align: center;
      justify-items: center;
  
      > p {
        color: $dark-blue;
  
        > span {
          color: $orange;
          font-weight: 600;
        }
      }
    }
  
    &__description-greeting {
      font-size: 48px;
  
      @include mq(768) {
        font-size: 32px;
      }
  
      @include mq(500) {
        font-size: 24px;
      }
    }
  
    &__description-represent {
      font-size: 32px;
      margin: 0 0 25px 0;
  
      @include mq(500) {
        font-size: 24px;
      }
    }
  
    &__description-profession {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 25px 0;
  
      @include mq(500) {
        font-size: 28px;
      }
    }
  
    &__detailed-button {
      max-width: 400px;
  
      border: 1px solid $blue;
      border-radius: 25px;
      color: $orange;
      padding: 10px 20px;
  
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
  
      @include mq(500) {
        font-size: 16px;
        padding: 5px 10px;
      }
    }
  }
  </style>
  