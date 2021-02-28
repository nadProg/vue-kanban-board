export default class AbstractModel {
  constructor(factory) {
    this.map = {};
    this.subMap = {};
    this.orderList = [];
    this._factory = factory;
  }

  createItemsByType(list) {
    list.forEach(item => {
      if (typeof item === 'string') {
        this.createItemByType(item)
      }
    });

    return this;
  }

  createItemByType(type) {
    this.map[type] = this._factory.create(type);
    this.orderList.push(type);

    return this;
  }
}