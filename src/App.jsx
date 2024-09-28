import "./App.css";
import "./index.css";
import {
  Arrow,
  Arrow2,
  CardImg1,
  CardImg2,
  CardImg3,
  ClubIcon,
  EventIcon,
  HeaderIcon,
  HeroIllu,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  InstagramIcon,
  LoginIllu1,
  LoginIllu2,
  MemberIcon,
  NatuonalIcon,
  PaymentIcon,
  SocialmediaIcon,
  TeslaImg,
  TwitterIcon,
  UserIcon,
  YoutubeIcon,
} from "./assets/imgs/index";

export default function App() {
  return (
    <body>
      <header>
        <div className="logo-wrapper">
          <img src={HeaderIcon} alt="header-icon" />
          <h1>Nexcent</h1>
        </div>
        <div className="nav-wrapper">
          <nav>
            <a href="#">Home</a>
            <a href="#">Servide</a>
            <a href="#">Feature</a>
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
          </nav>
          <div className="singup-wrapper">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="text-wrapper">
            <h1>
              Lessons and insights <span> from 8 years</span>
            </h1>

            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button>Register</button>
          </div>
          <img src={HeroIllu} alt="" />
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </section>
        <section className="clients">
          <div className="title-wrapper">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="carousel">
            <img src={Icon1} alt="" />
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            <img src={Icon4} alt="" />
            <img src={Icon5} alt="" />
            <img src={Icon6} alt="" />
            <img src={Icon7} alt="" />
          </div>
        </section>
        <section className="community">
          <div className="title-wrapper">
            <h1>Manage your entire community in a single system</h1>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className="frame-article">
            <article>
              <div className="member">
                <img src={MemberIcon} alt="" />
                <h1>Membership Organisations</h1>
              </div>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </article>

            <article>
              <div className="member">
                <img src={NatuonalIcon} alt="" />
                <h1>National Associations</h1>
              </div>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </article>

            <article>
              <div className="member">
                <img src={PaymentIcon} alt="" />
                <h1>Clubs And Groups</h1>
              </div>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </article>
          </div>
        </section>
        <section className="hero hero-two ">
          <img src={LoginIllu1} alt="" />
          <div className="text-wrapper text-wrapper-two">
            <h1>The unseen of spending three years at Pixelgrade</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button>Learn More</button>
          </div>
        </section>
        <div className="achievements">
          <div className="text-wrapper text-wrapper-two">
            <h1>
              Helping a local <br /> <span>business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="counts">
            <div className="status ">
              <img src={UserIcon} alt="" />
              <div className="text-status">
                <h4>2,245,341</h4>
                <p>Members</p>
              </div>
            </div>
            <div className="status ">
              <img src={ClubIcon} alt="" />
              <div className="text-status">
                <h4>46,328</h4>
                <p>Clubs</p>
              </div>
            </div>
            <div className="status ">
              <img src={EventIcon} alt="" />
              <div className="text-status">
                <h4>828,867</h4>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="status ">
              <img src={PaymentIcon} alt="" />
              <div className="text-status">
                <h4>1,926,436</h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
        <section className="hero hero-two ">
          <img src={LoginIllu2} alt="" />
          <div className="text-wrapper text-wrapper-two">
            <h1>How to design your site footer like we did</h1>

            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button>Learn More</button>
          </div>
        </section>
        <section className="customer">
          <img src={TeslaImg} alt="" />
          <div className="costumer-text">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="comment">
              <h6>Tim Smith</h6>
              <p>British Dragon Boat Racing Association</p>
            </div>
            <div className="branches">
              <img src={Icon1} alt="" />
              <img src={Icon2} alt="" />
              <img src={Icon3} alt="" />
              <img src={Icon4} alt="" />
              <img src={Icon5} alt="" />
              <img src={Icon6} alt="" />
              <div className="meet-customers">
                <p>Meet all customers</p>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="cards-section">
          <div className="section-text">
            <h1>Caring is the new marketing</h1>
            <p>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src={CardImg1} alt="" />
              <div className="card-text">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <div className="read">
                  <a href="">Readmore</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <img src={CardImg2} alt="" />
              <div className="card-text">
                <p>
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <div className="read">
                  <a href="">Readmore</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <img src={CardImg3} alt="" />
              <div className="card-text">
                <p>Revamping the Membership Model with Triathlon Australia</p>
                <div className="read">
                  <a href="">Readmore</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-footer">
          <h3>Pellentesque suscipit fringilla libero eu.</h3>
          <button>
            Get a Demo <img src={Arrow2} alt="" />
          </button>
          <footer>
            <div className="business">
              <div className="logo-footer">
                <img src={HeaderIcon} alt="" />
                <h1>Nexcent</h1>
              </div>
              <p>
                Copyright © 2020 Nexcent ltd. <br /> All rights reserved
              </p>
              <div className="contacts">
                <img src={InstagramIcon} alt="" />
                <img src={SocialmediaIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={YoutubeIcon} alt="" />
              </div>
            </div>

            <div className="contact-wrapper">
              <div className="contact-me">
                <h6>Company</h6>
                <a href="#">About us</a>
                <a href="#">Blog</a>
                <a href="#">Contact us</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
              </div>
              <div className="contact-me">
                <h6>Suport</h6>
                <a href="#">Help center</a>
                <a href="#">Terms of service</a>
                <a href="#">Legal</a>
                <a href="#">Privacy policy</a>
                <a href="#">Status</a>
              </div>
              <div className="contact-me contact-me-2">
                <h6>Stay up to date</h6>
                <input type="text" placeholder="Your email address" />
              </div>
            </div>
          </footer>
        </section>
      </main>
    </body>
  );
}
