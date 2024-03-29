import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import NewListModal from "./modalWindows/NewListModal";
import { instance } from "../api/axios.api";


const Header: FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <div>
        <header className="flex items-center justify-between bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
         <Link to="/"> 
        <MdAssignment size={20} />
      </Link>
      <nav>
        <ul className="ml-auto mr-10 flex items-center gap-5">
          <li>
            <button onClick={()=>{setVisibleModal(true)}} className="btn btn-green">Create new list </button>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-white/50"
              }
            >
              Task Board
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-white/50"
              }
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    {visibleModal && (<NewListModal type="post" id={1} setVisibleModal={setVisibleModal} />)}
      </div>
     
  );
};

export default Header;
