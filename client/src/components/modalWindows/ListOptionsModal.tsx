
import { FC, useEffect, useRef, useState } from "react";

import { IListOptionsModalProps } from "../../types/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const ListOptionsModal: FC<IListOptionsModalProps> = ({  visible, onClose, x, y}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const modalStyle = {
    top: Math.min(y, windowHeight - 200), // Ограничение по вертикали
    left: Math.min(x, windowWidth - 200), // Ограничение по горизонтали
  };

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute bg-slate-800 shadow-lg rounded-lg p-4 flex flex-col  items-start"
        style={modalStyle}
      >
        <button className="btn flex items-center justify-center"><AiFillEdit className="mr-2" size={18}/>Edit List</button>
        <button className="btn btn-red mt-2 flex items-center justify-center"><MdDeleteForever size={18} className="mr-2"/>Delete List</button>
      </div>
    </div>
  );
};

export default ListOptionsModal;
