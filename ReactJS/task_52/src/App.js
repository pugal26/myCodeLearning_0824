import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.png';
import img_4 from './assets/img_4.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <p className="navList">HOME</p>
        <p className="navList">TOUR</p>
        <p className="navList" style={{paddingRight: "180px"}}>DESTINATION</p>
        <p className="navList">PAGES</p>
        <p className="navList">BLOG</p>
        <p className="navList">CONTACT</p>
      </div>
      
      <div className="heading"><h2>TREVELLO.</h2></div>
      
      <div className="banner">
        <div className="bannerContent">
          <h2>MAKE YOUR TOUR AMAZING <br/> WITH US</h2>
          <div style={{backgroundColor: "blue", width: "550px"}}>
            <p style={{fontFamily: "'Times New Roman', Times, serif", fontSize: "smaller", textAlign: "justify", color: "white"}}>On into not, sleeping have objects on from it project and but by we indication a he own the office as bed in the hat ideas rippedup</p>
          </div>
          <button className="bannerButton">Destination</button>
        </div>
        <div className="bookTourNow">
          <h2 style={{color: "white", textAlign: "center", marginBottom: "30px"}}>Book Tour Now</h2>
          <input type="text" placeholder="Search Keywords" className="inputList"/><br/>
          <input type="text" placeholder="Destination" className="inputList"/><br/>
          <input type="text" placeholder="Tour Type" className="inputList"/><br/>
          <input type="text" placeholder="15/11/20215" className="inputList"/><br/>
          <input type="text" placeholder="Number of Persons" className="inputList"/><br/>
          <button className="findToursbutton">Find Tours</button>
        </div>  
      </div>

      <div className="innerContainer">
          <div className="innerContent">
              <h2 style={{fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "xx-large"}}>MAKE YOUR TOUR MEMORABLE AND SAFE WITH US</h2>
              <p style={{fontSize: "x-large"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque omnis quod officia molestiae voluptate autem nemo eveniet veniam maiores at!</p>
          </div>
          <div className="innerContainerImage">
              <img src={img_2} alt="thumbnail" style={{width: "200px", height: "200px"}}/>
          </div>
      </div>

      <div className="footer">
            <h3 className="footerheading">THE BEST OF <br/> FEATURED TOURS</h3>
            <div className="img_container"> 
                  <div className="img_div"><img src={img_4} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_3} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_4} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_3} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_4} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_3} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_4} alt="images" className="footerImg"/></div>
                  <div className="img_div"><img src={img_3} alt="images" className="footerImg"/></div>
            </div>
            <div className="footerbtnOuter"><button className="footerButton">See all tours</button></div>
        </div>
    </div>
  );
}

export default App;
