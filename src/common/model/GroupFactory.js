import AbstractGroup from './AbstractGroup';
import { BacklogGroup, DoneGroup, ProcessingGroup, BasketGroup } from './Groups';

export default class GroupFactory {
  constructor() {
    this.creators = {
      backlog: BacklogGroup,
      processing: ProcessingGroup,
      done: DoneGroup,
      basket: BasketGroup,
      abstract: AbstractGroup,
    };
  }

  create(type = 'abstract') {
    return new this.creators[type]();
  }
}
