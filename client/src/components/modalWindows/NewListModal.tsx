import { FC, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { INewListModal } from "../../types/types";

const NewListModal: FC<INewListModal> = ({
  type,
  setVisibleModal,
  updateData,
}) => {


  // const handleSubmit = () => {
  //   setVisibleModal(false);
  // };
  const handleSubmit = () => {
    updateData();
    setVisibleModal(false); // Закрытие модального окна после создания списка
  };
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/"
        method={type}
        onSubmit={handleSubmit}
        className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
      >
        <label htmlFor="title">
          <small>List title</small>
          <input
            className="input w-full"
            type="text"
            name="title"
            placeholder="Add new List name"
          ></input>
        </label>
        <div className="flex item-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === "patch" ? "Save" : "Create"}
          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn btn-red "
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewListModal;
