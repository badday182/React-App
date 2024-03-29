import { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ILists } from "../types/types";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import ListOptionsModal from "../components/modalWindows/ListOptionsModal";

const Tasks: FC = () => {
  const lists = useLoaderData() as ILists[];

  const [showOptions, setShowOptions] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleOpenOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowOptions(true);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };
  return (
    <div className="mt-5 rounded-md grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 bg-slate-800 p-4">
      {lists.map((list) => (
        <div
          key={list.id}
          className="rounded-md bg-slate-700 flex flex-col p-2"
        >
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg">{list.title}</h2>
            <button onClick={handleOpenOptions}>
              <PiDotsThreeVerticalLight size={20} />
            </button>
          </div>

          <button className="btn btn-green m-auto">Add new Task</button>
          <ListOptionsModal
            visible={showOptions}
            onClose={handleCloseOptions}
            x={modalPosition.x}
            y={modalPosition.y}
          />
        </div>
      ))}
    </div>
  );
};
export default Tasks;
