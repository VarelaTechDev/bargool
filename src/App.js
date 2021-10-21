import React, {useState} from 'react'



// We are using exporting const so we need to use {}
import {NavBar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)


    return (
        <div className={darkTheme ? 'dark' : ''}>
            {/* Tailwind CSS */}

            <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                {/* Passing in react hooks to use */}
                <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routes/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
