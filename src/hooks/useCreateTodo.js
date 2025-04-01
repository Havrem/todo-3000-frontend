import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todoService";

const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => todoService.createTodo(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });
}

export default useCreateTodo;