import '../componentcss/Footer.css'
import { FaGithub, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'
const footerYear = new Date().getFullYear()

function Footer() {
    return (
        <footer className="Footer">
            <p>Copyright &copy; {footerYear} All rights reserved </p>
            <div className="icons">
                <p>  <FaGithub /></p>
                <p>    <FaLinkedin /></p>
                <p> <FaLink /></p>
            </div>

        </footer>


    )
}

export default Footer