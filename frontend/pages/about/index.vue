<template>
    <div class="about-page">
        <div class="wrapper">
        <div class="page__title">
            <h1>Обо мне</h1>
        </div>
        <div class="about-page__content">
            <div class="about-page__content-block">
            <h2>Немного личной информации</h2>
            <p>
                {{ biography }}
            </p>
            </div>
            <div class="about-page__content-block">
            <h2>Образование</h2>
            <ul>
                <li class="about-page__list-item" v-for="learning in learnings.data" :key="learnings.id">
                    <p class="about-page__list-item-title">{{ learning.attributes.university.data.attributes.name }}</p>
                    <p>{{ learning.attributes.faculty }}</p>
                    <p>{{ learning.attributes.period }}</p>
                    <p>Специализация: {{ learning.attributes.specialization }}.</p>
                </li>
            </ul>
            </div>
            <div class="about-page__content-block">
            <h2>Профессиональная занятость</h2>
            <ul>
                <li class="about-page__list-item" v-for="work in works.data" :key="work.id">
                    <p class="about-page__list-item-title">{{work.attributes.company.data.attributes.name}}</p>
                    <p>{{ position }}</p>
                    <p>{{ work.attributes.period }}</p>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
</template>
  
<script setup>
import { getDetailedInfo } from '~/api'

definePageMeta({
    layout: "default",
});

const info = ref(null);

info.value = await getDetailedInfo();

const { biography, works, position, learnings } = info.value.data.attributes;
</script>
    
  
<style lang="scss">
.about-page {  
    &__content-block {
        margin: 0 0 10px 0;

        h2 {
        font-size: 26px;
        margin: 0 0 10px 0;
        }
    }

    &__list-item {
        margin: 0 0 15px 0;

        > p {
        margin: 0 0 5px 0;

        &:first-child {
            margin: 0 0 10px 0;
        }
        }
    }

    &__list-item-title {
        font-size: 18px;
    }
}
</style>
