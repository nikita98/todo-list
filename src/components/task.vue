<template>
  <tr class="task">
    <td>{{ task.description }}</td>
    <td>{{ status(task.status) }}</td>
    <td>{{ priority(task.priority) }}</td>
    <td>{{ task.plannedEnd }}</td>
    <td>{{ task.actualEnd }}</td>
    <td class="task__delete" @click="delTask(id)">Удалить</td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["id"],
  computed: {
    task() {
      return this.$store.getters.taskId(this.id);
    }
  },
  methods: {
    ...mapMutations(["delTask"]),
    status(st) {
      if (!st) {
        return "Новый";
      } else if (st === 1) {
        return "В процессе";
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
  &__delete {
    cursor: pointer;
    &:hover {
      background-color: #f66;
    }
  }
}
</style>
