
import  './styles.css';
import MyImg from '../../../assets/mi.png'
import githubImg from '../../../assets/icons/github.png'
import gmailImg from '../../../assets/icons/gmail.png'
import linkedinImg from '../../../assets/icons/linkedin.png'

function MenuHamburguer({navigation}) {
    
    return(
        <>
            <div className="imgBox">
                <img className="myimg" width={150} height={150} src={MyImg} alt="github" />
            </div>
            <ul className="menu__list" >
                <li className="menu__item">
                    <p onClick={()=>{ navigation('home')}} >Home</p>                           
                </li>
                <li className="menu__item">
                    <p onClick={()=>{ navigation('about')}}>About</p>                           
                </li>
                <li className="menu__item">
                    <p onClick={()=>{ navigation('services')}} >Services</p>                           
                </li>
            </ul>  
            <div className="siteJob">
                <ul className="jobs" >
                    <li className="job">
                        <a className="a" href="https://github.com/Jhonatan-Andrade/" target="blank">
                            <img className="jobs__link" width={18} height={18} src={githubImg} alt="github" />                     
                        </a>
                    </li>
                    <li className="job">
                        <a className="a" href="http://gmail.com/" target="bank">
                            <img className="jobs__link" width={18} height={18} src={gmailImg} alt="gmail" />                          
                        </a>
                    </li>
                    <li className="job">
                        <a className="a" href="https://www.linkedin.com/in/jhonatan-andrade-9116241ab/" target="bank">
                            <img className="jobs__link" width={18} height={18} src={linkedinImg} alt="linkedin" />                           
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default MenuHamburguer
