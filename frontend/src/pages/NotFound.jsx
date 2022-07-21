import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './pagecss/NotFound.css'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'

function NotFound() {
    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <NavBar />
            <div className='notfound'>

                <div className='pg-info'>
                    <h1 className="oops">
                        Oops!
                    </h1>
                    <p className='p-notfound'>404- Page not found!</p>
                    <Link to='/' className='btn-pg'>
                        <FaHome className='mr-2' />
                        Back to Home

                    </Link>

                </div>
            </div>
        </>

    )
}

export default NotFound