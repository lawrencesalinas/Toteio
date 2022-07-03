import SideNav from '../components/layouts/SideNav'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import './pagecss/Profile.css'
import Modal from 'react-modal'
import Header from '../components/layouts/Header'
import Spinner from '../components/shared/Spinner'


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
        boxShadow: "0 5px 5px 5px rgba(0, 0, 0, 0.2)"

    }
}



Modal.setAppElement('#root')


function ProfileSettings() {
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [name, setName] = useState(user.name)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            toast.success('User info updated')
            dispatch(reset())
        }
    }, [isError, isSuccess, user, message, navigate, dispatch])



    // Open/close modal
    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    const onNameSubmit = (e) => {
        e.preventDefault()
        const userData = {
            updatedName: name,
        }
        dispatch(updateUser(userData))
        closeModal()

    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <div className="profile" >

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
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Update Name' >
                                <h2 className='h2-modal'>Edit Name</h2>
                                <button className="btn-close" onClick={closeModal}>X</button>
                                <form onSubmit={onNameSubmit} className='modal-form'>
                                    <label>Name</label>
                                    <input type='text' name="updatedName" id="updatedName" className='form-control' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>

                                    <div>
                                        <button type='submit' className="btn">Submit</button>
                                    </div>
                                </form>
                            </Modal>


                            <div className="user-info">
                                <p>Email</p>
                                <p>{user.email}</p>
                                <button className='underline' onClick={openModal}>Edit</button>
                            </div>
                        </div>
                        <div className="column">
                            <div className="user-info" >
                                <p>Address</p>
                                <button className='addnew-btn'>+ <span>Add New</span></button>
                            </div>
                            <div className="user-info">

                                <br />
                                <p>Password</p>
                                <p>*********</p>
                                <button className='underline' onClick={openModal}>Edit</button>
                            </div>
                        </div>
                        <div className="column">
                            <div className="user-info">
                                <p className='phone'>Phone Number</p>
                                <button className='addnew-btn'>+ <span>Add New</span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}

export default ProfileSettings