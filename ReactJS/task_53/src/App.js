import img_2 from './assets/img_2.jpg';
import img_1 from './assets/img_1.png';
import img_4 from './assets/img_4.png';
import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="header">
        <ul>
            <li><a href=""><h2 className="name">MAYABI</h2></a></li>
            <li><a href="" className="navList" style={{marginLeft: "120px"}}>HOME</a></li>
            <li><a href="" className="navList">ABOUT US</a></li>
            <li><a href="" className="navList">PORTFOLIO</a></li>
            <li><a href="" className="navList">BLOG</a></li>
            <li><a href="" className="navList">SHOP</a></li>
            <li><a href="" className="navList">CONTACT US</a></li>
        </ul>
      </div>

      <div className="bannerContainer">
        <div className="bannerContent">
            <h1 style={{fontSize: "50px"}}>MAYABI <br/> PORTFOLIO MULIT PURPOSE THEME</h1>
            <p style={{marginTop: "90px", fontSize: "larger"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur velit, officia placeat quaerat totam em <br/> ratione nihil reprehenderit distinctio nemo</p>
            <div className="bannerFooter">
                <button className="bannerButtons">Download</button>
                <button className="bannerButtons">Load More</button>
            </div>
        </div>
      </div>

      <div className="bodyOneContent">
        <div className="contentOneImg"> 
            <img src={img_2} alt="img_2" width="340px" height="320px"/>
            <img src={img_1} alt="img_1" width="340px" height="320px" style={{float: "left"}}/>
        </div>
        <div className="ContentOne">
            <p style={{fontSize: "x-large", color: "grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natus quisquam illo saepe, soluta quasi ipsa modi nobis? Magni, enim?</p>
            <button className="viewMoreBtn">View More</button>
        </div>
      </div>

      <div className="tableOneHeader">
        <h2 className="tableHeading">PORTFOLIO</h2>
        <p style={{padding: "25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iure! <br/> Lorem ipsum dolor sit amet consectetur adipis</p>
        <ul style={{marginLeft: "560px"}}>
            <li className="tableHeadList">all</li>
            <li className="tableHeadList">Design</li>
            <li className="tableHeadList">Development</li>
            <li className="tableHeadList">Development</li>
            <li className="tableHeadList">Development</li>
            <li className="tableHeadList">Development</li>
        </ul>

        <div style={{marginLeft: "200px"}}>
          <div className="tableOne">
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
            <div className="portfolioImg"><img src={img_2} alt="image" width="200px" height="150px"/></div>
          </div>
        </div>
        <button className="viewMoreBtn" style={{marginTop: "0", height: "35px"}}>View All</button>      
      </div>

      <div className="tableOneHeader">
        <h2 className="tableHeading">SERVICE</h2>
        <p style={{padding: "25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iure! <br/> Lorem ipsum dolor sit amet consectetur adipis</p>
        <div className="serviceContainer">
          <div className="serviceContent">
            <img src={img_4} alt="img" width="200px" height="150px"/> 
            <h3 style={{padding: "15px"}}>Auroville</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
          <div className="serviceContent">
            <img src={img_2} alt="img" width="200px" height="150px"/> 
            <h3 style={{padding: "15px"}}>Beach</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
          <div className="serviceContent">
            <img src={img_1} alt="img" width="200px" height="150px"/> 
            <h3 style={{padding: "15px"}}>Gandhi</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
          <div className="serviceContent">
            <img src={img_4} alt="img" width="200px" height="150px"/>  
            <p style={{paddingTop: "30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
          <div className="serviceContent">
            <img src={img_2} alt="img" width="200px" height="150px"/>  
            <p style={{paddingTop: "30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
          <div className="serviceContent">
            <img src={img_1} alt="img" width="200px" height="150px"/> 
            <p style={{paddingTop: "30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure quasi nemo harum exercitationem, sed odit  nobis corporis consequatur delectus.</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h3 style={{padding: "10px"}}>Subscribe Newsletter</h3>
        <h4 style={{padding: "10px"}}>Enter Your email and we'll send you details about new courses and events</h4>
        <input type="email" placeholder="Email" className="emailInput"/>
        <button className="footerBtn">Sign up Now</button>
      </div>
    </div>
  );
}

export default App;
