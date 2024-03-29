import { instance } from "../api/axios.api";

export const listsLoader = async () => {
 const {data} = await instance.get('/lists')
 return data
  };