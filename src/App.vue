<template>
  <div id="app">
    <div id="todo">
      <h2>Задачи</h2>
      <div class="nav">
        <div class="nav__item">
          <div class="btn" @click="openModal(null)">Добавить задачу</div>
          <modal v-if="isModal" />
          <input
            type="text"
            class="input"
            @keyup.enter="find = inputFind"
            placeholder="поиск"
            v-model="inputFind"
          />
        </div>
        <div class="nav__item">
          <div class="sort">
            <div
              class="sort__btn"
              v-bind:class="{ sort__btn_active: active === 0 }"
              @click="
                setTasksPull(-1);
                active = 0;
              "
            >
              Всего {{ tasks.length }}
            </div>
            <div
              class="sort__btn"
              v-bind:class="{ sort__btn_active: active === 1 }"
              @click="
                setTasksPull(0);
                active = 1;
              "
            >
              Новых {{ taskFilter(0).length }}
            </div>
            <div
              class="sort__btn"
              v-bind:class="{ sort__btn_active: active === 2 }"
              @click="
                setTasksPull(1);
                active = 2;
              "
            >
              В работе {{ taskFilter(1).length }}
            </div>
            <div
              class="sort__btn"
              v-bind:class="{ sort__btn_active: active === 3 }"
              @click="
                setTasksPull(2);
                active = 3;
              "
            >
              Завершено {{ taskFilter(2).length }}
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
        <task
          v-for="task in tasksFind(find)"
          v-bind:key="task.id"
          v-bind:id="task.id"
        >
        </task>
      </table>
    </div>
  </div>
</template>

<script>
import task from "./components/task.vue";
import modal from "./components/modal.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "app",
  data: function() {
    return {
      modal: false,
      inputFind: "",
      find: "",
      active: 0
    };
  },
  components: {
    task,
    modal
  },
  computed: {
    ...mapGetters(["tasks", "isModal", "taskFilter", "tasksFind"])
  },
  methods: {
    ...mapMutations(["openModal", "setTasksPull"]),
    sort(find) {
      console.log(find);
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
    cursor: pointer;
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
