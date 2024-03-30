export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}
export interface INewTaskModal {
  type: "post" | "patch";
  id?: number;
  name?: string,
  description?: string,
  priority?: string,
  listId?: number,
  setVisibleTaskModal?: (visible: boolean) => void;
}
export interface INewListModal {
  type: "post" | "patch";
  id?: number;
  setVisibleModal?: (visible: boolean) => void;
  title?: string,
}

export interface ILists {
  title: string;
  id?: number;
  dueDate: Date;
}
export interface ITask {
  id?: number;
  name: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  listId: number;
}

export interface IListOptionsModalProps {
  visible: boolean;
  onClose: () => void;
  x: number;
  y: number;
  listId: number | null;
  updateListsAfterDelete: () => void;
}
