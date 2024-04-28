import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data),
        retry: 3,
        cacheTime: 300_000,
        staleTime: 10 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: true
    })
}

export default useTodos;