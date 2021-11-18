import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaFeather, FaCopyright  } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="f">
            <div class="icons">
                <a href="https://github.com/oli-mac" target=" _blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/olyad-mulugeta-79875621b/" target=" _blank"><FaLinkedin /></a>
                <a href="https://twitter.com/@oli_mac3" target=" _blank"><FaTwitter /></a>
                <a href="https://instagram.com/@oli_mac_" target=" _blank"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100008821115355" target=" _blank"><FaFacebook /></a>
            </div>
             <div className="f-copy">
            <span>Created By<a href="www.olyadmulugeta.me" target=" _blank"><b>Olyad M</b><FaFeather /></a> |<span
                ><FaCopyright /></span>2021 All Rights are reserved. </span>
            </div>
        </div>
    )
}

export default Footer
