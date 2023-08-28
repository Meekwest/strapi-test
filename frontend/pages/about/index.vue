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
              Я родился 12 июля 2000 года, мой родной город - Смоленск, и здесь я
              продолжаю жить и творить. После окончания школы продолжил свой путь
              в Московском Энергетическом Институте (МЭИ), выбрав техническую
              специальность. В настоящее время являюсь студентом магистратуры,
              углубляю свои знания и навыки. С 2020 года заинтересовался
              веб-разработкой, и мои увлечения переросли в серьезное изучение этой
              области. В свободное время я не только изучал этот предмет, но и
              успешно проходил курсы, стремясь к совершенствованию. С конца 2022
              года активно разрабатываю свои навыки в данном направлении, находясь
              на пути к профессиональному росту.
            </p>
          </div>
          <div class="about-page__content-block">
            <h2>Образование</h2>
            <ul>
              <li class="about-page__list-item">
                <p class="about-page__list-item-title">СФ МЭИ</p>
                <p>Бакалавриат. 09.03.01 Информатика и вычислительная техника</p>
                <p>Сентябрь 2018 - Август 2022</p>
                <p>
                  Специализация: программное обеспечение средств вычислительной
                  техники и автоматизированных систем.
                </p>
              </li>
              <li class="about-page__list-item">
                <p class="about-page__list-item-title">СФ МЭИ</p>
                <p>Магистратура. 09.04.01 Информатика и вычислительная техника</p>
                <p>Сентябрь 2022 - По настоящее время</p>
                <p>
                  Специализация: информационное и программное обеспечение
                  автоматизированных систем.
                </p>
              </li>
            </ul>
          </div>
          <div class="about-page__content-block">
            <h2>Профессиональная занятость</h2>
            <ul>
              <li class="about-page__list-item">
                <p class="about-page__list-item-title">Dopio</p>
                <p>Frontend-разработчик</p>
                <p>Апрель 2023 - Август 2023</p>
                <p>
                  Разработка веб-приложения по созданию QR-меню для ресторанов и
                  заведений общественного питания. Верстка страниц, взаимодействие
                  с backend, написание клиентского функционала, развертывание на
                  VPS сервер.
                </p>
              </li>
              <li class="about-page__list-item">
                <p class="about-page__list-item-title">AFFINAGE</p>
                <p>Frontend-разработчик</p>
                <p>Август 2023 - По настоящее время</p>
              </li>
            </ul>
          </div>
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
  