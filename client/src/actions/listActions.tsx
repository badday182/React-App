import { instance } from "../api/axios.api";

export const listActions = async ({ request }:any) => {
    switch (request.method) {
      case "POST": {
        const formData = await request.formData();
        const title = {
          title: formData.get("title"),
        };
        await instance.post('/lists', title)
        return null
      }
      // case "PATCH": {
      // }
      // case "DELETE": {
      // }
    }
  };