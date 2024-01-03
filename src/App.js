import { FaAngleDown,FaYoutube,FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { GiStairsGoal } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

import logo from './images/asset 0.svg';
import slider from './images/asset 1.png';
import post from './images/asset 2.jpeg';
import asset3 from './images/asset 3.jpeg';
import asset1 from './images/asset 6.jpeg';
import asset2 from './images/asset 5.jpeg';
import asset4 from './images/asset 4.jpeg';
import asset7 from './images/asset 7.png';
import asset8 from './images/asset 8.png';
import asset9 from './images/asset 9.png';
import asset10 from './images/asset 10.png';
import asset11 from './images/asset 11.png';
import asset12 from './images/asset 12.png';
import './App.css';

function App() {
  return (
    <div className="Main">
      {/* ----Header start start */}
      <div className="Header">
        <div className="flex">
          <div className="left">
            <img src={logo}></img>
          </div>
          <div className="right d-flex">
            <ul className="flex">
              <li>About me <p></p></li>
              <li>Coaching <p></p></li>
              <li>Client stories<p></p></li>
              <li>Prices<p></p></li>
              <li>Blog<i><FaAngleDown /></i><p></p></li>
              <li>Pages<i><FaAngleDown /></i><p></p></li>
            </ul>
            <div className="circle">
              <li className="cnt">Contact me <i><BiMessageRounded /></i></li>
           </div>
          </div>
        </div>
      </div>
      {/* ----Header start end------ */}
 
      {/* ---------slider start--------- */}
      <section className="slider">
       <div className="container">
        <div className="flex">
            <div className="content">
              <h1>Transform your business. Take back your life.</h1>
              <p>Get the most out of your business with my coaching services.</p>
              <div className="s-flex">
                <p className="more">More about me</p>
                <p className="free">Free consulatation</p>
              </div>
            </div>
            <img src={slider}></img>
          </div>
       </div>
      </section>
      {/* ---------slider end--------- */}
      
      {/* ---------------section1 start ------------- */}
        <section className="section_1"> 
          <div className="container">
            <div className="content">
              <p className="title">I help people tackle their business issues</p>
              <p className="sub_title">It’s easy to get the results you want with the top-quality advice.</p>
            </div>
            <div className="grid">
              <div className="content_box">
                <i><GiStairsGoal /></i>
                <p>Career mentoring</p>
                <span>Accelerate your career and achieve your goals through mentoring at Lead Planner.</span>
              </div>
              <div className="content_box" style={{backgroundColor:"#E5E6E1"}}>
                <i><GrUserWorker /></i>
                <p>Work & life balance</p>
                <span>Gain more balance between work and life and make a positive change today.</span>
              </div>
              <div className="content_box" style={{backgroundColor:"#B0BBBA"}}>
                <i><TbTargetArrow /></i>
                <p>Important decisions</p>
                <span>Decide what to do next with your work to achieve success with your business.</span>
              </div>  
            </div>
          </div>
        </section>
      {/*-------------- -section1 end  ---------------- */}

      {/*--------------- more about me start ----------------*/}
      <section className="more_about">
        <div className="container">
          <div className="flex">
            <div className="content">
              <h1>Helping millions of owners create a business that works.</h1>
              <p>My name is John Adams and I am a business coach and trainer. I work with you to increase your awareness and choices, so you can set meaningful goals and get the results you truly want. I will challenge you to learn and think differently.</p>
              <div className="flex">
                <div className="pr">
                  <h1>82%</h1>
                  <span>Percentage of regular and returning customers</span>
                </div>
                <div className="pr">
                  <h1>100+</h1>
                  <span>Positive reviews and testimonials submitted by my clients</span>
                </div>
              </div>
              <p className="btn">More about me</p>
            </div>
            <div>
              <img src={post} style={{height:"613px"}}></img>
            </div>
          </div>
        </div>
      </section>
      {/*--------------- more about me end ----------------*/}

      {/* ---------------business step start -------------------*/}
      <section className="business">
        <div className="container">
            <div className="free_consult flex">
              <div className="content">
                <h1>I am here for you and your business — every step of the way.</h1>
                <p>Here’s how I can help you improve various aspects of your business through coaching.</p>
              </div>
              <div className="consulting">
                <p className="btn">Free consulting</p>
              </div>
          </div>
          <div className="grid">
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Marketing</h2>
                  <p>Understand how marketing concepts work and approach your marketing tasks efficiently.</p>
                </div>
              </div>
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Management</h2>
                  <p>Learn how to deal with managerial tasks to achieve the set goals for your business..</p>
                </div>
              </div>
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Leadership</h2>
                  <p>Establish powerful leadership in your company’s team through coaching.</p>
                </div>
              </div>
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Finance</h2>
                  <p>Handle your financial challenges easily with professional coaching by Lead Planner.</p>
                </div>
              </div>
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Lead generation</h2>
                  <p>Increase the consumer interest and discover how to successfully generate leads.</p>
                </div>
              </div>
              <div className="s-flex">
                <i><FaArrowRight /></i>
                <div className="grid_content">
                  <h2 style={{fontWeight:'500'}}>Lead conversion</h2>
                  <p>Turn a potential customer into a real and regular one in just a few simple steps.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* ---------------business step end -------------------*/}

      {/*--------------- working together start --------------*/}
      <section className="working">
        <div className="container">
          <div className="flex">
            <div className="content cnt_w">
              <h1>Working together for your better life!</h1>
              <p>At Lead Planner, I strive to help you achieve ambitious goals and reach new heights just by focusing on what’s important for you.</p> 
            </div>
            <div className="ctn cnt_w">
              <p className="small">An experienced business coach can easily help you get more from your business by setting clear goals and planning your actions on the way to success.</p>
              <p className="small_up">As a professional and highly experienced business coach, I will be glad to guide you towards new goals for both you and your team. By ensuring the geometric growth of your business, you can push your company to the limit in order to get what you want.</p> 
              <div className="s-flex">
                <img src={asset3}></img>
                <div className="right_ctn">
                  <h1>John Adams</h1>
                  <p className="sub">Business coach, founder of Lead Planner</p>
                </div>
            </div>
            <p className="btn">More about me</p>
            </div>
          </div>
        </div>
      </section>
      {/*--------------- working together end ----------------*/}

      {/*-------------- testimonial start------------------- */}
      <section className="testimonial">
        <div className="container">
           <div className="up_info">
              <h1>Kind words from my happy clients</h1>
              <p>My clients appreciate the provided guidance and assistance I offer along the way to
                 help them become stronger leaders and unlock the full potential of their businesses.
                  Read their latest testimonials below.
              </p>
           </div>
           <div className="down_info grid">
              <div className="grid_box">
                <p>"Working with Mr. Adams has enabled me to shape and implement a 
                  set of personal objectives that have materially improved my performance as a leader."
                </p>
                <span></span>
                <div className="grid_info s-flex">
                  <img src={asset1}></img>
                  <div>
                    <cite>Andrew Jackson</cite>
                    <p class="small">28.10.2023</p> 
                  </div>
                </div>
              </div>
              <div className="grid_box">
                <p>"The coaching has been really rewarding. I have learned how to communicate clearly with my team and to reflect on my leadership skills."</p>
                <span></span>
                <div className="grid_info s-flex">
                  <img src={asset2}></img>
                  <div>
                    <cite>Courtney Johnson</cite>
                    <p class="small">28.10.2023</p> 
                  </div>
                </div>
              </div>
              <div className="grid_box">
                <p>"WI have worked with John for almost a year, and during this time I’ve learned how to be realistic about my work."</p>
                <span></span>
                <div className="grid_info s-flex">
                  <img src={asset4}></img>
                  <div>
                    <cite>Jenny Wilson</cite>
                    <p class="small">28.10.2023</p> 
                  </div>
                </div>
              </div> 
           </div>
           <div className="dot d-flex">
              <span></span>
              <span style={{outline:"none",backgroundColor:"#E5E6E1"}}></span>
           </div>
           <hr></hr>
        </div>
      </section>
      {/*-------------- testimonial end------------------- */}

      {/*------------- company start -----------------------*/}
      <section className="logo">
        <div className="container">
          <div className="top">
            <h1>I help millions of owners create a business that works flawlessly</h1>
          </div>
          <div className="grid">
            <img src={asset7}></img>
            <img src={asset8}></img>
            <img src={asset9}></img>
            <img src={asset10}></img>
            <img src={asset11}></img>
            <img src={asset12}></img>
          </div>
        </div>
      </section>
      {/*------------- company end -----------------------*/}

      {/*------------- footer start ---------------------*/}
      <section className="footer">
        <div className="container">
          <div className="grid">
            <div className="left">
              <p>3828 Fincham Road<br></br>Los Angeles, CA<br></br>California 90017</p>
              <p className="h4">P: +1 (256) 1087 000</p>
              <a>mail@demolink.org</a>
              <ul className="s-flex">
                <li style={{marginLeft:"0px"}}><FaYoutube />
                <p></p></li>
                <li><FaInstagram />
                <p></p></li>
                <li><FaFacebookF />
                <p></p></li>
                <li><FaTwitter />
                <p></p></li>
                <li><FaLinkedinIn />
                <p></p></li>
              </ul>
              <a>Lead Planner © 2023. All rights reserved.</a>
            </div>
            <div className="center">
              <ul>
                <li>About me</li>
                <li>Coaching</li>
                <li>Client stories</li>
                <li>Prices</li>
                <li>Blog</li>
              </ul>
              <div className="cir">
                <li className="cnt">Contact me <i><BiMessageRounded /></i></li>
              </div>
              <div className="flex">
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
              </div>
            </div>
            <div className="right">
              <h1>Stay in touch! Get latest updates and offers</h1>
              <div className="flex">
                <p>Enter your email</p>
                <span>Subscribe</span>
              </div>
              <a>By clicking the button you agree to the Privacy Policy and Terms and Conditions</a>
            </div>
          </div>
        </div>
      </section>
      {/*------------- footer end ---------------------*/}


    </div>
  );
}

export default App;
