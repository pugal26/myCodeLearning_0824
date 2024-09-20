import img1 from './assets/Images/img1.jpg';
import img2 from './assets/Images/img2.jpg';
import img3 from './assets/Images/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
            <div className="journalBox" style={{borderRadius: "5px 0 0 0"}}><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex eos qui autem <br/><br/> <span className="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} /></span></p></div>
            
            <div className="journalBox" style={{border: "none"}}><img src={img1} width="460px" height="362px" alt="image"/></div>

            <div className="journalBox" style={{borderRadius: "0 5px 0 0"}}><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex os qui autem <br/><br/> <span className="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} /></span></p></div>

            <div className="journalBox" style="border: none;"><img src={img2} width="462px" height="360px" alt="image" style={{borderRadius: "0 0 0 5px"}}/></div>

            <div className="journalBox"><p style={{padding: "60px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex os qui autem <br/><br/> <span class="journalReadMeTag" >Read More<FontAwesomeIcon icon={faArrowRight} /></span></p></div>

            <div className="journalBox" style="border: none;"><img src={img3} width="463px" height="360px" alt="image" style={{borderRadius: "0 0 5px 0"}}/></div>
        </div>  
        
        <div className="journalFooter">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam et quasi, dignissimos culpa rerum non corporis neque fuga nihil? Illo iure, nesciunt sunt fugiat vero tempora aspernatur iste, repudiandae? Molestias qui commodi, ut rerum recusandae, fugit cumque suscipit dolorem tenetur dolore, cupiditate voluptatibus. Mollitia dolorum, quae, doloribus, itaque dignissimos veritatis a amet aliquid cum veniam minus. Repudiandae, facilis, delectus?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
