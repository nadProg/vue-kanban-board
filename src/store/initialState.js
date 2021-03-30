import TaskBoardModel from '@/model/TaskBoardModel';

const taskBoardGroupTypes = ['backlog', 'processing', 'done', 'basket'];

export const emptyState = new TaskBoardModel().createItemsByType(taskBoardGroupTypes);
