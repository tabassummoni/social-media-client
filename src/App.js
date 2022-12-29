import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    {/* <Toaster
      position="top-right"
      reverseOrder={true}
    />  */}
  </div>
  );
}

export default App;
