import '../componentcss/NavBar.css'

function NavBar() {
    console.log();

    return (
        <nav className="nav-bar-container">

            {/* {window.scrollY > nav.offsetHeight + 150 ? (<ul className='nav-bar'>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    Shoes
                </li>
                <li>
                    Tech
                </li>
                <li>
                    Clothing
                </li>
            </ul>) : ( */}
            <ul className='nav-bar'>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    Shoes
                </li>
                <li>
                    Tech
                </li>
                <li>
                    Clothing
                </li>
            </ul>
            {/* )} */}

        </nav>

    )
}

export default NavBar