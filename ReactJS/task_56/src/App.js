import logo from './Assets/Images/logo.png';
import hero_img from './Assets/Images/hero-img.png';
import about_img from './Assets/Images/about-img.png';
import p1 from './Assets/Images/p1.jpg';
import p2 from './Assets/Images/p2.jpg';
import p3 from './Assets/Images/p3.jpg';
import p4 from './Assets/Images/p4.jpg';
import p5 from './Assets/Images/p5.jpg';
import p6 from './Assets/Images/p6.jpg';
import binoculars_1 from './Assets/Icon/binoculars_1.png';
import b1 from './Assets/Images/b1.jpg';
import b2 from './Assets/Images/b2.jpg';
import b3 from './Assets/Images/b3.jpg';
import user1 from './Assets/Images/user1.jpg';
import user2 from './Assets/Images/user2.png';
import user3 from './Assets/Images/user3.jpg';
import client1 from './Assets/Images/client1.png';
import client2 from './Assets/Images/client2.png';
import client3 from './Assets/Images/client3.png';
import client4 from './Assets/Images/client4.png';
import client5 from './Assets/Images/client5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Styles/Reset.css';
import './Styles/App.css';

function App() {
  return (
    <div className="Container">
      <div className="nav">
        <div className="logo"><a href=""><img src={logo} alt="logo"/></a></div>
        <div className="navBar">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">PORTFOLIO</a>
          <a href="">PRICING</a>
          <div className="dropdown">
            <button className="dropbtn">BLOG <FontAwesomeIcon icon={faAngleDown} style={{paddingLeft: "6px"}} /></button>
            <div className="blogDropdown">
              <a href="">Blog Home</a>
              <a href="">Blog Single</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">PAGES <FontAwesomeIcon icon={faAngleDown} style={{paddingLeft: "6px"}} /></button>
            <div className="pagesDropdown">
              <a href="">Elements</a>
              <a href="">Level 2</a>
            </div>
          </div>
          <a href="">CONTACT</a>
        </div>
      </div>

      <div className="titleContainer">
        <div className="titleContent">
          <p className="titleHead">THIS IS ME</p>
          <p className="titleName">PHILIP GILBERT</p>
          <p className="titlePara">You will begin to realise why this exercise is called the Dickens Pattern with <br/> reference to the ghost showing Scrooge some different futures.</p>
          <button className="titleBtn">DISCOVER NOW</button>
        </div>
        <div className="titleImg">
          <img src={hero_img} alt="profilepic"/>
        </div>
      </div>

      <div className="aboutContainer">
        <div><img src={about_img} alt="Image" className="aboutImg"/></div>
        <div className="aboutContent">
          <p className="abouthead">ABOUT ME</p>
          <h2 className="aboutName">PERSONAL DETAILS</h2>
          <p className="aboutpara">Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola.  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <button className="aboutbtn">VIEW FULL DETAILS</button>
        </div>
      </div>

      <div className="serviceContainer">
        <div className="serviceHeader">
          <h2 className="serviceTitle">My Offered Services</h2>
          <p className="serviceDesp">At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
        </div>
        <div className="serviceBox">
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-pie-chart"></i>
              <h3>Web design</h3>
            </div>
            <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
          </div>
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-laptop-phone"></i>
              <h3>Web development</h3>
            </div>
            <p>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
          </div>
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-camera"></i>
              <h3>Photography</h3>
            </div>
            <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
          </div>
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-picture"></i>
              <h3>Clipping Path</h3>
            </div>
            <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
          </div>
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-tablet"></i>
              <h3>Apps interface</h3>
            </div>
            <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.</p>
          </div>
          <div className="service">
            <div className="serivcei_h3">
              <i className="lnr lnr-rocket"></i>
              <h3>Graphic design</h3>
            </div>
            <p>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
          </div>
        </div>
      </div>

      <div className="countContainer">
        <div className="countBox">
          <h3>2536</h3>
          <p>Project Completed</p>
        </div>
        <div className="countBox">
          <h3>6784</h3>
          <p>Happy Clients</p>
        </div>
        <div className="countBox">
          <h3>2239</h3>
          <p>Cups of Coffee</p>
        </div>
        <div className="countBox">
          <h3>434</h3>
          <p>Real Professionals</p>
        </div>
      </div>

      <div className="projectsContainer">
        <div className="projectHeader">
          <h2 className="projectTitle">Our Latest Featured Projects</h2>
          <p className="projectDesp">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="projectList">
          <ul>
            <li style={{color: "#8490ff"}}>ALL</li>
            <li className="hover-underline">VECTOR</li>
            <li className="hover-underline">RASTER</li>
            <li className="hover-underline">UI/UX</li>
            <li className="hover-underline">PRINTING</li>
          </ul>
        </div>
        <div className="projectBox">
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p1} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>2D Vinyl Design</h4>
            <p>vector</p>
          </div>
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p2} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>2D Vinyl Design</h4>
            <p>vector</p>
          </div>
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p3} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>Creative Poster Design</h4>
            <p>Agency</p>
          </div>
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p4} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>Embosed Logo Design</h4>
            <p>Portal</p>
          </div>
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p5} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>3D Helmet Design</h4>
            <p>vector</p>
          </div>
          <div className="projectCard">
            <div className="ImageDiv">
              <div><img src={p6} alt="p1Img" className="projectImg"/></div>
              <div className="background-style">
                <img src={binoculars_1} alt="overlayImg" className="overlayImg"/>
              </div>
            </div>
            <h4>2D Vinyl Design</h4>
            <p>raster</p>
          </div>
        </div>
      </div>

      <div className="planContainer">
        <div className="planHeader">
          <h2 className="planTitle">Choose Your Plan</h2>
          <p className="planDesp">When someone does something that they know that they shouldn't do, did they.</p>
        </div>
        <div className="planBox">
          <div className="planCard">
            <div className="planContent">
              <div className="round">
                <h2 className="planSerialNo">01</h2>
              </div>
              <h3>Economy</h3>
              <p style={{marginBottom: "15px", border: "none"}}>For the individuals</p>
              <p className="inner-style">Secure Online Transfer</p>
              <p>Unlimited Styles for interface</p>
              <p>Reliable Customer Service</p>
              <h1 className="price">£199.00</h1>
              <div className="buyNow">
                <button className="buyNowTxt">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="planCard">
            <div className="planContent">
              <div className="round">
                <h2 className="planSerialNo">02</h2>
              </div>
              <h3>Business</h3>
              <p style={{marginBottom: "15px", border: "none"}}>For the individuals</p>
              <p className="inner-style">Secure Online Transfer</p>
              <p>Unlimited Styles for interface</p>
              <p>Reliable Customer Service</p>
              <h1 className="price">£199.00</h1>
              <div className="buyNow">
                <button className="buyNowTxt">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="planCard">
            <div className="planContent">
              <div className="round">
                <h2 className="planSerialNo">03</h2>
              </div>
              <h3>Premium</h3>
              <p style={{marginBottom: "15px", border: "none"}}>For the individuals</p>
              <p className="inner-style">Secure Online Transfer</p>
              <p>Unlimited Styles for interface</p>
              <p>Reliable Customer Service</p>
              <h1 className="price">£199.00</h1>
              <div className="buyNow">
                <button className="buyNowTxt">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="planCard">
            <div className="planContent">
              <div className="round">
                <h2 className="planSerialNo">04</h2>
              </div>
              <h3>Exlusive</h3>
              <p style={{marginBottom: "15px", border: "none"}}>For the individuals</p>
              <p className="inner-style">Secure Online Transfer</p>
              <p>Unlimited Styles for interface</p>
              <p>Reliable Customer Service</p>
              <h1 className="price">£199.00</h1>
              <div className="buyNow">
                <button className="buyNowTxt">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogContainer">
        <div className="blogHeader">
          <h2 className="blogTitle">Latest Posts From Our Blog</h2>
          <p className="blogDesp">You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business</p>
        </div>
        <div className="blogBox">
          <div className="blogCard">
            <div className="blogImage"><img src={b1} alt="Image" className="Image"/></div>
            <div className="settings">
              <div className="profile">
                <img src={user1} alt="profileImg"/>
                  <p>Giedrius V.</p>
              </div>
              <div className="comments">
                <p>
                  1st Oct
                  <span className="lnr lnr-heart" style={{paddingLeft: "10px"}}></span>
                  9
                  <span className="lnr lnr-bubble" style={{paddingLeft: "10px"}}></span>
                  0
                </p>
              </div>
            </div>
            <div className="blogContent">
              <h4 className="blogPost">BREAK THROUGH SELF DOUBT AND FEAR</h4>
              <p>Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.</p>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogImage"><img src={b2} alt="Image" className="Image"/></div>
            <div className="settings">
              <div className="profile">
                <img src={user2} alt="profileImg"/>
                  <p>Mark Wiens</p>
              </div>
              <div className="comments">
                <p>
                  24th Sep
                  <span className="lnr lnr-heart" style={{paddingLeft: "10px"}}></span>
                  15
                  <span className="lnr lnr-bubble" style={{paddingLeft: "10px"}}></span>
                  4
                </p>
              </div>
            </div>
            <div className="blogContent">
              <h4>PORTABLE FASHION FOR WOMEN</h4>
              <p>You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.</p>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogImage"><img src={b3} alt="Image" className="Image"/></div>
            <div className="settings">
              <div className="profile">
                <img src={user3} alt="profileImg"/>
                  <p>Artūras M.</p>
              </div>
              <div className="comments">
                <p>
                  2nd Sep
                  <span className="lnr lnr-heart" style={{paddingLeft: "10px"}}></span>
                  11
                  <span className="lnr lnr-bubble" style={{paddingLeft: "10px"}}></span>
                  7
                </p>
              </div>
            </div>
            <div className="blogContent">
              <h4>PRACTICE MAKES PERFECT</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolore similique quam quidem eos deleniti at aperiam minima aut?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="clientContainer">
        <img src={client1} alt="image"/>
        <img src={client2} alt="image"/>
        <img src={client3} alt="image"/>
        <img src={client4} alt="image"/>
        <img src={client5} alt="image"/>
      </div>

      <div className="footer">
        <div className="footerContainer">
          <div className="footerAbout">
            <h4>About Me</h4>
            <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.</p>
            <p>Copyright © 2019 All rights reserved <br/> This template is made with <span className="lnr lnr-heart" style={{color: "#FFB59E", fontWeight: "bolder"}}></span> by <span className="author">Artūras & Giedrius</span></p>
          </div>
          <div className="footerNews">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest trends</p>
            <input className="emailInput" type="email" placeholder="Enter Email Address"/><button className="emailBtn"><span className="lnr lnr-arrow-right"></span></button>
          </div>
          <div className="footerfollow">
            <h4>Follow Me</h4>
            <p>Let us be social</p>
            <div className="footerIcons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-dribbble"></i>
              <i className="fa-brands fa-behance"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
