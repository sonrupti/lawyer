import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import LawyerProfile from "./pages/LawyerProfile";


function App(){

return (

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home />}
/>


<Route
path="/lawyer/:id"
element={<LawyerProfile />}
/>


</Routes>

</BrowserRouter>

)

}


export default App;