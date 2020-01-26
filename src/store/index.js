import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "0",
        description: "Задача 1",
        status: 2,
        priority: 3,
        plannedEnd: "02.09.2019",
        actualEnd: "02.09.2020"
      },
      {
        id: "1",
        description: "Задача 2",
        status: 0,
        priority: 2,
        plannedEnd: "02.12.2019",
        actualEnd: "02.01.2020"
      },
      {
        id: "2",
        description: "Задача 3",
        status: 0,
        priority: 3,
        plannedEnd: "03.09.2020",
        actualEnd: "02.09.2020"
      },
      {
        id: "3",
        description: "Задача 4",
        status: 1,
        priority: 0,
        plannedEnd: "02.09.2019",
        actualEnd: "02.09.2019"
      },
      {
        id: "4",
        description: "Задача 5",
        status: 2,
        priority: 1,
        plannedEnd: "02.09.2019",
        actualEnd: "02.09.2019"
      },
      {
        id: "5",
        description: "Задача 6",
        status: 0,
        priority: 1,
        plannedEnd: "02.09.2019",
        actualEnd: "02.09.2019"
      }
    ]
  },
  getters: {
    tasks: state => state.tasks,
    taskId: state => id => {
      return state.tasks.find(task => task.id === id);
    }
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    changeTask(state, id, task) {
      let index = state.tasks.indexOf(state.tasks.find(task => task.id === id));
      state.tasks[index] = task;
    },
    delTask(state, id) {
      let index = state.tasks.indexOf(state.tasks.find(task => task.id === id));
      state.tasks.splice(index, 1);
    }
  },
  actions: {},
  modules: {}
});
