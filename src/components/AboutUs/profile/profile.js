/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './profile.css'

class Profile extends Component{
    render(){
        return(
            <section>
            <div>

                    <div className="at-section">
                        <div className="at-section__title_about">About Us</div>
                    </div>

                    <div className="aboutus section_padding">

                        <p className="text_paragraphs">

                            I'm Abhishek,a front end developer currently working with Tixdo Media pvt ltd.
                            I have worked across dekstop(web applications)and native web apps(PWA) and love
                            to take an idea through design iterations and code it up for others to enjoy elegantly
                            solving some complex web problems along the way .
                            I'd love to have a chat if you'd like to hear more.I'm abhishek.jaimini26 on Skype
                            or can Hangout,too.

                        </p>
                        <h3>Responsibilities</h3>
                        <p className="text_paragraphs">
                            Developing new user-facing features using React.js<br />
                            Building reusable components and front-end libraries for future use<br />
                            Translating designs and wireframes into high quality code<br />
                            Optimizing components for maximum performance across a vast array of web-capable devices and browsers<br />
                        </p>

                        <h3>Skills</h3>
                        <p className="text_paragraphs">
                            Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model<br />
                            Thorough understanding of React.js and its core principles<br />
                            Experience with popular React.js workflows (such as Flux or Redu<br />x)
                            Familiarity with newer specifications of EcmaScript<br />
                            Experience with data structure libraries (e.g., Immutable.js)<br />
                            Knowledge of isomorphic React is a plus<br />
                            Familiarity with RESTful APIs<br />
                            Knowledge of modern authorization mechanisms, such as JSON Web Token<br />
                            Familiarity with modern front-end build pipelines and tools<br />
                            Experience with common front-end development tools such as Babel, Webpack, NPM, etc.<br />
                            Ability to understand business requirements and translate them into technical requirements<br />
                            A knack for benchmarking and optimization<br />
                            Familiarity with code versioning tools  as Git, Git Flow<br />
                        </p>
                    </div>

            </div>
                </section>


        )
    }
}
export default Profile

