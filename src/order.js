function reorderTasks(tasks) {
  return _.orderBy(tasks, ['index'], ['asc']);
}
