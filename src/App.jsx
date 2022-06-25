import { City } from './City';
import { Navbar } from './Navbar'
import { Cards } from './Cards'
import icon from './Icon.png'
import { Route, Routes} from 'react-router-dom';
import { Login } from './Login';



export function App(){
    return(
        <Routes>
      
    <Route exact path="/login" element={<Login/>}/>

     <Route path="/" element={ 
     <div>
     <div id="header">
                <header>
                    <img src={icon}/>
                    <div className="text">
                        <h1>Find the fun this summer 😊☀️</h1>
                        <p>Find Places and Ice cream 🍨</p>
                    </div>
                </header>
            </div>
           
            <Navbar />
            <section>
                <City />      
            </section>
            <section>
            <hr className='hr' />
            <Cards />
            </section>
            </div>


     }/>


           
        </Routes>
    );
    //
}






