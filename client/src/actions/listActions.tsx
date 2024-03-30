import { instance } from "../api/axios.api";
import { useAppSelector } from "../app/hooks";

// const updatedTitle = useAppSelector((state) => state.list.title)
export const listActions = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const title = {
        title: formData.get("title"),
      };
      await instance.post("/lists", title);
      return null;
    }
    // case "PATCH": {
    //   // const listId = request.url.split("/").pop(); // Получаем ID списка из URL PATCH-запроса

    //   const formData = await request.formData();
    //   const updatedTitle = {
    //     title: formData.get("title"),
    //   };
    //   const listId = formData.get("id"); // Получаем ID списка из URL PATCH-запроса

    //   await instance.patch(`/lists/${listId}`, updatedTitle); // Изменяем заголовок списка
    //   return null;
    // }
    case "PATCH": {
      // const listId = request.url.split("/").pop(); // Получаем ID списка из URL PATCH-запроса

      const formData = await request.formData();
      const updatedTitle = {
        title: formData.get("title"),
      };
      const listId = formData.get("id"); // Получаем ID списка из URL PATCH-запроса
      await instance.patch(`/lists/${listId}`, updatedTitle); // Изменяем заголовок списка
      return null;
    }

    case "DELETE": {
      const listId = request.url.split("/").pop(); // Получаем ID списка из URL DELETE-запроса

      await instance.delete(`/lists/${listId}`);
      return null;
    }
  }
};
