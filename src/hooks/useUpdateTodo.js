import { useMutation, useQueryClient } from "@tanstack/react-query"
import { todoService } from "../services/todoService";

const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}) => todoService.updateTodo(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });
}

export default useUpdateTodo;