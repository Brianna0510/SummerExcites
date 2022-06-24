import { City } from './City';
import { Navbar } from './Navbar'
import { Cards } from './Cards'
import icon from './Icon.png'



export function App(){
    return(
        <main>
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
        </main>
    );
    //
}






