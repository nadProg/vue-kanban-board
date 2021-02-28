import AbstractListModel from './AbstractListModel';

export class BacklogTaskGroup extends AbstractListModel {
  type = 'backlog';
}

export class DoneTaskGroup extends AbstractListModel {
  type = 'done';
}

export class ProcessingTaskGroup extends AbstractListModel {
  type = 'processing';
}

export class BasketTaskGroup extends AbstractListModel {
  type = 'basket';
}