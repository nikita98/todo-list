<template>
  <tr class="task" @dblclick="openModal(id)">
    <td class="task__long">{{ task.description }}</td>
    <td>{{ status(task.status) }}</td>
    <td>{{ priority(task.priority) }}</td>
    <td>{{ task.plannedEnd }}</td>
    <td>{{ task.actualEnd }}</td>
    <td class="task__delete" @click="delTask(id)">Удалить</td>
  </tr>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["taskId"]),
    task() {
      return this.taskId(this.id);
    }
  },
  methods: {
    ...mapMutations(["delTask", "openModal"]),
    edit() {
      this.$emit("edit", this.id);
    },
    status(st) {
      if (!st) {
        return "Новый";
      } else if (st === 1) {
        return "В работе";
      } else {
        return "Завершено";
      }
    },
    priority(pr) {
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
.task {
  td {
    border-bottom: 1px solid #000;
  }
  &__long {
    width: 30%;
  }
  &__delete {
    cursor: pointer;
    &:hover {
      background-color: #f66;
    }
  }
}
</style>
