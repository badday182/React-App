import { FC, useEffect } from "react";
import { Form } from "react-router-dom";
import { INewListModal } from "../../types/types";
import { useAppSelector } from "../../app/hooks";

const NewListModal: FC<INewListModal> = ({
  type,
  setVisibleModal,
  // id,
  title,
}) => {
  
  const id = useAppSelector((state) => state.list.id);
  useEffect(() => {
    console.log('id', id);
    
  }, []);


  const handleSubmit = () => {

  setVisibleModal!(false);
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
          <small>
            {type === "patch" ? `Add new List title id${id}` : "List title"}
          </small>
          <input
            className="input w-full"
            type="text"
            name="title"
            placeholder={title || "Add Title"}
          ></input>
          <input type="hidden" name="id" value={id!}></input>
        </label>
        <div className="flex item-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === "patch" ? "Save" : "Create"}
          </button>
          <button
            onClick={() => setVisibleModal!(false)}
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



// import { FC, useEffect, useState } from "react";
// import { Form } from "react-router-dom";
// import { INewListModal } from "../../types/types";
// import { useAppSelector } from "../../app/hooks";

// const NewListModal: FC<INewListModal> = ({
//   type,
//   setVisibleModal,
//   title,
// }) => {
//   const id = useAppSelector((state) => state.list.id);
//   const [formData, setFormData] = useState<FormData>(new FormData());

//   useEffect(() => {
//     console.log("id", id);
//   }, [id]);

//   const handleSubmit = async () => {
//     // Добавляем id в FormData
//     formData.append("id", id!.toString());

//     try {
//       const response = await fetch("/api/lists", {
//         method: type === "patch" ? "PATCH" : "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         // Обработка успешного запроса
//       } else {
//         // Обработка ошибки запроса
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }

//     setVisibleModal!(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
//       <Form
//         action="/"
//         method={type}
//         onSubmit={handleSubmit}
//         className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
//       >
//         <label htmlFor="title">
//           <small>
//             {type === "patch" ? `Add new List title id${id}` : "List title"}
//           </small>
//           <input
//             className="input w-full"
//             type="text"
//             name="title"
//             placeholder={title || "Add Title"}
//             onChange={(e) => {
//               formData.set("title", e.target.value);
//             }}
//           />
//           {/* Убираем input type="hidden" title="id", т.к. id добавляется в FormData */}
//         </label>
//         <div className="flex item-center gap-2">
//           <button className="btn btn-green" type="submit">
//             {type === "patch" ? "Save" : "Create"}
//           </button>
//           <button onClick={() => setVisibleModal!(false)} className="btn btn-red">
//             Close
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default NewListModal;
