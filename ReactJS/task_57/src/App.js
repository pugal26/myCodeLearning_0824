import logo from './Assets/Images/logo.png';
import sign from './Assets/Images/sign.png';
import service_img1 from './Assets/Images/service_img1.jpg';
import service_img2 from './Assets/Images/service_img2.jpg';
import service_img3 from './Assets/Images/service_img3.jpg';
import service_img4 from './Assets/Images/service_img4.jpg';
import service_img5 from './Assets/Images/service_img5.jpg';
import service_img6 from './Assets/Images/service_img6.jpg';
import f_pr_1 from './Assets/Images/f_pr_1.jpg';
import f_pr_2 from './Assets/Images/f_pr_2.jpg';
import f_pr_3 from './Assets/Images/f_pr_3.jpg';
import f_pr_4 from './Assets/Images/f_pr_4.jpg';
import f_pr_5 from './Assets/Images/f_pr_5.jpg';
import client_img1 from './Assets/Images/client_img1.png';
import client_img2 from './Assets/Images/client_img2.png';
import client_img3 from './Assets/Images/client_img3.png';
import quote from './Assets/Images/quote.png';
import news_1 from './Assets/Images/news-1.jpg';
import news_2 from './Assets/Images/news-2.jpg';
import news_3 from './Assets/Images/news-3.jpg';
import logo_1 from './Assets/Images/logo-1.png';
import telegram from './Assets/Images/telegram.png';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import './Styles/Reset.css';
import './Styles/App.css';

function App() {
  return (
    <div className="Container">
      <div className="nav">
        <img src={logo} alt="logo" className="logo"/>
          <div className="navBar">
            <ul>
              <li className="Home">Home</li>
              <li className="navList">About Us</li>
              <li className="navList">Services</li>
              <li className="navList">Projects</li>
              <li className="navList">Pages</li>
              <li className="navList">Shop</li>
              <li className="navList">Blog</li>
              <li className="navList">Contact Us</li>
            </ul>
            <div className="searchIcon"><i className="fas fa-search"></i></div>
            <div className="number">1800 685 4321</div>
          </div>
      </div>

      <div className="bannerContainer">
        <h1>We Are Providing Best<br/>Service In <span className="headStyle">Industrial Area</span></h1>
        <p className="bannerPara">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
        <button className="bannerBtn">View all services</button>
        <div className="bannerContent">
          <div className="bannerBoxOne">
            <EngineeringIcon style={{fontSize: "50px"}} /> 
            <div>
              <h4 className="boxHead">High Standard in Service</h4>
              <p className="boxPara">Capitalize on low hanging fruit to iden- tify a ballpark value added activity to beta test. Override the digital divide.</p>
            </div>
          </div>
          <div className="bannerBoxTwo">
            <LegendToggleIcon style={{fontSize: "50px"}} />
            <div>
              <h4 className="boxHead">25 Years Experience in Industry</h4>
              <p className="boxPara">Capitalize on low hanging fruit to iden- tify a ballpark value added activity to beta test. Override the digital divide.</p>
            </div>
          </div>
          <div className="bannerBoxThree">
            <PsychologyIcon style={{fontSize: "50px"}} />
            <div>
              <h4 className="boxHead">Best Position in Market</h4>
              <p className="boxPara">Capitalize on low hanging fruit to iden- tify a ballpark value added activity to beta test. Override the digital divide.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="welcomeContainer">
        <div className="welcomeContent">
          <h6 className="welcomeHead">Welcome to our Industry</h6>
          <h2 className="welcomeDesp">25+ years of experiences for give you better results.</h2>
          <p className="welcomePara">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward ew normal that has evolved.</p>
          <p className="ceo">Compaany CEO : <span className="ceo-name">Michale John</span></p>
          <img src={sign} alt="signImg"/>
        </div>
      </div>

      <div className="servicesContainer">
        <div className="serviceHeader">
          <div className="serviceHead">
            <h2 className="serviceTitle">Our Services</h2>
            <div className="emptyLine"></div>
          </div>
          <p className="servicePara">Podcasting operational change management inside of workflows to establish a framework taking seamless key performanceindicators.</p>
        </div>
        <div className="serviceBox">
          <div className="serviceCard">
            <div className="imageDiv">
              <div className="overflowhide"><img src={service_img1} alt="service_img" className="service_img"/></div>
              <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <div><h4 className="cardTitle">Agricultural Processing</h4></div>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
          <div className="serviceCard">
            <div className="imageDiv">
              <img src={service_img2} alt="service_img" className="service_img"/>
                <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <h4 className="cardTitle">Chemical Industry</h4>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
          <div className="serviceCard">
            <div className="imageDiv">
              <img src={service_img3} alt="service_img" className="service_img"/>
                <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <h4 className="cardTitle">Civil Engineering</h4>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
          <div className="serviceCard">
            <div className="imageDiv">
              <img src={service_img4} alt="service_img" className="service_img"/>
                <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <h4 className="cardTitle">Energy & Power</h4>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
          <div className="serviceCard">
            <div className="imageDiv">
              <img src={service_img5} alt="service_img" className="service_img"/>
                <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <h4 className="cardTitle">Mechanical Engineering</h4>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
          <div className="serviceCard">
            <div className="imageDiv">
              <img src={service_img6} alt="service_img" className="service_img"/>
                <div className="overlay-style"><button className="serviceBtn">Read More</button></div>
            </div>
            <h4 className="cardTitle">Oil & Gas Enginering</h4>
            <div className="empty">
              <div className="emptyBorderOne"></div>
              <div className="emptyBorderTwo"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsContainer">
        <div className="projectHeader">
          <div className="projectHead">
            <h2 className="projectTitle">Our Featured <span className="projectStyle">Projects</span> </h2>
            <div className="emptyLine"></div>
          </div>
          <p className="projectPara">Podcasting operational change management inside of workflows to establish a framework taking seamless key performanceindicators.</p>
        </div>
        <div className="projectBox">
          <div className="projectCard">
            <img src={f_pr_1} alt="img" className="projectImage"/>
              <div className="overlay">
                <div className="project-text">Chemical Chamber</div>
              </div>
          </div>
          <div className="projectCard">
            <img src={f_pr_2} alt="img" className="projectImage"/>
              <div className="overlay">
                <div className="project-text">Welding Processing</div>
              </div>
          </div>
          <div className="projectCard">
            <img src={f_pr_3} alt="img" className="projectImage"/>
              <div className="overlay">
                <div className="project-text">Railway Project</div>
              </div>
          </div>
          <div className="projectCard">
            <img src={f_pr_4} alt="img" className="projectImage"/>
              <div className="overlay">
                <div className="project-text">Material Engineering</div>
              </div>
          </div>
          <div className="projectCard">
            <img src={f_pr_5} alt="img" className="projectImage"/>
              <div className="overlay">
                <div className="project-text">Wind Power Project</div>
              </div>
          </div>
        </div>
      </div>

      <div className="progessContainer">
        <p className="progressPara">We provide innovative product solutions for <br/> <span className="progressStyle">sustainable progress.</span></p>
        <button className="progressBtn">Enter your Button</button>
      </div>

      <div className="clientContainer">
        <div className="clientTitle">What Our Clients Says</div>
        <div className="ClientemptyLine"></div>
        <div className="clientBox">
          <div className="clientCard">
            <div className="photo-div"><img src={client_img1} alt="profile-photo" className="profile-photo"/></div>
            <h5 className="clientName">Romani John</h5>
            <h6 className="location">Melborne / Australia</h6>
            <p className="clientPara">Override the digital divide with ad- ditional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
            <div><img src={quote} alt="quote" className="quote"/></div>
          </div>
          <div className="clientCard">
            <div className="photo-div"><img src={client_img2} alt="profile-photo" className="profile-photo"/></div>
            <h5 className="clientName">Romani John</h5>
            <h6 className="location">Melborne / Australia</h6>
            <p className="clientPara">Override the digital divide with ad- ditional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
            <div><img src={quote} alt="quote" className="quote"/></div>
          </div>
          <div className="clientCard">
            <div className="photo-div"><img src={client_img3} alt="profile-photo" className="profile-photo"/></div>
            <h5 className="clientName">Romani John</h5>
            <h6 className="location">Melborne / Australia</h6>
            <p className="clientPara">Override the digital divide with ad- ditional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
            <div><img src={quote} alt="quote" className="quote"/></div>
          </div>
        </div>
      </div>

      <div className="newsContainer">
        <div className="latestNews">
          <div className="background-style">
            <div className="newsheader">
              <h2 className="newsTitle">Latest News</h2>
              <div className="emptyLine"></div>
            </div>
            <p className="newsPara">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            <button className="newsBtn">More News</button>
          </div>
        </div>
        <div className="newsList">
          <div className="news-Box">
            <img src={news_1} alt="newsImage"/>
              <div className="news-Content">
                <h4>Capitalize on low hanging fruit to identify</h4>
                <p className="news-descp">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key...</p>
                <p className="news-date">December 12, 2019 | Admin</p>

              </div>
          </div>
          <div className="NewsemptyBorder"></div>
          <div className="news-Box">
            <img src={news_2} alt="newsImage"/>
              <div className="news-Content">
                <h4>Capitalize on low hanging fruit to identify</h4>
                <p className="news-descp">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key...</p>
                <p className="news-date">December 12, 2019 | Admin</p>
              </div>
          </div>
          <div className="NewsemptyBorder"></div>
          <div className="news-Box">
            <img src={news_3} alt="newsImage"/>
              <div className="news-Content">
                <h4>Capitalize on low hanging fruit to identify</h4>
                <p className="news-descp">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key...</p>
                <p className="news-date">December 12, 2019 | Admin</p>
              </div>
          </div>
        </div>
      </div>


      <div className="contactBackground">
        <div className="contact-bg-style">
          <div className="contactContent">
            <h4 className="contactHead">We invite you to discover some recent successes making an impact in the <span className="inner-style">automotive</span> industry solution in the world.</h4>
            <p className="contactPara">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway.</p>
          </div>

        <div className="from-container">
          <div className="from">
            <div className="form-boxOne">
              <img src={logo_1} alt="logo1" className="form-logo"/>
                <div className="icons-list">
                  <PhoneInTalkIcon style={{border: "1.5px solid", padding: "12px", borderRadius: "50%", color: "#FFB00D"}} />
                  <div>
                    <p className="icons-descp">1800 456 7890</p>
                    <p className="form-innerStyle">Mon - Fri, 9.30am to 6.30pm</p>
                  </div>
                </div>
                <div className="icons-list">
                  <MailOutlineIcon style={{border: "1.5px solid", padding: "12px", borderRadius: "50%", color: "#FFB00D"}} />
                  <div>
                    <p className="icons-descp">contact@infratek.com</p>
                    <p className="form-innerStyle">Get reply within 48 hours</p>
                  </div>
                </div>
                <div className="icons-list">
                  <LocationOnOutlinedIcon style={{border: "1.5px solid", padding: "12px", borderRadius: "50%", color: "#FFB00D"}} />                  
                  <div>
                    <p className="form-innerStyle">547, Mainroad Suit, Mount Lane</p>
                    <p className="form-innerStyle" style={{paddingTop: "10px"}}>Montonrian, New York</p>
                  </div>
                </div>
            </div>
            <div className="form-boxTwo">
              <div className="form-Heading">
                <h2 className="formTitle">Drop a Message </h2>
                <div className="emptyLine"></div>
              </div>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="E-Mail"/><br/>
                <input type="text" placeholder="Phone No."/>
                <input type="text" placeholder="Subject"/><br/>
                <textarea name="message" id="" placeholder="Message" rows="7" cols="73"></textarea><br/>
                <button className="formBtn">Submit now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-background"></div>

      <div className="footer-Conatiner">
        <div className="background-style-footer">
          <div className="footer-box">
            <div className="footer-Content-One">
              <img src={logo} alt="logo"/>
                <p className="footer-para">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs.</p>
                <p className="footer-read">Read more...</p>
            </div>
            <div className="footer-Content-links">
              <p className="link-title">Useful Links</p>
              <ul className="links">
                <li>Home</li>
                <li>About US</li>
                <li>Request Call Back</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-Content-service">
              <p className="service-title">Services</p>
              <ul className="services">
                <li>Energy & Power</li>
                <li>Mechanical Engineering</li>
                <li>Oil & Gas Engineering</li>
                <li>Agriculture Processing</li>
                <li>Chemical Industry</li>
              </ul>
            </div>
            <div className="footer-Content-News">
              <p className="news-title">Newsletter</p>
              <p className="news-para">Get latest updates and offers.</p>
              <div style={{display: "flex"}}>
                <div>
                  <input type="text" placeholder="Enter your email" className="footer-input"/>
                </div>
                <div>
                  <img src={telegram} alt="telegra," className="telegram"/>
                </div>
              </div>
              <div className="footer-icons">
                <div className="icons"><FontAwesomeIcon icon={faFacebookF}  id="icons"/></div>
                <div className="icons"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                <div className="icons"><FontAwesomeIcon icon={faTwitter} /></div>
                <div className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © <span className="copyright-style">Infratek</span> 2021. All right reserved.</p>
            <p>Created by: <span className="copyright-style">DesignArc</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
