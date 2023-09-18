<template>
  <div>
    <div class="card-container">
      <!-- Карточка для перехода на страницу "/ligi" через nuxt-link -->
      <nuxt-link to="/league" class="card"></nuxt-link>
      
      <!-- Карточка для перехода на страницу "/komandy" через nuxt-link -->
      <nuxt-link to="/teams" class="card2"></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.fon {
  position: absolute;
  max-width: 100%;
  height: auto;
  left: calc(50% - 50%/2);
  top: 25%;
}

.card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 10%;
}

.card {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  height: 300px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-image: url('../assets/field.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card2 {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  height: 300px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-image: url('../assets/field2.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
