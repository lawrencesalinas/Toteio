import './pagecss/Success.css'
import Header from '../components/layouts/Header'
import { Link } from 'react-router-dom'

function Success() {
    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <div className="success-container">

                <div className="card">
                    <div className='check'>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Success</h1>
                    <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                </div>
                <Link to={'/'}>
                    <button className='success-btn'>Continue Shopping</button>
                </Link>
            </div>
        </>


    )
}

export default Success