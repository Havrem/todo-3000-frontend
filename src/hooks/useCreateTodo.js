import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data) => {
            await todoService.createTodo(data)
            await queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });
}

export default useCreateTodo;