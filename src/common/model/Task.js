import { nanoid } from 'nanoid';

export default class Task {
  constructor(content) {
    this.content = content;
    this.id = nanoid();
  }
}
