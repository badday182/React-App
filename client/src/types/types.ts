export interface INewListModal {
  type: "post" | "patch";
  id?: number;
  setVisibleModal: (visible: boolean) => void;
}

export interface ILists {
 title: string
  id?: number;
  dueDate: Date;
}

export interface IListOptionsModalProps {
  visible: boolean;
  onClose: () => void;
  x: number;
  y: number;
  }