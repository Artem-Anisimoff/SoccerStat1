<template>
  <div>
    <div class="pole">
      <div class="h_header" dense>
        <div class="menu_pole">
          <nuxt-link id="home" class="menu" to="/">SoccerStat</nuxt-link>
          <nuxt-link id="menu_league" class="menu" to="/league">Лиги</nuxt-link>
          <nuxt-link id="menu_teams" class="menu" to="/teams">Команды</nuxt-link>
        </div>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">
//поле
.pole {
position: absolute;
width: 100%;
height: 100%;
left: 0px;
top: 0px;
background: #ffffff;
}
::-webkit-scrollbar {
width: 0;
}

//шапка
.h_header {
position: absolute;
width: 100%;
height: 60px;
top: 0px;
background: #000000;
}

//меню
.menu_pole {
position: absolute;
width: 300px;
left: 20px; /* Изменено с calc(50% - 300px/2) на 20px */
top: 14px;
}

.menu {
text-decoration: none;
color: #ffffff;
font-size: 24px;

/* Добавленные стили при наведении */
transition: color 0.3s; /* Плавный переход */
}

.menu:hover {
color: #018e98; /* Изменение цвета при наведении */
}

#menu_league {
position: absolute;
right: 110px;
top: 0px;
}

#menu_teams {
position: absolute;
right: 0px;
top: 0px;
}

#home {
position: absolute;
left: 0px; /* Изменено с 0px на 20px */
top: 0px;
}
// Конец - меню
</style>
