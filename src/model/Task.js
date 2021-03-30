import getNewId from '@/utils/idGenerator';

export default class Task {
  constructor(content) {
    this.content = content;
    this.id = getNewId();
  }
}
