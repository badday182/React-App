import { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ILists } from "../types/types";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import ListOptionsModal from "../components/modalWindows/ListOptionsModal";
import { instance } from "../api/axios.api";
export const updateListsAfterDelete = async (setLists: React.Dispatch<React.SetStateAction<ILists[]>>) => {
    try {
      const response = await instance.get('/lists'); // Получение обновленного списка с сервера
      setLists(response.data); // Обновление состояния списка
    } catch (error) {
      console.error("Error updating lists after delete:", error);
    }
  };

const Tasks: FC = () => {
  const listsFatch = useLoaderData() as ILists[];
  const [lists, setLists] = useState<ILists[]>(listsFatch);
  const [showOptions, setShowOptions] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedListId, setSelectedListId] = useState<number | null>(null);

  

  const handleOpenOptions = (
    e: React.MouseEvent<HTMLButtonElement>,
    listId: number
  ) => {
    setShowOptions(true);
    setSelectedListId(listId);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
    setSelectedListId(null); // Сброс выбранного listId при закрытии модального окна
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
            <button onClick={(e) => handleOpenOptions(e, list.id!)}>
              <PiDotsThreeVerticalLight size={20} />
            </button>
          </div>

          <button className="btn btn-green m-auto">Add new Task</button>
          <ListOptionsModal
            listId={selectedListId}
            visible={showOptions}
            onClose={handleCloseOptions}
            x={modalPosition.x}
            y={modalPosition.y}
            updateListsAfterDelete={() => updateListsAfterDelete(setLists)}
          />
        </div>
      ))}
    </div>
  );
};
export default Tasks;

