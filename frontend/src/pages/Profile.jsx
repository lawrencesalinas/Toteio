import { Link } from 'react-router-dom'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import SideNav from '../components/layouts/SideNav'
import './pagecss/Profile.css'

function Profile() {
    return (
        <>

            <Header linkcolor='#fff' bgcolor='#181818' />
            <NavBar />
            <div className="profile">

                <div className="sidenav">
                    <SideNav />
                </div>
                <div className="content">
                    <h1 className='heading-profile'>Dashboard</h1>
                    <div className="dashboard">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" alt="" className='dash-image' />
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" alt="" className='dash-image' />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Profile