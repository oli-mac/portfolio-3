import React from 'react'
import "./about.css"
import about from '../../images/about-1.jpg'
import Award from '../../images/award.png'
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>     
                <div className="a-card">
                <img src={about} alt="" className="a-img" />
                </div>           
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services and
                    online stores.
                </p>
                <p className="a-desc">
                    I have always loved software and web development. It always peaked my interest.
                    It was such comfort to me all I had to do was want something to be real, to be able to imagine it.
                    Reason why I'm a software and web developer.
                    Imagining things came easy to me, it was like my second nature.
                    I have been designing websites as early as I could. I worked hard and long. 
                </p>
                <p className="a-desc hid">
                    Through learning and experience I have become an expert in software development process.
                    I give all my time and energy to give a better service.
                    I thrive to be the best software development manager I know I can be.
                    In a world where the future is web development, I consider myself lucky because I have the tools in my hands.
                    And I would Be Happy service your's and your bussness's need to the best of my ability.
                </p>
                <div className="a-award">
                    <img src={Award} alt="awards" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">For Better & Deep view.</h4>
                        <p className="a-award-desc">
                            I have attached my cv below so u can have a better idea of my Credentials.
                        </p>
                        <button><a class="a-button"target="_blank" href="resume.pdf">Download CV</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
