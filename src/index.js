import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

const queryClient = new QueryClient({
  // defaultOptions:{
  //   queries:{
  //     retry:3, // no of retries to call API when it fails
  //     cacheTime :300_000, // if there is no observer(query is not used by any component) the data in cache will be removed at given time.(5m),
  //     staleTime :10 *1000, // It tell that how much time that the data is considered to be fresh. When it fetch the data it will replace the staleTime. At time of fetching the old data will be present untill new data arrives. So it wont interupt the UI experience.
  //     refetchOnWindowFocus: false, // This makes when you are in other tab and visiting the app again it will call the query.
  //     refetchOnReconnect:false, //This is used when interest goes down and comes up the query will call and get the new Data.
  //     refetchOnMount:true, //This is used when every time component mounts it will call the query and fetch data.

  //    }
  // }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
