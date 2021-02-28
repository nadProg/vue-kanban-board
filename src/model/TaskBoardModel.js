import AbstractMapModel from './AbstractMapModel'
import TaskGroupFactory from './TaskGroupFactory';

// const taskGroupFactory = new TaskGroupFactory();

export default class TaskBoardModel extends AbstractMapModel {
  constructor() {
    super(new TaskGroupFactory());
  }
}