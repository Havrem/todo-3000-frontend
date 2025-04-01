import { useQuery } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

export const useTodos = () => {
    return useQuery({
      queryKey: ['todos'],
      queryFn: async () => {
        const res = await todoService.getTodos();
        return res;
      },
    });
  };