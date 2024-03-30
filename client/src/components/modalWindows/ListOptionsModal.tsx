import { FC, useEffect, useRef, useState } from "react";
import { IListOptionsModalProps, ILists } from "../../types/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { instance } from "../../api/axios.api";
import { IoCloseSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeVisibility } from "../../features/renameListModalWindow/renameListModalWindow";

const ListOptionsModal: FC<IListOptionsModalProps> = ({
  listId,
  visible,
  onClose,
  x,
  y,
  updateListsAfterDelete,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const deleteButtonRef = useRef<HTMLButtonElement>(null); // Ссылка на кнопку "Delete List"
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  const [lists, setLists] = useState<ILists[]>([]);

  const listTitle = useAppSelector((state) => state.list.title)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/lists");
        setLists(response.data);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchData();
  }, []);

  const handleCloseModal = () => {
    onClose(); // Закрытие модального окна
  };

  const handleDeleteList = async () => {
    console.log("Deleting list with ID:", listId);

    try {
      await instance.delete(`/lists/${listId}`);
      console.log("List deleted successfully");
      onClose();
      updateListsAfterDelete(); // Обновление списка после удаления
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };
  const handleEditList = async () => {
   
    console.log("Editing list with ID, title:", listId, listTitle);
dispatch(changeVisibility())
onClose();
    // try {
    //   await instance.delete(`/lists/${listId}`);
    //   console.log("List deleted successfully");
    //   onClose();
    //   updateListsAfterDelete(); // Обновление списка после удаления
    // } catch (error) {
    //   console.error("Error deleting list:", error);
    // }
  };

  const modalStyle = {
    top: Math.min(y, windowHeight - 200), // Ограничение по вертикали
    left: Math.min(x, windowWidth - 200), // Ограничение по горизонтали
  };
  return (
    <div
      ref={modalRef}
      className={` fixed inset-0 flex items-center justify-center z-50 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute border-gray-500 border-2 bg-slate-800 shadow-lg rounded-lg p-4 flex flex-col  items-start"
        style={modalStyle}
      >
         <button className="btn-close rounded-full absolute top-1 right-1" onClick={handleCloseModal}>
          <IoCloseSharp size={15} />
        </button>
        <button  onClick={handleEditList} className="btn flex items-center justify-center">
          <AiFillEdit className="mr-2" size={18} />
          Edit Title  
        </button>
        <button
          ref={deleteButtonRef}
          onClick={handleDeleteList}
          className="btn btn-red mt-2 flex items-center justify-center"
        >
          <MdDeleteForever size={18} className="mr-2" />
          Delete List
        </button>
      </div>
    </div>
  );
};

export default ListOptionsModal;
