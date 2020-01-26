<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="todo">
      <h2>Задачи</h2>
      <div class="nav">
        <div class="nav__item">
          <div class="btn" @click="ex">Добавить задачу</div>
          <modal v-if="modal" v-on:exit="ex" />
          <input type="text" class="input" placeholder="поиск" />
        </div>
        <div class="nav__item">
          <div class="sort">
            <div class="sort__btn sort__btn_active">
              Всего
            </div>
            <div class="sort__btn">
              Новых
            </div>
            <div class="sort__btn">
              В работе
            </div>
            <div class="sort__btn">
              Завершено
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <tr>
          <th>Описание</th>
          <th>Статус</th>
          <th>Приоритет</th>
          <th>Плановая дата окончания</th>
          <th>Фактическая дата окончания</th>
          <th>Действие</th>
        </tr>
        <task v-for="task in tasks" v-bind:key="task.id" v-bind:id="task.id">
        </task>
      </table>
    </div>
  </div>
</template>

<script>
import task from "./components/task.vue";
import modal from "./components/modal.vue";

export default {
  name: "app",
  data: function() {
    return {
      modal: false
    };
  },
  components: {
    task,
    modal
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    ex() {
      console.log("123");
      this.modal = !this.modal;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
h2 {
  text-align: left;
}
.btn {
  cursor: pointer;
  padding: 5px 15px;
  background-color: #4fc08d;
  color: #fff;
}
.input {
  height: 20px;
  width: 250px;
  padding: 0 10px;

  &::placeholder {
    color: #177047;
  }
}
#todo {
  width: 1000px;
  border: 1px solid #000;
  padding: 0 20px 20px 20px;
}
.nav {
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.sort {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__btn {
    background-color: #4fc08d;
    padding: 5px 15px;
    background-color: #4fc08d;
    color: #fff;
    &_active {
      background-color: rgb(23, 130, 231);
    }
  }
}
.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid grey;
  th,
  td {
    padding: 10px 15px;
  }
}
</style>
