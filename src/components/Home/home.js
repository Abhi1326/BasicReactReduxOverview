/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import Header from '../Header/header'
import './home.css'
import {Link} from 'react-router-dom'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'

export class Home extends Component{
    constructor(props){
        super(props);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(newProps){
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }
    render(){
        return(
            <div>
                <Header logout={this.props.logout}/>
                <section id="banner">
                    <div className="inner">
                        <h2>Life is Cool</h2>
                        <p>Do more of what makes you happy</p>
                        <ul className="actions">
                            <li><input className="btnLoad" type="button" value="Learn More"/></li>
                        </ul>
                    </div>
                </section>

                <section id="one" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Abhishek Jaimini</h2>
                            <p>I'm Abhishek,a front end developer currently working with Tixdo Media pvt ltd.I have worked<br />
                                across dekstop(web applications)and native web apps(PWA)  and love to take an idea through design iterations <br />
                               and code it up for others to enjoy elegantly solving some complex web problems along the way .<br />
                                </p>
                        </header>
                    </div>
                </section>
                <footer className="footerHome" id="footer">
                    <ul className="menu">
                        <li><a href="">FAQ</a></li>
                        <li> <Link to="/aboutus/profile">Profile</Link></li>
                        <li> <Link to="/aboutus/team">Team</Link></li>
                        <li> <Link to="/aboutus/contactus">Contact</Link></li>
                    </ul>
                    <span className="copyright">
					&copy; Copyright. All rights reserved
				</span>
                </footer>


            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps,actions)(Home);
