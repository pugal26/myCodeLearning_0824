import logo from './assets/Images/logo.png'
import man from './assets/Images/man.png'
import portfolio_image_1 from './assets/Images/portfolio_image_1.jpg'
import portfolio_image_2 from './assets/Images/portfolio_image_2.jpg'
import portfolio_image_3 from './assets/Images/portfolio_image_3.jpg'
import portfolio_image_4 from './assets/Images/portfolio_image_4.jpg'
import portfolio_image_5 from './assets/Images/portfolio_image_5.jpg'
import portfolio_image_6 from './assets/Images/portfolio_image_6.jpg'
import testimonials from './assets/Images/testimonials.png'
import team_1 from './assets/Images/team-1.png'
import blog_image_1 from './assets/Images/blog_image_1.png'
import blog_image_2 from './assets/Images/blog_image_2.png'
import blog_image_3 from './assets/Images/blog_image_3.png'
import './styles/Reset.css'
import './styles/App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="nav_container">
          <div><img src={logo} alt="logo" className="nav_logo"/></div>
          <div>
            <ul className="nav_list">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Blog <span className="lnr lnr-chevron-down"></span></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="banner_container">
          <div className="banner_content">
            <p className="hello">HELLO I'M</p>
            <p className="banner_title">WEB DEVELOPER</p>
            <p className="banner_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> <br/>incididunt ut labore et dolore magna aliqua.</p>
            <button className="banner_btn">Download CV</button>
          </div>
        </div>

        <div className="about_container">
          <div><img src={man} alt="Image" className="about_image"/></div>
          <div className="about_content">
            <h4 className="about_head">About Me</h4>
            <p className="about_para_top">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
            <p className="about_para_bottom">magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
            <button className="download_btn">Download CV</button> <button className="portfolio_btn">Portfolio</button>
          </div>
        </div>

        <div className="service_container">
          <div className="service_head"><h4>Services</h4></div>
          <div className="service_flex_container">
            <div className="service_card">
              <i className="fa fa-cog" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Creative Design</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
            <div className="service_card">
              <i className="fa fa-crop" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Clean Code</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
            <div className="service_card">
              <i className="fa fa-cubes" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Responsive Design</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
            <div className="service_card">
              <i className="fa fa-pie-chart" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Bootstrap 4</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
            <div className="service_card">
              <i className="fa fa-code" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Font Icons</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
            <div className="service_card">
              <i className="fa fa-bar-chart" aria-hidden="true" id="service_icon"></i>
              <p className="card_title">Awesome Support</p>
              <p className="card_descp">Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
            </div>
          </div>
        </div>

        <div className="count_container">
          <div className="count_div">
            <i className="fa fa-skyatlas" aria-hidden="true" id="count_icon"></i>
            <p className="count">39</p>
            <p className="count_title">Happy Clients</p>
          </div>
          <div className="count_div">
            <i className="fa fa-heart-o" aria-hidden="true" id="count_icon"></i>
            <p className="count">102</p>
            <p className="count_title">Projects Compleated</p>
          </div>
          <div className="count_div">
            <i className="fa fa-globe" aria-hidden="true" id="count_icon"></i>
            <p className="count">47</p>
            <p className="count_title">Files Downloaded</p>
          </div>
          <div className="count_div">
            <i className="fa fa-user-o" aria-hidden="true" id="count_icon"></i>
            <p className="count">635</p>
            <p className="count_title">Liens Of Code</p>
          </div>
        </div>

        <div className="portfolio_container">
          <div className="portfolio_header">
            <h4 className="portfolio_title">Portfolio</h4>
            <ul className="portfolio_list">
              <li className="all_btn">All</li>
              <li className="portfolio_inner_style">Marketing</li>
              <li className="portfolio_inner_style">Design</li>
              <li className="portfolio_inner_style">Development</li>
            </ul>
          </div>
          <div className="portfolio_flex_container">
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_1} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_2} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_3} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_4} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_5} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
            <div className="portfolio_card">
              <div className="imgae_div"><img src={portfolio_image_6} alt="Image" className="portfolio_image"/></div>
              <div className="overlay">
                <p className="overlay_title">Brex Logo</p>
                <p className="overlay_subtitle">Brand</p>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials_container">
          <div className="testimonials_title">Testimonials</div>
          <img src={testimonials} alt="image"/>
            <p className="testimonials_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in</p>
            <div className="testimonials_arrow_icons">
              <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
              <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
            <div className="testimonials_imageDiv"><img src={team_1} alt="Image" className="testimonials_image"/></div>
            <p className="testimonials_name">Alamin Musa</p>
            <p className="testimonials_descp">Front End Developer</p>
            <div className="testimonials_footer">
              <div className="testimonials_footer_border" style={{border: "2px solid white"}}></div>
              <div className="testimonials_footer_border"></div>
              <div className="testimonials_footer_border"></div>
            </div>
        </div>

        <div className="blog_container">
          <div className="blog_head">Our Blog</div>
          <div className="blog_flex_container">
            <div className="blog_card">
              <div className="blog_imageDiv">
                <img src={blog_image_1} alt="Image" className="blog_image"/>
                  <div className="btn_div"><button className="blog_btn">Web</button></div>
              </div>
              <div className="blog_content">
                <p className="blog_title">Master These Awesome</p>
                <p className="blog_date">By Dorian Gray, Jun 27, 2018</p>
                <p className="blog_para">Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
            <div className="blog_card">
              <div className="blog_imageDiv">
                <img src={blog_image_2} alt="Image" className="blog_image"/>
                  <div className="btn_div"><button className="blog_btn">Web</button></div>
              </div>
              <div className="blog_content">
                <p className="blog_title">Best Design Items to Appeal</p>
                <p className="blog_date">By Dorian Gray, Jun 27, 2018</p>
                <p className="blog_para">Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
            <div className="blog_card">
              <div className="blog_imageDiv">
                <img src={blog_image_3} alt="Image" className="blog_image"/>
                  <div className="btn_div"><button className="blog_btn">Web</button></div>
              </div>
              <div className="blog_content">
                <p className="blog_title">The 20 Best Lightroom Presets</p>
                <p className="blog_date">By Dorian Gray, Jun 27, 2018</p>
                <p className="blog_para">Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_container">
          <div className="contact_head">Keep In Touch Blog</div>
            <div className="contact_flex_box">
              <div className="contact_inputs">
                <input type="text" placeholder="Name" className="contact_name"/>
                <input type="text" placeholder="Email" className="contact_email"/> <br/>
                <input type="text" placeholder="Subject" className="contact_sub"/> <br/>
                <textarea name="message" id="message" rows="5"  placeholder="Message"></textarea> <br/>
                <button className="contact_btn">Send Now!</button>
              </div>
              <div className="contact_locations">
                <div className="locations">
                  <i className="fa fa-map-marker fa-lg" aria-hidden="true" id="contact_icons"></i>
                  <p className="address">2651 Main Street, Suit 124 <br/> Seattle, WA, 98101</p>
                </div>
                <div>
                  <i className="fa fa-mobile fa-lg" aria-hidden="true" id="contact_icons"></i>
                  <p className="phone">0123456789 <br/> 0345627891</p>
                </div>
                <div>
                  <i className="fa fa-at fa-lg" aria-hidden="true" id="contact_icons"></i>
                  <p className="mail_id">hello@thetheme.io <br/> inf0@brex-theme.io</p>
                </div>
              </div>
            </div>
        </div>

        <div className="footer_container">
          <div className="footer_icons_div">
            <i className="fa fa-facebook" aria-hidden="true" id="footer_icons"></i>
            <i className="fa fa-twitter" aria-hidden="true" id="footer_icons"></i>
            <i className="fa fa-dribbble" aria-hidden="true" id="footer_icons"></i>
            <i className="fa fa-skype" aria-hidden="true" id="footer_icons"></i>
          </div>
          <div>All Right Resceved 2018</div>
        </div>
      </div>
    </>
);
}

export default App
