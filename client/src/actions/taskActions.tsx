import { instance } from "../api/axios.api";


export const taskActions = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const listId = formData.get("listId");
      const name = formData.get("name");
      const description = formData.get("description");
      const priority = "Low"; // Предположим, что при создании задачи устанавливается приоритет "Low"
   
      const newTask = {
        name,
        description,
        priority,
        listId,
      };

      await instance.post("/tasks", newTask); // Отправляем POST запрос для создания новой задачи

      return null;
    }

    case "PATCH": {
      // const listId = request.url.split("/").pop(); // Получаем ID списка из URL PATCH-запроса

      const formData = await request.formData();
      const updatedname = {
        name: formData.get("name"),
      };
      const listId = formData.get("id"); // Получаем ID списка из URL PATCH-запроса
      await instance.patch(`/lists/${listId}`, updatedname); // Изменяем заголовок списка
      return null;
    }

    case "DELETE": {
      const listId = request.url.split("/").pop(); // Получаем ID списка из URL DELETE-запроса

      await instance.delete(`/lists/${listId}`);
      return null;
    }
  }
};
