import AbstractGroup from './AbstractGroup';


export class BacklogGroup extends AbstractGroup {
  type = 'backlog';
  header = 'Backlog';
}

export class ProcessingGroup extends AbstractGroup {
  type = 'processing';
  header = 'Processing';
}

export class DoneGroup extends AbstractGroup {
  type = 'done';
  header = 'Done';
}

export class BasketGroup extends AbstractGroup {
  type = 'basket';
  header = 'Basket';
  emptyPlaceholder = 'Basket is empty';
}
