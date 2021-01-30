
import  './styles.css';

import githubImg from '../../assets/icons/github.png'
import gmailImg from '../../assets/icons/gmail.png'
import linkedinImg from '../../assets/icons/linkedin.png'




function Menu() {
    return(
                <div className="siteJob">
                    <ul className="jobs" >
                        <li className="job job1">
                            <a className="a" href="https://github.com/Jhonatan-Andrade/" target="blank">
                                <img className="jobs__link" width={18} height={18} src={githubImg} alt="github" />                     
                            </a>
                        </li>
                        <li className="job job2">
                            <a className="a" href="http://gmail.com/" target="bank">
                                <img className="jobs__link" width={18} height={18} src={gmailImg} alt="gmail" />                          
                            </a>
                        </li>
                        <li className="job job3">
                            <a className="a" href="https://www.linkedin.com/in/jhonatan-andrade-9116241ab/" target="bank">
                                <img className="jobs__link" width={18} height={18} src={linkedinImg} alt="linkedin" />                           
                            </a>
                        </li>
                    </ul>
                </div>
    )
}
export default Menu
