import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Engineering</a>
                    </li>
                    <li>
                      <a href="#">Accessibillity</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Privacy center</a>
                    </li>
                    <li>
                      <a href="#">Cookies</a>
                    </li>
                    <li>
                      <a href="#">Product Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Website Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Resources</h2>
                  <ul>
                    <li>
                      <a href="#">Big Ideas</a>
                    </li>
                    <li>
                      <a href="#">Resources</a>
                    </li>
                    <li>
                      <a href="#">Training</a>
                    </li>
                    <li>
                      <a href="#">Remote learning</a>
                    </li>
                    <li>
                      <a href="#">ClassDojo Plus</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/classdojo/?hl=en"
                        >
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 ClassDojo
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
