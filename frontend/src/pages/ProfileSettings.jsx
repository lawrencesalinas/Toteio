import SideNav from '../components/layouts/SideNav'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './pagecss/Profile.css'
import Modal from 'react-modal'
import { model } from 'mongoose'

const customStyles = {
    content: {
        color: 'black',
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        button: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        borderRadius: '30px',
        boxShadow: "0 2px 2px 2px rgba"

    }
}


function ProfileSettings() {
    const { user } = useSelector((state) => state.auth)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [name, setName] = useState(user.name)





    // Open/close modal
    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    const onNameSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="profile">
            <div className="sidenav">
                <SideNav />
            </div>
            <div className="content">
                <h1 className='heading-profile'>Profile Settings</h1>
                <div className="profile-section">

                    <div className="column">
                        <div className="user-info" >
                            <p>Name</p>
                            <p>{user.name}</p>
                            <button className='underline' onClick={openModal}>Edit</button>
                        </div>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Update Name'>
                            <h2 className='h2-modal'>Edit Name</h2>
                            <button className="btn-close" onClick={closeModal}>X</button>
                            <form onSubmit={onNameSubmit} className='modal-form'>
                                <label>Name</label>
                                <input type='text' name="noteText" id="noteText" className='form-control' placeholder='Note text' value={name} onChange={(e) => setName(e.target.value)}></input>

                                <div>
                                    <button type='submit' className="btn">Submit</button>
                                </div>
                            </form>
                        </Modal>


                        <div className="user-info">
                            <p>Email</p>
                            <p>{user.email}</p>
                            <p className='underline'>Edit</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="user-info" >
                            <p>Address</p>
                            <button className='addnew-btn'>+ <span>Add New</span></button>
                        </div>
                        <div className="user-info">
                            <br />
                            <br />
                            <p>Password</p>
                            <p>*********</p>
                            <p className='underline'>Reset</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="user-info">
                            <p className='phone'>Phone Number</p>
                            <button>+<span>Add New</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProfileSettings