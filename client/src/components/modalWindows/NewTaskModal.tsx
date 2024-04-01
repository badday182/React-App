import { FC, useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import { INewTaskModal } from "../../types/types";
import { useAppSelector } from "../../app/hooks";

const NewTaskModal: FC<INewTaskModal> = ({
  type,
  setVisibleTaskModal,
  listId,
  name,
  description,
}) => {
  // const id = useAppSelector((state) => state.list.id);
  useEffect(() => {
    console.log("listId", listId);
  }, []);

  const handleSubmit = () => {
    setVisibleTaskModal!(false);
  };
  const inputRef = useRef<HTMLInputElement>(null); // Создаем реф для инпута
  
  useEffect(() => {
    
    inputRef.current!.focus(); // Устанавливаем фокус на инпут при открытии модального окна
 
}, []);
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/tasks"
        method={type}
        onSubmit={handleSubmit}
        className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
      >
        <label htmlFor="name">
          <small>
            {type === "patch" ? `Add new Task name id` : "Task name"}
          </small>
          <input
          ref={inputRef}
            className="input w-full placeholder:text-slate-500"
            type="text"
            name="name"
            placeholder={name || "Add Name"}
          ></input>
                 </label>
        <label htmlFor="description">
          <small>
            {type === "patch" ? `Add new List name id` : "Task description"}
          </small>
          <input
            className="input w-full placeholder:text-slate-500"
            type="text"
            name="description"
            placeholder={description || "Add description"}
          ></input>
        </label>
          {/* Добавляем скрытое поле для передачи ID списка */}
          <input type="hidden" name="listId" value={listId}></input>
        <div className="flex item-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === "patch" ? "Save" : "Create"}
          </button>
          <button
            onClick={() => setVisibleTaskModal!(false)}
            className="btn btn-red "
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewTaskModal;
