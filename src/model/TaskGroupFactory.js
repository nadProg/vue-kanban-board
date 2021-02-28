import AbstractListModel from './AbstractListModel';
import { BacklogTaskGroup, DoneTaskGroup, ProcessingTaskGroup, BasketTaskGroup } from './TaskGroups';

export default class TaskGroupFactory {
  constructor() {
    this.creators = {
      backlog: BacklogTaskGroup,
      processing: ProcessingTaskGroup,
      done: DoneTaskGroup,
      basket: BasketTaskGroup,
      abstract: AbstractListModel
    }
  }

  create(type = 'abstract') {
    return new this.creators[type]();
  }
}