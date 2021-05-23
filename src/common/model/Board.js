import GroupFactory from './GroupFactory';

const groupFactory = new GroupFactory();

export default class Board {
  constructor(types = []) {
    this.groups = {
      array: [],
      map: {},
    };

    types.forEach((type) => {
      this.groups.array.push(type);
      this.groups.map[type] = groupFactory.create(type);
    });
  }
}
