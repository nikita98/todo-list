export default class Task {
  constructor(
    title,
    description,
    status,
    priority,
    plannedEnd,
    actualEnd,
    id = null
  ) {
    this.title = title;
    this.description = description;
    this.description = status;
    this.description = priority;
    this.description = plannedEnd;
    this.description = actualEnd;
    this.id = id;
  }
}
