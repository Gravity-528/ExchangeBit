import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Signup from './Components/Signup/Signup.jsx';
import Signin from './Components/Signin/Signin.jsx';
import SideContextProvider from './Context/siteContext.jsx';
import Home from './Components/Home/Home.jsx';
function App() {
  

  return (
    <SideContextProvider>
      <Home/>
    </SideContextProvider>
  )
}

export default App
