<template>
  <div>
    <!-- <ul>
      <li>
        <router-link class="" :to="'./'"> Home </router-link>
      </li>
      <li>
        <router-link class="" :to="'./about-us'"> About Us </router-link>
      </li>
    </ul> -->

    <header
      id="header"
      class="header fixed-top sticked"
      data-scrollto-offset="0"
    >
      <div
        class="
          container-fluid
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <a
          href="about-us.html"
          class="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          <img src="assets/img/Aarna_Hr_Logo.png" alt="Aarna HR" />
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <router-link class="nav-link scrollto" :to="'./about-us'">
                About Us
              </router-link>
            </li>
            <li>
              <router-link class="nav-link scrollto" :to="'./training'">
                Training
              </router-link>
            </li>
            <li>
              <router-link class="nav-link scrollto" :to="'./solutions'">
                Solutions
              </router-link>
            </li>
            <li>
              <router-link class="nav-link scrollto" :to="'./clientele'">
                Clientele
              </router-link>
            </li>
            <li>
              <router-link class="nav-link scrollto" :to="'./contact-us'">
                Contact
              </router-link>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
      </div>
    </header>
    <!-- End Header -->

    <main id="main">
      <slot />
    </main>

    <footer id="footer" class="footer">
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h4>AARNA HR SOLUTIONS PVT. LTD.</h4>
                <strong>Address:</strong>
                <p>
                  <span
                    >No 808,First floor, Vidyaranyashree Commercial
                    Center,</span
                  >
                  <span>Opp to Cafe Coffee Day,</span>
                  <span
                    >Vidyaranyapura Main Road Landmark: Above SBH BANK,</span
                  >
                  <span>Bangalore – 560 097</span>
                </p>

                <strong>Phone:</strong>
                <p>+91 7760792039 <br /></p>
                <p>+91 80 23643525 <br /></p>

                <strong>Email:</strong>
                <p>
                  <a href="mailto:career@aarnahr.com"> career@aarnahr.com </a
                  ><br />
                </p>
                <p>
                  <a href="mailto:amitha@aarnahr.com"> amitha@aarnahr.com </a
                  ><br />
                </p>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-legal text-center">
        <div
          class="
            container
            d-flex
            flex-column flex-lg-row
            justify-content-center justify-content-lg-between
            align-items-center
          "
        >
          <div
            class="d-flex flex-column align-items-center align-items-lg-start"
          >
            <div class="copyright">
              &copy; Copyright <strong><span>YT Solutions</span></strong
              >. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
              Designed by <a href="https://bootstrapmade.com/">YT Solutions</a>
            </div>
          </div>

          <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>

    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
};
</script>