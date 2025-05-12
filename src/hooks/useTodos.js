import { useQuery } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

export const useTodos = () => {
    return useQuery({
      queryKey: ['todos'],
      queryFn: () => todoService.getTodos()
    });
  };