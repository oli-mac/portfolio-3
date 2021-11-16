import './contact.css'
import phone from "../../images/phone.png"
import email from "../../images/email.png"
import address from "../../images/address.png"
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode;


    const hundelSubmit = (e)=>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_pdhb237',
                'template_d414n7g',
                formRef.current,
                'user_1ovCE8JKEGiClzfWW7e6G'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss Your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +251-1912-297301
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            contactolyad@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Adis Abeba, Ethiopia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={hundelSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Name" name="user_name" required/>
                        <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Subject" name="user_subject" required/>
                        <input style={{backgroundColor: darkMode && "#333"}}type="email" placeholder="Email" name="user_email" required/>
                        <textarea style={{backgroundColor: darkMode && "#333",border: darkMode && "none"}}name="message" rows="5" placeholder="Message"></textarea>
                        <button >Submit</button>
                        {done && "Thank You i will get back to you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
