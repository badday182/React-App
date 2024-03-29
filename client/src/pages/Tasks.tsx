import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { ILists } from "../types/types";

const Tasks: FC = () => {
  const lists = useLoaderData() as ILists[]
  // console.log(lists)
  return (
    <div className="mt-5 rounded-md grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 bg-slate-800 p-4">
      {lists.map((list) => (
        <div key={list.id} className="rounded-md bg-slate-700 flex flex-col p-2">
          <h3>{list.title}</h3>
        
        </div>
      ))}
    </div>
  );
};
export default Tasks;
