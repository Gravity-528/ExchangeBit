import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Signup from './Components/Signup/Signup.jsx';
import Signin from './Components/Signin/Signin.jsx';
import SideContextProvider from './Context/siteContext.jsx';
function App() {
  

  return (
    <SideContextProvider>
      <Signup/>
    </SideContextProvider>
  )
}

export default App
