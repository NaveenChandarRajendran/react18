import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const useTodoForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (todo) => axios.post('https://jsonplaceholder.typicode.com/todos', todo)
            .then(res => res.data),
        onSuccess: (savedData, newTodo) => {
            // queryClient.invalidateQueries({
            //     queryKey:['todos']
            // })
            queryClient.setQueryData(['todos'], todos => {
                return [savedData, ...(todos || [])]
            })
        }
    })
}

export default useTodoForm;