<template>
  <form class="modal">
    <div class="modal__inner">
      <div class="modal__elem">
        <div class="modal__title">
          Создание/редактирование задачи
        </div>
        <div class="modal__exit" v-on:click="closeModal"></div>
      </div>
      <div class="modal__elem">
        <div class="modal__item modal__item_row">
          <label class="modal__label modal__label_mb" for="description"
            >Описание:</label
          >
          <input class="modal__input" type="text" v-model="description" />
        </div>
      </div>
      <div class="modal__elem">
        <div class="modal__item">
          <label class="modal__label" for="priority">Приоритет:</label>
          <select class="modal__input" v-model="priority">
            <option>Низкий</option>
            <option>Средний</option>
            <option>Высокий</option>
          </select>
        </div>
        <div class="modal__item">
          <label class="modal__label" for="status">Статус:</label>
          <select class="modal__input" v-model="status">
            <option>Новый</option>
            <option>В работе</option>
            <option>Завершено</option>
          </select>
        </div>
      </div>
      <div class="modal__elem">
        <div class="modal__item modal__item_row">
          <label class="modal__label modal__label_mb" for="plannedEnd"
            >Крайний срок:</label
          >
          <input class="modal__input" type="text" v-model="plannedEnd" />
        </div>
      </div>
      <div class="btn modal__btn" @click="editId ? change(editId) : add()">
        Сохранить
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  created() {
    if (this.editId) {
      let task = this.taskId(this.editId);
      console.log(task + "adsasdasda");
      this.description = task.description;
      this.priority = this.unformatPriority(task.priority);
      this.status = this.unformatStatus(task.status);
      this.plannedEnd = task.plannedEnd;
      this.description = task.description;
    }
  },
  data: function() {
    return {
      create: true,
      description: "Описание задачи",
      priority: "Низкий",
      status: "Новый",
      plannedEnd: new Date().toLocaleDateString(),
      actualEnd: ""
    };
  },
  computed: {
    ...mapGetters(["taskId", "editId"])
  },
  methods: {
    ...mapMutations(["closeModal", "addTask", "changeTask"]),
    add() {
      this.addTask({
        id: Math.random(),
        description: this.description,
        priority: this.formatPriority(this.priority),
        status: this.formatStatus(this.status),
        plannedEnd: this.plannedEnd,
        actualEnd: null
      });
      this.closeModal();
    },
    change() {
      this.changeTask({
        id: this.editId,
        description: this.description,
        priority: this.formatPriority(this.priority),
        status: this.formatStatus(this.status),
        plannedEnd: this.plannedEnd,
        actualEnd: null
      });
      this.closeModal();
    },
    formatStatus(st) {
      if (st === "Новый") {
        return 0;
      } else if (st === "В работе") {
        return 1;
      } else {
        return 2;
      }
    },
    formatPriority(pr) {
      if (pr === "Низкий") {
        return 0;
      } else if (pr === "Средний") {
        return 1;
      } else {
        return 2;
      }
    },
    unformatStatus(st) {
      if (!st) {
        return "Новый";
      } else if (st === 1) {
        return "В работе";
      } else {
        return "Завершено";
      }
    },
    unformatPriority(pr) {
      if (!pr) {
        return "Низкий";
      } else if (pr === 1) {
        return "Средний";
      } else {
        return "Высокий";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  background-color: rgba(160, 200, 200, 0.3);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner {
    padding: 20px;
    padding-top: 0;
    width: 600px;
    background-color: #fff;
    border: 1px solid #000;
  }
  &__title {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
  }
  &__exit {
    background-color: rgb(173, 173, 173);
    height: 20px;
    width: 20px;
    position: relative;
    &::before {
      content: "";
      left: 0;
      top: calc(50% - 1px);
      position: absolute;
      height: 2px;
      width: 20px;
      background-color: #000;
      transform: rotate(45deg);
    }
    &::after {
      content: "";
      left: 0;
      top: calc(50% - 1px);
      position: absolute;
      height: 2px;
      width: 20px;
      background-color: #000;
      transform: rotate(-45deg);
    }
  }
  &__elem {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  &__item {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: flex-start;
    padding-right: 20px;
    &_row {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  &__label {
    text-align: left;
    margin-right: 10px;
    &_mb {
      margin-bottom: 10px;
    }
  }
  &__input {
    width: 100%;
  }
}
</style>
