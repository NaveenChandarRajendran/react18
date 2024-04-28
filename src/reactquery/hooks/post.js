import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"

const usePost = (query) => {
    // return useQuery({
    //     queryKey: ["posts", query], //when ever the query changes , react query fetch the data from back end
    //     queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos', {
    //         params: {
    //             _start: (query.page - 1) * query.pageLimit,
    //             _limit: query.pageLimit
    //         }
    //     }).then((res) => res.data),
    //     staleTime: 1 * 60 * 1000, //1min
    //     keepPreviousData: true
    // })
    return useInfiniteQuery({
        queryKey: ["posts", query], //when ever the query changes , react query fetch the data from back end
        queryFn: ({ pageParam = 1 }) => axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _start: (pageParam - 1) * query.pageLimit,
                _limit: query.pageLimit
            }
        }).then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1min
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            // 1 -2
            console.log("lastPage", lastPage);
            console.log("allPages", allPages);
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    })
}

export default usePost;