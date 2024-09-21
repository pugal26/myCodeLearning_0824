import img1 from './assets/Images/img1.jpg';
import img2 from './assets/Images/img2.jpg';
import img3 from './assets/Images/img3.jpg';
import img4 from './assets/Images/img4.jpg';
import img5 from './assets/Images/img5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import './styles/Reset.css'
import './styles/App.css';


function App() {
  return (
    <div className="Container">
      <div className="banner">
        <div className="navBar">
            <ul>
                <li>Home</li>
                <li>Watch Video</li>
                <li>Demo Pages</li>
                <li>Blocks</li>
            </ul>
            <div className="buynowbtn">
                <p>Buy Now</p>
            </div>
        </div>
        <div className="bannerContent">
            <h2 className="bannerHeading">Travel With Us</h2>
            <p className="bannerPara">Explore the world in any direction</p>
            <button className="bannerBtn" style={{backgroundColor: "white", fontFamily: "Montserrat-Light"}}>Buy Now</button>
            <button className="bannerBtn" style={{backgroundColor: "transparent", color: "white"}}>Ways to travel</button>
        </div>
      </div>

      <div className="journal">
        <div>
            <h3 className="journalheading">Our Journal</h3>
            <p className="journalDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque laboriosam quam, consequuntur vero officiis molestias, inventore repellendus.</p>
        </div>
        <div className="journalContainer">
            <div className="journalBox" style={{borderRadius: "5px 0 0 0"}}><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex eos qui autem <br/><br/> <span className="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} className='arrowRight'/></span></p></div>
            
            <div className="journalBox" style={{border: "none"}}><img src={img1} width="460px" height="362px" alt="image"/></div>

            <div className="journalBox" style={{borderRadius: "0 5px 0 0"}}><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex os qui autem <br/><br/> <span className="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} className='arrowRight' /></span></p></div>

            <div className="journalBox" style={{border: "none"}}><img src={img2} width="462px" height="360px" alt="image" style={{borderRadius: "0 0 0 5px"}}/></div>

            <div className="journalBox"><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex os qui autem <br/><br/> <span className="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} className='arrowRight' /></span></p></div>

            <div className="journalBox" style={{border: "none"}}><img src={img3} width="463px" height="360px" alt="image" style={{borderRadius: "0 0 5px 0"}}/></div>
        </div>  
        
        <div className="journalFooter">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam et quasi, dignissimos culpa rerum non corporis neque fuga nihil? Illo iure, nesciunt sunt fugiat vero tempora aspernatur iste, repudiandae? Molestias qui commodi, ut rerum recusandae, fugit cumque suscipit dolorem tenetur dolore, cupiditate voluptatibus. Mollitia dolorum, quae, doloribus, itaque dignissimos veritatis a amet aliquid cum veniam minus. Repudiandae, facilis, delectus?</p>
        </div>
      </div>

      <div className="emailContainer">
        <p className="emailHeading">Do You Wanna Go ?</p>
        <div className="emailGrp">
            <input type="text" placeholder="Email adress..." className="emailInput"/>
            <button className="emialBtn">I WANT!</button>
        </div>
      </div>

      <div className="geographic">
        <div className="geographicList" style={{backgroundImage: "linear-gradient(to bottom left, #1FCBC5, #29DAA1)", color: "white"}}>
            <h3 className="geographicHead">Southern countries</h3>
            <p className="geographicContent">Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur dipisicing elit.</p>
            <div className="geographicReadMore">
                <p style={{display: "flex"}}>Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
            </div>
        </div>
        <div className="geographicList" style={{backgroundImage: "linear-gradient(to bottom left, #2E6EE8, #1A8CF3)", color: "white"}}>
            <h3 className="geographicHead">Nordic countries</h3>
            <p className="geographicContent">Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur dipisicing elit.</p>
            <div className="geographicReadMore">
                <p style={{display: "flex"}}>Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
            </div>
        </div>
        <div className="geographicList" style={{backgroundImage: "linear-gradient(to bottom left, #FF685F, #FF5376)", color: "white"}}>
            <h3 className="geographicHead">African countries</h3>
            <p className="geographicContent">Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur dipisicing elit.</p>
            <div className="geographicReadMore">
                <p style={{display: "flex"}}>Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
            </div>
        </div>
      </div>

      <div className="geographicFooter">
        <div className="geographicQuote"><FontAwesomeIcon icon={faQuoteLeft} /></div>
        <p className="geographicFooterContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur facilis expedita cum iste voluptate itaque doloribus molestias numquam natus voluptates, molestiae tempora praesentium ratione dicta laudantium, excepturi voluptatibus, assumenda repellendus!</p>
        <p style={{paddingTop: "50px", fontSize: "23px"}}>National geographic</p>
      </div>

      <div className="travelContainer">
        <div className="travelTypeOne">
            <h3 className="travelTypeOneHead">We offer different ways to travel</h3>
            <p className="travelTypeOneContent">Click any text to edit or style it. Select text to insert a link. Click blue "Gear" icon in the top right corner to hide/show buttons, text, title and change the block background.</p>
            <button className="travelTypeOneBtn">Corporate HTML templates</button>
        </div>

        <div className="travelTypeOne">
            <img src={img4} alt="image" width="420px" height="260px" style={{boxShadow: "0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.15)", borderRadius: "5px"}}/>
            <h4 className="travelTypeTwoHead">Travel by air</h4>
            <p className="travelTypeOneContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p  className="travelReadme">Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
        </div>

        <div className="travelTypeOne">
            <img src={img5} alt="image" width="420px" height="260px" style={{borderRadius: "5px",boxShadow: "0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.15)"}}/>
            <h4 className="travelTypeTwoHead">Travel by train</h4>
            <p className="travelTypeOneContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="travelReadme">Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
        </div>
      </div>

      <div className="blogContainer">
        <div className="blogHeading">
            <h2 className="blogtitle">Read Our Blog</h2>
            <p className="blogDes">Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Officia officiis possimus tempore veniam iste hic qui corrupti explicabo at error totam.</p>
        </div>

        <div className="blogContent">
          <div className="blogCard">
            <img src={img1} alt="image" width="380px" height="260px"/>
            <h2 className="blogCardName">Mediterranean sea</h2>
            <p className="blogCardContent">Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="travelReadme">Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
          </div>
          <div className="blogCard">
            <img src={img1} alt="image" width="380px" height="260px"/>
            <h2 className="blogCardName">Lorem Ipsum</h2>
            <p className="blogCardContent">Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="travelReadme">Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
          </div>
          <div className="blogCard">
            <img src={img1} alt="image" width="380px" height="260px"/>
            <h2 className="blogCardName">African Savannah</h2>
            <p className="blogCardContent">Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="travelReadme">Read More<FontAwesomeIcon icon={faArrowRight} className='geo_arrowRight' /></p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerCard">
            <h1 className="footerHead">Corporate HTML5 templates</h1>
            <p className="footerContent">1234 Street Name <br/> City, AA 99999</p>
        </div>

        <div className="footerCard">
            <h3 className="footerHeadSub">Phone</h3>
            <p className="footerContent">Office : +1 (0) 000 0000 001</p>
        </div>

        <div className="footerCard">
            <h3 className="footerHeadSub">Email</h3>
            <p className="footerContent">support@mobirise.com</p>
        </div>

        <div className="footerCard">
            <h3 className="footerHeadSub">Social</h3>
            <a href="#" className='geo_arrowRight'></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
