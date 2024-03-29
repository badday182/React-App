import { FC } from "react"

interface ICreateListModal{
type: 'post' | 'patch',
id: number,
setVisibleModal: boolean,
}

const CreateListModal:FC<ICreateListModal> = ({type, id, setVisibleModal}) => {
  return (
    <div>CreateListModal</div>
  )
}

export default CreateListModal