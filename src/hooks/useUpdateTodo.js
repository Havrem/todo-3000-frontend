import { useMutation, useQueryClient } from "@tanstack/react-query"
import { todoService } from "../services/todoService";

const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({id, data}) => {
            await todoService.updateTodo(id, data)
            await queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });
}

export default useUpdateTodo;