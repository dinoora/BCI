import './App.css';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
function App(){
  let component
  switch(window.location.pathname){
  case "/":
    component = <Home/>
    break
    case "/ContactUs":
      component=<ContactUs/>
    break
    case "/AboutUs":
      component=<AboutUs/>
    break
  }
  return (
    <>
   <NavBar/>
   <div className='container'>
   {component}
   </div>
   </>
  )
}


export default App;
