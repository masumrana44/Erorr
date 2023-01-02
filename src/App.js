
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Layout/Main';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      Element:<Main/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
