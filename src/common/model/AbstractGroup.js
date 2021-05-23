export default class AbstractGroup {
  emptyPlaceholder = 'Drag task here';

  constructor(taskIdArray = []) {
    this.tasks = [...taskIdArray];
  }
}
