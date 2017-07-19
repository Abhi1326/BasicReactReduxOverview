/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactus.css'

class ContactUs extends Component{
    render(){
        return(
            <div>
                <section className="contactus section_padding">
                    <div className="at-section">
                        <div className="at-section__title_contact">Contact Us !!!</div>
                    </div>
                    <form className="formcontact" action="">
                        <p className="formp">Say Hello! Or whatever you want!</p>
                        <div id="logo" className="icon-ic-drafts-24px"></div>
                        <input name="name" type="text"
                               placeholder="Name" id="name" required/>

                        <input name="email" type="email"
                               placeholder="Email" id="email" required/>

                        <textarea name="text" placeholder="Message"></textarea>

                        <input type="submit" value="Send" id="button-blue"/>
                    </form>
                </section>

            </div>

        )
    }
}
export default  ContactUs
