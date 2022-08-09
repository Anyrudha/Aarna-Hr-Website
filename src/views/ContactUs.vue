<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2>Contact Us</h2>
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.7968527659174!2d77.5576798883237!3d13.075415142812707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22a10a8f9037%3A0xdc5ac5d3d8855b1e!2sAARNA+HR+SOLUTIONS+PVT+LTD!5e0!3m2!1sen!2sin!4v1492072249493"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
      <!-- <iframe src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&amp;paint_origin=&amp;libraries=geometry,search&amp;v=3.exp&amp;language=en_US&amp;region=in&amp;callback=onApiLoad" frameborder="0" allowfullscreen></iframe> -->
    </div>
    <!-- End Google Maps -->

    <div class="container">
      <div class="row gy-5 gx-lg-5">
        <div class="col-lg-4">
          <div class="info">
            <h3>Get in touch</h3>

            <div class="info-item d-flex">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p>
                  <span> AARNA HR SOLUTIONS PVT. LTD., </span>
                </p>
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
              </div>
            </div>
            <!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>
                  <a href="mailto:career@aarnahr.com"> career@aarnahr.com</a>
                </p>
                <p>
                  <a href="mailto:amitha@aarnahr.com"> amitha@aarnahr.com</a>
                </p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p>+91 7760792039</p>
                <p>80 23643525</p>
              </div>
            </div>
            <!-- End Info Item -->
          </div>
        </div>

        <div class="col-lg-8">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form"
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  name: "ContactUs",
  props: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

