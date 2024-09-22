import logo_white from './assets/Images/logo-white.png'
import s_1 from './assets/Images/s-1.png'
import s_2 from './assets/Images/s-2.png'
import s_3 from './assets/Images/s-3.png'
import project_card_img_1 from './assets/Images/project_card_img_1.jpg'
import project_card_img_2 from './assets/Images/project_card_img_2.jpg'
import project_card_img_3 from './assets/Images/project_card_img_3.jpg'
import project_card_img_4 from './assets/Images/project_card_img_4.jpg'
import project_card_img_5 from './assets/Images/project_card_img_5.jpg'
import project_card_img_6 from './assets/Images/project_card_img_6.jpg'
import about_img from './assets/Images/about_img.jpg'
import service_img_1 from './assets/Images/service_img_1.jpg'
import service_img_2 from './assets/Images/service_img_2.jpg'
import service_img_3 from './assets/Images/service_img_3.jpg'
import service_img_4 from './assets/Images/service_img_4.jpg'
import service_img_5 from './assets/Images/service_img_5.jpg'
import service_img_6 from './assets/Images/service_img_6.jpg'
import man from './assets/Images/man.png'
import client_image_1 from './assets/Images/client_image_1.png'
import client_image_2 from './assets/Images/client_image_2.png'
import client_image_3 from './assets/Images/client_image_3.png'
import expert_1 from './assets/Images/expert_1.jpg'
import expert_2 from './assets/Images/expert_2.jpg'
import expert_3 from './assets/Images/expert_3.jpg'
import expert_4 from './assets/Images/expert_4.jpg'
import News_1 from './assets/Images/News_1.jpg'
import News_2 from './assets/Images/News_2.jpg'
import News_3 from './assets/Images/News_3.jpg'
import footer_logo_1 from './assets/Images/footer_logo_1.png'
import footer_logo_2 from './assets/Images/footer_logo_2.png'
import footer_logo_3 from './assets/Images/footer_logo_3.png'
import footer_logo_4 from './assets/Images/footer_logo_4.png'
import footer_logo_5 from './assets/Images/footer_logo_5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import './Styles/Reset.css'
import './Styles/App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="nav_Container">
          <div className="nav_Top">
            <div className="phone">
              <span className="lnr lnr-phone-handset"></span>
              <p>Call : +00 (123) 2456 80</p>
            </div>
            <div className="icons">
              <p className="language">English</p>
            <KeyboardArrowDownIcon />
            <div className="icons_container">
              <FontAwesomeIcon icon={faFacebookF} className='icons_i' />
              <FontAwesomeIcon icon={faTwitter} className='icons_i' />
              <FontAwesomeIcon icon={faGooglePlusG} className='icons_i' />
              <FontAwesomeIcon icon={faInstagram} className='icons_i' />
            </div>
          </div>
        </div>
        <div className="border_line"></div>
        <div className="nav_below">
          <div>
            <img src={logo_white} alt="logo"/>
          </div>
          <div className="nav_list">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="nav_btn"><button>GET A QUOTE <FontAwesomeIcon icon={faArrowRight} id="arrow_icon" /></button></div>
        </div>
      </div>

      <div className="header_container">
        <h1 className="head">Best Business & Corporate HTML5 Template</h1>
        <p className="head_para">But I must explain to you how all this mistaken idea of denouncing plesure and praising pain was born and will give complete.</p>
        <button className="contact_btn">CONTACT US <FontAwesomeIcon icon={faArrowRight} /></button>
        <button className="learn_btn">LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
        <div className="dot_icons">
          <i className="fa-regular fa-circle" style={{color: "#dddddd"}}></i>
          <i className="fa-solid fa-circle fa-sm" id="circle"></i>
          <i className="fa-solid fa-circle fa-sm"></i>
        </div>
      </div>

      <div className="plan_container">
        <div className="plan_card">
          <img src={s_1} alt="image" className="plan_image"/>
            <p className="plan_head">Business Planning</p>
            <p className="plan_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born</p>
            <p className="card_footer">Read More <FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
        <div className="plan_card">
          <img src={s_2} alt="image" className="plan_image"/>
            <p className="plan_head">Financial Planning</p>
            <p className="plan_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born</p>
            <p className="card_footer">Read More <FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
        <div className="plan_card">
          <img src={s_3} alt="image" className="plan_image"/>
            <p className="plan_head">Market Analysis</p>
            <p className="plan_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born</p>
            <p className="card_footer">Read More <FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
      </div>

      <div className="plan_footer">
        <div>Needs experience business consultant?</div>
        <button className="plan_btn">CONTACT US <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>

      <div className="project_container">
        <div className="project_head">Recent Project</div>
        <div className="project_list_div">
          <ul className="project_list">
            <li className="all">ALL</li>
            <li className="list">BUSINESS</li>
            <li className="list">FINANCE</li>
            <li className="list">IDEA</li>
            <li className="list">MARKETING</li>
          </ul>
        </div>
        <div className="project_felx_container">
          <div className="project_card">
            <img src={project_card_img_1} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Business Plan Services <br/> <span className="overlay_subhead">Business, Finance, Idea</span></p>
              </div>
          </div>
          <div className="project_card">
            <img src={project_card_img_2} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Finance Planing <br/> <span className="overlay_subhead">Business, Finance</span></p>
              </div>
          </div>
          <div className="project_card">
            <img src={project_card_img_3} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Awesome Idea Building <br/> <span className="overlay_subhead">Business, Idea</span></p>
              </div>
          </div>
          <div className="project_card">
            <img src={project_card_img_4} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Corporate Plan Services <br/> <span className="overlay_subhead">Finance, Marketing</span></p>
              </div>
          </div>
          <div className="project_card">
            <img src={project_card_img_5} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Financial Planing <br/> <span className="overlay_subhead">Business, Finance</span></p>
              </div>
          </div>
          <div className="project_card">
            <img src={project_card_img_6} alt="image" className="project_image"/>
              <div className="overlay">
                <p className="overlay_head">Marketing for Business <br/> <span className="overlay_subhead">Business, Idea, Marketing</span></p>
              </div>
          </div>
        </div>
      </div>

      <div className="about_container">
        <div className="about_image_box">
          <img src={about_img} alt="Image" className="about_image"/>
        </div>
        <div className="about_content">
          <h4 className="about_head">About Company</h4>
          <p className="about_descp">All you need is Kormo, a modern & simple template for your business.</p>
          <p className="about_para">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of tgreat explorer of the truth, the master-builder of human happness. one rejects, dislikes or avoids pleasure itself because it is plesuress because those.</p>
          <button className="about_btn">READ MORE <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>

      <div className="services_container">
        <div className="service_head">Our Services</div>
        <div className="service_flex_container">
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_1} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Market Strategy</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_2} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Creative Thinking</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_3} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Banking Consulting</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_4} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Market Analysis</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_5} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Financial Planning</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
          <div className="service_card">
            <div className="imageDiv">
              <div><img src={service_img_6} alt="Image" className="service_image"/></div>
              <div className="overlay_style"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></div>
            </div>
            <h5 className="service_card_head">Business Planning</h5>
            <p className="service_card_para">Must explain to you how all this mista ke idea of denouncing pleasure and praising pain was born better</p>
            <p className="service_card_footer">READ MORE <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
      </div>

      <div className="count_background">
        <div className="count_container">
          <div className="contact_content">
            <Person2OutlinedIcon id="profile" />            
            <p className="count">4563</p>
            <p className="title">Happy Customers</p>
          </div>
          <div className="contact_content">
            <LayersOutlinedIcon id="profile" />              
            <p className="count">3654</p>
            <p className="title">Project complete</p>
          </div>
          <div className="contact_content">
            <ShoppingCartCheckoutOutlinedIcon id="profile" />            
            <p className="count">2756</p>
            <p className="title">Coffee Cups</p>
          </div>
          <div className="contact_content">
            <EmojiEventsOutlinedIcon id="profile" />            
            <p className="count">919</p>
            <p className="title">Award won</p>
          </div>
        </div>
      </div>

      <div className="contact_container">
        <div className="contact_box">
          <h2 className="contact_head">Start up your New Career Ventures With Kormo.</h2>
          <p className="contact_para">Quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat must be point.</p>
          <div className="contact_list">
            <ul>
              <li><span className="lnr lnr-thumbs-up"></span> Audit & Assurance</li>
              <li><span className="lnr lnr-thumbs-up"></span> Best Advisors</li>
              <li><span className="lnr lnr-thumbs-up"></span> 24/7 Supports</li>
            </ul>
            <ul className="thumbs_list">
              <li><span className="lnr lnr-thumbs-up"></span> Dedicated Team</li>
              <li><span className="lnr lnr-thumbs-up"></span> Network Solutions</li>
              <li><span className="lnr lnr-thumbs-up"></span> Work Deadline</li>
            </ul>
          </div>
          <button className="contact_footer_btn">CONTACT US <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className="image_container">
          <img src={man} alt="Image"/>
        </div>
      </div>

      <div className="client_container">
        <div className="client_title">What Clients Say</div>
        <div className="client_flex_conatiner">
          <div className="client_box" id="client_box_start">
            <img src={client_image_1} alt="profile_Picture"/>
              <p className="client_name">Fletch Skinner</p>
              <p className="client_position">CEO</p>
              <p className="client_descp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique vitae, molestias deleniti</p>
          </div>
          <div className="client_box">
            <img src={client_image_2} alt="profile_Picture"/>
              <p className="client_name">Nathaneal Down</p>
              <p className="client_position">HD Manager</p>
              <p className="client_descp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique vitae, molestias deleniti</p>
          </div>
          <div className="client_box" id="client_box_end">
            <img src={client_image_3} alt="profile_Picture"/>
              <p className="client_name">Fletch Skinner</p>
              <p className="client_position">CEO</p>
              <p className="client_descp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique vitae, molestias deleniti</p>
          </div>
        </div>
        <div className="client_dot_icons">
          <i className="fa-solid fa-circle fa-xs" id="circle"></i>
          <i className="fa-regular fa-circle fa-xs" style={{color: "#9c9c9c"}} id="circle"></i>
          <i className="fa-regular fa-circle fa-xs" style={{color: "#9c9c9c"}} id="circle"></i>
          <i className="fa-regular fa-circle fa-xs" style={{color: "#9c9c9c"}} id="circle"></i>
          <i className="fa-regular fa-circle fa-xs" style={{color: "#9c9c9c"}} id="circle"></i>
        </div>
      </div>

      <div className="expert_container">
        <div className="expert_head">Our Expert Advisor</div>
        <div className="expert_flex_container">
          <div className="expert_card">
            <img src={expert_1} alt="Image" className="expert_image"/>
              <div className="expert_overlay">
                <div className="overal_content">
                  <p className="expert_name">James Bond</p>
                  <p className="expert_desg">Web Developer</p>
                  <div className="expert_icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
          </div>
          <div className="expert_card">
            <img src={expert_2} alt="Image" className="expert_image"/>
              <div className="expert_overlay">
                <div className="overal_content">
                  <p className="expert_name">Luus Khane</p>
                  <p className="expert_desg">Design Head</p>
                  <div className="expert_icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
          </div>
          <div className="expert_card">
            <img src={expert_3} alt="Image" className="expert_image"/>
              <div className="expert_overlay">
                <div className="overal_content">
                  <p className="expert_name">Fara Chowla</p>
                  <p className="expert_desg">Idea Generator</p>
                  <div className="expert_icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
          </div>
          <div className="expert_card">
            <img src={expert_4} alt="Image" className="expert_image"/>
              <div className="expert_overlay">
                <div className="overal_content">
                  <p className="expert_name">Jarin Kan</p>
                  <p className="expert_desg">Marketing Officer</p>
                  <div className="expert_icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="news_container">
        <div className="expert_head">Latest News</div>
        <div className="news_flex_container">
          <div className="news_card">
            <div className="news_imageDiv"><img src={News_1} alt="Image" className="news_image"/></div>
            <p className="news_date">OCT 25, 2018</p>
            <p className="news_title">Security takes center stage at Google’s hardware event</p>
            <p className="news_para">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will</p>
            <p className="news_btn">READ MORE</p>
          </div>
          <div className="news_card">
            <div className="news_imageDiv"><img src={News_2} alt="Image" className="news_image"/></div>
            <p className="news_date">OCT 25, 2018</p>
            <p className="news_title">Better of the ambulatory sur ery centers acuitys</p>
            <p className="news_para">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will</p>
            <p className="news_btn">READ MORE</p>
          </div>
          <div className="news_card">
            <div className="news_imageDiv"><img src={News_3} alt="Image" className="news_image"/></div>
            <p className="news_date">OCT 25, 2018</p>
            <p className="news_title">Security takes center stage at Google’s hardware event</p>
            <p className="news_para">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will</p>
            <p className="news_btn">READ MORE</p>
          </div>
        </div>
      </div>

      <div className="logo_container">
        <img src={footer_logo_1} alt="logo"/>
        <img src={footer_logo_2} alt="logo"/>
        <img src={footer_logo_3} alt="logo"/>
        <img src={footer_logo_4} alt="logo"/>
        <img src={footer_logo_5} alt="logo"/>
      </div>

      <div className="footer_container">
        <div className="footer_about">
          <p className="about_footer_title">About Us</p>
          <p className="about_footer_para">Quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
          <input type="text" placeholder="Your email address" className="about_footer_input"/>
            <button className="about_footer_btn"><i className="fa-solid fa-rocket" style={{color: "#ffffff"}}></i></button>
            <div className="footer_about_icons_container">
              <i className="fa-brands fa-facebook-f" id="facebook"></i>
              <i className="fa-brands fa-twitter" id="twitter"></i>
              <i className="fa-brands fa-google-plus-g" id="google"></i>
              <i className="fa-brands fa-instagram" id="insta"></i>
            </div>
        </div>
        <div className="footer_links">
          <p className="link_footer_title">Useful Link</p>
          <p className="link_footer_points"><i className="fa-solid fa-caret-right"></i> Business Plan Services</p>
          <p className="link_footer_points"><i className="fa-solid fa-caret-right"></i> Awesome Idea Building</p>
          <p className="link_footer_points"><i className="fa-solid fa-caret-right"></i> Financial Planing</p>
          <p className="link_footer_points"><i className="fa-solid fa-caret-right"></i> Marketing for Business</p>
          <p className="link_footer_points"><i className="fa-solid fa-caret-right"></i> Contact Us</p>
        </div>
        <div className="footer_post">
          <p className="post_footer_title">Recent Post</p>
          <p className="post_footer_para">Security takes center stage at Google’s hardware event</p>
          <p className="post_footer_date">November 20, 2018</p>
          <p className="post_footer_para">Better of the ambulatory sur ery centers acuitys</p>
          <p className="post_footer_date">November 20, 2018</p>
        </div>
        <div className="footer_contact">
          <p className="contact_footer_title">Contact Us</p>
          <p className="contact_footer_descrp">150 Bay Street,New York, NY 7302</p>
          <p className="contact_footer_descrp">1 (800) 686-6688</p>
          <p className="contact_footer_descrp">admin@kormo.com</p>
          <p className="contact_footer_descrp">NewYork City, US</p>
          <p className="contact_footer_descrp">Open hours: 8.00-18.00 Mon-Fri</p>
        </div>
      </div>

      <div className="copyright_container">
        <p>Copyright ©2023 Kormo All Rights Reserved</p>
        <p className="contat_footer_btn">Contact Us</p>
      </div>
    </div>
  </>
);
}

export default App
