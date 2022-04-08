<template>
  <section class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="section-title">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <form  @submit="onSubmit" class="mb-4 mb-lg-0">
            <div class="form-row">
              <div class="col-md-12 form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  v-model="contacts.name"
                />
              </div>
              <div class="col-md-12 form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  v-model="contacts.email"
                />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Enter your comments about site"
                  v-model="contacts.description"
                ></textarea>
              </div>
            </div>
            <input type="submit" class="btn btn-light" value="Send" />
          </form>
        </div>
        <div class="col-lg-5">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.4081947757478!2d21.153203574245076!3d42.647180668500276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa31dd05b21bd09de!2sUniversiteti%20p%C3%ABr%20Biznes%20dhe%20Teknologji!5e0!3m2!1sen!2s!4v1579859245620!5m2!1sen!2s"
              width="100%"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "CreateContacts",
  data() {
    return {
      contacts: {},
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(`http://localhost:4000/contacts`, this.contacts)
        .then((response) => {
          //console.log(response);
          this.$router.push({
            name: "user",
            //params: { id: response.data._id }
          });
        });
    },
  },
};
</script>
<style scoped>
.container {
  height: 90vh;
}
.contact-us {
  margin-top: 105px;
  padding: 100px 0px;
  background: #bdb6b6;
}
.section-title h2 {
  color: #ffffff;
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 8px;
  border-bottom: 5px solid #a9868d;
  padding-bottom: 10px;
  display: inline-block;
}
.section-title p {
  color: #e8e8e8;
  margin-bottom: 30px;
}
.contact-us input,
.contact-us textarea {
  background: #fafafa;
}
.contact-us textarea {
  min-height: 188px;
  max-width: 100%;
}
.contact-us .map {
  overflow: hidden;
  border-radius: 4px;
}
.btn {
  background-color: #a9868d !important;
  padding: 8px 25px 8px 25px;
  border-radius: 50px;
}
.btn:hover {
  background-color: #818080 !important;
  color: #fafafa;
}
</style>
