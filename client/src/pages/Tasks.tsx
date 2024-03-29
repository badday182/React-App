import { FC } from "react";
import CreateListModal from "../components/CreateListModal";

const Tasks: FC = () => {
return (
    <div>
        Tasks
      <CreateListModal type="post" id={1} setVisibleModal={true}  />
    </div>
)
}
export default Tasks