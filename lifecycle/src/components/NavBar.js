import "./styles.css"
import "./ContactUs"
import "./AboutUs"
import "./Home"

export default function NavBar(){
    const path = window.location.pathname
    return (
    <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/ContactUs">Contact Us</a>
                </li>
            <li>
                <a href="/AboutUs">About Us</a>
            </li>
        </ul>
    </nav>
    )
}