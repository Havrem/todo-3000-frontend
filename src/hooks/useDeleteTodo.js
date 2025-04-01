import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => todoService.deleteTodo(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    });
}

export default useDeleteTodo;