import '../componentcss/NavBar.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {

    const location = useLocation()
    console.log(location.pathname);
    return (
        <nav className="nav-bar-container">
            <ul className='nav-bar'>

                {location.pathname === `/category/clothes` || location.pathname === `/category/shoes` ? (
                    <>
                        <li>
                            <Link to={`${location.pathname}?gender=men`}>Men</Link>
                        </li>
                        <li>
                            <Link to={`${location.pathname}?gender=women`}>Women</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={`/category/clothes?gender=men`}>Men</Link>
                        </li>
                        <li>
                            <Link to={`/category/clothes?gender=women`}>Women</Link>
                        </li>



                    </>
                )}

                <li>
                    <Link to='/category/shoes'>Shoes</Link>
                </li>
                <li>
                    <Link to='/category/tech'>Tech</Link>
                </li>
                <li>
                    <Link to='/category/clothes'>Clothes</Link>
                </li>
            </ul>
            {/* )} */}

        </nav>

    )
}

export default NavBar