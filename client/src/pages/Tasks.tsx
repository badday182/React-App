import { FC, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ILists, ITask, ITaskOptionsModal } from "../types/types";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import ListOptionsModal from "../components/modalWindows/ListOptionsModal";
import { instance } from "../api/axios.api";
import NewListModal from "../components/modalWindows/NewListModal";
import { takeId, takeTitle } from "../features/list/listSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NewTaskModal from "../components/modalWindows/NewTaskModal";
import TaskOptionsModal from "../components/modalWindows/TaskOptionsModal";

export const updateListsAfterDelete = async (
  setLists: React.Dispatch<React.SetStateAction<ILists[]>>
) => {
  try {
    const response = await instance.get("/lists"); // Получение обновленного списка с сервера
    setLists(response.data); // Обновление состояния списка
  } catch (error) {
    console.error("Error updating lists after delete:", error);
  }
};

const Tasks: FC = () => {
    
    const listsFatch = useLoaderData() as ILists[];
    const [lists, setLists] = useState<ILists[]>(listsFatch);
    
  const [showOptions, setShowOptions] = useState(false);

  const [showTaskOptions, setShowTaskOptions] = useState(false); //showTaskOptions
  
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalTaskPosition, setmodalTaskPosition] = useState({ x: 0, y: 0 });
  
  
  const ListIdRedux = useAppSelector(
      (state) => state.list.id
    );
  const [selectedListId, setSelectedListId] = useState<number | null>(ListIdRedux);
//   const [selectedListId, setSelectedListId] = useState<number | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [selectedlistTitle, setSelectedlistTitle] = useState<string | null>(
    null
  );

  const [visibleModalRename, setVisibleModalRename] = useState<boolean>(false);
  const [visibleTaskModal, setVisibleTaskModal] = useState<boolean>(false);

//   const tasksFatch = useLoaderData() as ITask[];
  const [tasks, setTasks] = useState<ITask[]>([]); // State to store tasks

//     useEffect(() => {
//     console.log('taselectedTaskIdsks', selectedTaskId);

//   }, [selectedTaskId]);

//     useEffect(() => {
   
//   }, []);

  const isvisibleModal = useAppSelector(
    (state) => state.renameListModalWindow.isVisible
  );
  useEffect(() => {
    setVisibleModalRename((prev) => !prev);
  }, [isvisibleModal]);


  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // const response = await instance.get(`/tasks?listId=${selectedListId}`);

        const response = await instance.get(`/tasks`);

        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();

    // if (selectedListId) {
    //   fetchTasks();
    // }
    // }, [selectedListId]);
  }, [tasks]);

  const updateListsAfterAddNewList = async () => {
    try {
      const response = await instance.get("/lists"); // Получение обновленного списка с сервера
      setLists(response.data); // Обновление состояния списка
    } catch (error) {
      console.error("Error updating lists after add new list:", error);
    }
  };
  updateListsAfterAddNewList();

  const handleOpenOptions = (
    e: React.MouseEvent<HTMLButtonElement>,
    listId: number,
    listTitle: string
  ) => {
    dispatch(takeTitle(listTitle));
    dispatch(takeId(listId));
    setShowOptions(true);
    setSelectedListId(listId);
    setSelectedlistTitle(listTitle);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };
  const handleOpenTaskOptions = (
    e: React.MouseEvent<HTMLButtonElement>,
    taskId: number
  ) => {
    // dispatch(takeTitle(listTitle));
    // dispatch(takeId(listId));
    setShowTaskOptions(true);
    setSelectedTaskId(taskId);
    // setSelectedlistTitle(listTitle);
    setmodalTaskPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
    setSelectedListId(null); // Сброс выбранного listId при закрытии модального окна
  };
  const handleCloseTaskOptions = () => {
    setShowTaskOptions(false);
    setSelectedTaskId(null); // Сброс выбранного listId при закрытии модального окна
  };

  const handleAddTask = (
    // e: React.MouseEvent<HTMLButtonElement>,
    listId: number
    // listTitle: string
  ) => {
    setSelectedListId(listId);
    setVisibleTaskModal(true);
  };

  return (
    <div className="mt-5 rounded-md flex flex-wrap flex-row items-start gap-4 bg-slate-800 p-4">
      {lists.map((list) => (
        <div
          key={list.id}
          // className="rounded-md bg-slate-700 flex flex-col p-2 sm:w-56 w-full"
          className="rounded-md bg-slate-700 flex flex-col p-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 w-full"
        >
          <div className="flex flex-row items-center justify-between ">
            <h2 className="text-lg">{list.title}</h2>
            <button
              onClick={(e) => handleOpenOptions(e, list.id!, list.title!)}
            >
              <PiDotsThreeVerticalLight size={20} />
            </button>
          </div>

          {/* Render tasks */}
          {tasks
            .filter((task) => task.listId === list.id)
            .map((task) => (
              <div
                key={task.id}
                className="rounded-md bg-slate-700 flex flex-row p-1 px-0 mb-1"
              >
                <h3 className="text-md rounded-md border-gray-600  bg-slate-800 p-2 grow items-center">
                  {task.name}
                </h3>
                <button onClick={(e) => handleOpenTaskOptions(e, task.id!)}>
                  <PiDotsThreeVerticalLight size={20} className="block" />
                </button>
                {showTaskOptions && (
                  <TaskOptionsModal
                    taskId={selectedTaskId}
                    visible={showTaskOptions}
                    onClose={handleCloseTaskOptions}
                    x={modalTaskPosition.x}
                    y={modalTaskPosition.y}
                    updateListsAfterDelete={() =>
                      updateListsAfterDelete(setLists)
                    }
                  ></TaskOptionsModal>
                )}

                {/* Additional task details */}
              </div>
            ))}

          <button
            onClick={() => handleAddTask(list.id!)}
            className="btn btn-green m-auto"
          >
            Add new Task
          </button>
          <ListOptionsModal
            listId={selectedListId}
            visible={showOptions}
            onClose={handleCloseOptions}
            x={modalPosition.x}
            y={modalPosition.y}
            updateListsAfterDelete={() => updateListsAfterDelete(setLists)}
          />
          {visibleTaskModal && (
            <NewTaskModal
              type="post"
              // listId={list.id!}
              listId={selectedListId!}
              setVisibleTaskModal={setVisibleTaskModal}
            />
          )}
        </div>
      ))}
      {/* Rename List Modal */}
      {visibleModalRename && (
        <NewListModal
          type="patch"
          setVisibleModal={setVisibleModalRename}
          id={selectedListId!}
          title={selectedlistTitle!}
        />
      )}
    </div>
  );
};
export default Tasks;
