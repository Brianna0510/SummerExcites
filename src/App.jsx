import { Navbar } from './Navbar'
import { Cards } from './Cards'
import { IcePlaces } from './Icecards'
import icon from './Icon2.png'




export function App(){
   
    return(
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
            <hr className='hr' />
            <Cards />
            <hr className='hr'/>
            <IcePlaces/>
        </section>
        
    </div>           
    );
}






