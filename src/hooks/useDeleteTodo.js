import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id) => {
            await todoService.deleteTodo(id)
            await queryClient.invalidateQueries({queryKey:['todos']})
        },
    });
}

export default useDeleteTodo;