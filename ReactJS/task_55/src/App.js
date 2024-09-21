import banner from './assets/Images/banner.jpeg';
import workImg1 from './assets/Images/workImg1.jpg';
import workImg2 from './assets/Images/workImg2.jpg';
import workImg3 from './assets/Images/workImg3.jpg';
import faqimg from './assets/Images/faqimg.jpg';
import client1 from './assets/Images/client1.png';
import client2 from './assets/Images/client2.png';
import client3 from './assets/Images/client3.png';
import client4 from './assets/Images/client4.png';
import client5 from './assets/Images/client5.png';
import map from './assets/Images/map.png';
import feedbackImg from './assets/Images/feedbackImg.jpg';
// import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import './styles/Reset.css';
import './styles/App.css';

function App() {
  return (
    <div className="Container">
      <div className="navBar">
        <ul className="navList">
          <li className="navTitle">GlassM5</li>
          <li className="navContent" style={{marginLeft: "195px"}}>Home</li>
          <li className="navContent">About us</li>
          <li className="navContent">Services</li>
          <li className="navContent">Contacts</li>
        </ul>
        <div className="navBtndiv"><button className="navBtn">Send message</button></div>
      </div>

      <div className="bannerContainer">
        <div className="bannerFront">
          <p className="bannerHeading">Photographer</p>
          <p className="bannerContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis. Praesent lobortis in est sit amet pretium.</p>
          <button className="bannerBtn">Read more</button>
        </div>

        <div>
          <img src={banner} alt="banner" width="800px" height="500px" className="bannerImage"/>
        </div>
      </div>

      {/* <div className="serviceContainer">
        <h2 className="serviceHead">Our Services</h2>
        <div className="serviceBox">
          <div className="boxContent">
              <span  
                  style={{fontSize: "115px",
                          rotate: "180deg",
                          color: "#A148FF",
                          backgroundColor: "rgb(255, 255, 255, 0.5)",
                          padding: "15px",
                          borderRadius: "500px",
                          boxShadow: "1px 2px 30px 1px #d4d4d4",
                          margin: "50px 35px 10px 135px"
                        }}>
                  <WbIncandescentOutlinedIcon />
              </span>
              <h5 className="boxContentHead">Interior Photography</h5>
              <p className="boxPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus eget sapien pellentesque porttitor nec ut velit.</p>
          </div>
          <div className="boxContent">
              <span className="material-symbols-outlined" 
                  style={{fontSize: "115px",
                          fontWeight: "bold",
                          color: "#A148FF",
                          backgroundColor: "rgb(255, 255, 255, 0.5)",
                          padding:"15px",
                          borderRadius: "500px",
                          boxShadow: "1px 2px 30px 1px #d4d4d4",
                          margin: "50px 35px 10px 140px"
                        }}>
                  account_circle</span>
              <h5 className="boxContentHead">Portrait Photo</h5>
              <p className="boxPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus eget sapien pellentesque porttitor nec ut velit.</p>
          </div>
          <div className="boxContent">
              <span className="material-symbols-outlined"
                  style={{fontSize: "115px",
                          fontWeight: "bold",
                          color: "#A148FF",
                          backgroundColor: "rgb(255, 255, 255, 0.5)",
                          padding: "15px",
                          borderRadius: "500px",
                          boxShadow: "1px 2px 30px 1px #d4d4d4",
                          margin: "50px 35px 10px 125px",
                        }}>
                  palette</span>
              <h5 className="boxContentHead">Art Photo</h5>
              <p className="boxPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus eget sapien pellentesque porttitor nec ut velit.</p>
          </div>
        </div>
      </div> */}

      <div className="pricingContainer">
        <div className="pricingHeading">
          <p className="priceHead">OUR PRICING</p>
          <p className="priceDesp">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="pricingCards">
          <div className="card">
            <p className="cardPrice">$39</p>
            <p className="cardHead">Start</p>
            <p className="cardPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.</p>
            <button className="priceBtn">Buy Now</button>
          </div>
          <div className="card">
            <p className="cardPrice">$59</p>
            <p className="cardHead">Basic</p>
            <p className="cardPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.</p>
            <button className="priceBtn">Buy Now</button>
          </div>
          <div className="card">
            <p className="cardPrice">$89</p>
            <p className="cardHead">Pro</p>
            <p className="cardPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut  eu risus sapien pellentesque.</p>
            <button className="priceBtn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="workContainer">
        <div className="workHeading">
          <p className="workHead">OUR WORKS</p>
          <p className="workDesp">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="workCard">
          <div className="workImageCard">
            <img src={workImg1} alt="image" className="workImage"/>
            <div className="overlay">Interior Photography <br/> <span className="overlaySec">Lorem ipsum dolor sit amet.</span></div>
          </div>
          <div className="workImageCard">
            <img src={workImg2} alt="image" className="workImage"/>
            <div className="overlay">Portrait Photo <br/> <span className="overlaySec">Lorem ipsum dolor sit amet.</span></div>
          </div>
          <div className="workImageCard">
            <img src={workImg3} alt="image" className="workImage"/>
            <div className="overlay">Art Photo <br/> <span className="overlaySec">Lorem ipsum dolor sit amet.</span></div>
          </div>
        </div>
      </div>

      <div className="progressConatiner">
        <div className="progressBox">
          <h4 className="processHead">PROGRESS</h4>
          <h2 className="processSubHead">Our Competence</h2>
          <p className="processPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis.  Praesent lobortis in est sit amet pretium. Fusce ante libero, ultrices sed ullamcorper quis, volutpat in metus. Mauris pulvinar, neque in porttitor faucibus.</p>
          <div className="progressContent">
            <p>Interior Photography</p>
            <p>92%</p>
          </div>
          <div className="progressBar">
            <div style={{backgroundColor: "#A148FF", width: "900px", borderRadius: "50px 0 0 50px"}}></div>
            <div style={{backgroundColor: "rgb(255, 255, 255,0.7)", width: "50px", borderRadius: "0 50px 50px 0"}}></div>
          </div>
          <div className="progressContent">
            <p>Portrait Photo</p>
            <p>71%</p>
          </div>
          <div className="progressBar">
            <div style={{backgroundColor: "#A148FF", width: "740px", borderRadius: "50px 0 0 50px"}}></div>
            <div style={{backgroundColor: "rgb(255, 255, 255,0.7)", width: "210px", borderRadius: "0 50px 50px 0"}}></div>
          </div>
          <div className="progressContent">
            <p>Art Photo</p>
            <p>53%</p>
          </div>
          <div className="progressBar">
            <div style={{backgroundColor: "#A148FF", width: "510px", borderRadius: "50px 0 0 50px"}}></div>
            <div style={{backgroundColor: "rgb(255, 255, 255,0.7)", width: "440px", borderRadius: "0 50px 50px 0"}}></div>
          </div>
        </div>      
      </div>

      <div className="FAQContainer">
        <div className="faqbox">
          <div className="faqInnerBox">
            <h2 className="faqHead">Frequently Asked Questions</h2>
            <div className="faqPoint">
              <p className="faqLine">Lorem ipsum dolor sit amet</p>
              <p className="faqAddIcon">+</p>
            </div>
            <div className="faqPoint">
              <p className="faqLine">Maecenas vulputate in enim</p>
              <p className="faqAddIcon">+</p>
            </div>
            <div className="faqPoint">
              <p className="faqLine">Curabitur ut venenatis urna</p>
              <p className="faqAddIcon">+</p>
            </div>
          </div>
          <div><img src={faqimg} alt="image" className="faqimg"/></div>
        </div>
      </div>

      <div className="clientContainer">
        <div className="clientHeading">
          <p className="clientHead">OUR CLIENTS</p>
          <p className="clientDesp">We love to work with our clients</p>
        </div>
        <div className="clientImgBox">
          <div className="clientImgCont"><img src={client1} alt="image" className="clientImg"/></div>
          <div className="clientImgCont"><img src={client2} alt="image" className="clientImg"/></div>
          <div className="clientImgCont"><img src={client3} alt="image" className="clientImg"/></div>
          <div className="clientImgCont"><img src={client4} alt="image" className="clientImg"/></div>
          <div className="clientImgCont"><img src={client5} alt="image" className="clientImg"/></div>
          <div className="clientImgCont"><img src={client1} alt="image" className="clientImg"/></div>
        </div>
      </div>

      <div className="contactContainer">
        <div className="contactBox">
          <p className="contactLineOne">HAVE A NEW PROJECT IN MIND?</p>
          <p className="contactLineTwo">Say Hello</p>
          <p className="contactLineThree">hello@yoursite.com</p>
        </div>
      </div>

      <div className="mapContainer">
        <div className="mapBox">
          <img src={map} alt="map" className="mapImg"/>
        </div>
      </div>

      <div className="feedBackContainer">
        <div className="feedBackImage">
          <img src={feedbackImg} alt="image" width="450px" height="580px" style={{borderRadius: "50px"}}/>
        </div>
        <div className="feedBackContent">
          <div className="feedBackPara">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci nisl, rhoncus viverra fringilla in, luctus vitae elit.</p>
            <p className="feedBackName">Gabriel Moreira</p>
          </div>
        </div>
      </div>

      <div className="contactUsContainer">
        <div className="contactUsBox">
          <h3 className="contactHead">Contact Us</h3>
          <div className="inputContainer">
            <input type="text" placeholder="Name" className="contactInput"/>
            <input type="email" placeholder="Email" className="contactInput"/>
            <input type="text" placeholder="Subject" className="contactInput"/>
            <input type="text" placeholder="Phone" className="contactInput"/>
          </div>
          <textarea name="message" className="messageBox" placeholder="Message" rows="13" cols="88"></textarea><br/>
          <button className="contactBtn">Send your message</button>
        </div>
      </div>

      <div className="footer">
        <div className="footerBox">
          <div className="footerAboutUs">
            <h3 className="footerAboutHead">About Us</h3>
            <p className="footerContentPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis. Convallis fringilla arcu consequat condimentum lectus.</p>
          </div>
          <div className="footerCompany">
            <h3 className="footerHead">Company</h3>
            <ul className="footerContentList">
              <li><a href="">About</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Contacts</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
          <div className="footerTheme">
            <h3 className="footerHead">Themes</h3>
            <ul className="footerContentList">
              <li><a href="">Features</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Info</a></li>
            </ul>
          </div>
          <div className="footerSupport">
            <h3 className="footerHead">Support</h3>
            <ul className="footerContentList">
              <li><a href="">Contacts</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
