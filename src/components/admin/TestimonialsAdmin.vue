<template>
  <div class="container my-5 justify-content-center">
    <div class=" row justify-content-center ">
      <div
        class="col-lg-6 col-12 mt-5 "
        v-for="testimonials in reversedItems" :key="testimonials.name"
      >
        <div class="card mt-3 ">
          <div class="layer"></div>
          <div class="content">
            <div class="card-header text-center border-0">
              <div class="row justify-content-center my-4">
                <div class="col">
                  <div
                    class="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center"
                  >
                    <div class="col-3 text-right">
                      <img
                        class="img-fluid"
                        id="quotes"
                        src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
                        width="110"
                        height="110"
                      />
                    </div>
                    <div class="col pr-lg-5">
                      <img
                        class=" img-1 mr-lg-5 "
                        src="https://thumbs.dreamstime.com/b/think-positive-neon-lettering-brick-wall-background-166165484.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body text-center pb-3 ">
              <div class="row justify-content-center">
                <div class="col text-center justify-content-center ">
                  <p class="bold text-center px-md-3">
                    {{ testimonials.name }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="mt-auto mb-4" />
            <div class="card-footer text-center border-0 mt-0 pt-0 mb-3">
              <div class="row text-center name mt-auto ">
                <div class="col">
                  <!-- <h4 class="mb-0 Elizabeth">Us</h4> -->
                  <h4 class="mt-0 text-white">User</h4>
                  <a
                    id="remove"
                    href=""
                    class="btn btn-dark"
                    @click="deleteTest(testimonials._id)"
                    >Remove</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  computed:{
        reversedItems(){
            return this.testimonials.slice(0).reverse();
        }
    },

  methods: {
    fetchTest() {
      this.axios.get("/Testimonials/").then((response) => {
        this.testimonials = response.data;
      });
    },

    deleteTest(id) {
      if (confirm("Are you sure you want to delete this Testimonials?")) {
        this.axios.delete("/Testimonials/" + id).then((response) => {
          console.log(response);
          window.location.reload();
        });
      }
    },
  },

  mounted() {
    this.fetchTest();
  },
};
</script>

<style lang="css" scoped>
.container-fluid {
  margin-top: 200px !important;
}
.container {
  padding-bottom: 2.5rem;
  min-height: 100vh;
}

p {
  font-size: 20px;
  line-height: 33px !important;
  color: #fff;
}

.small {
  letter-spacing: 0.5px !important;
}

.card {
  box-shadow: 0px 5px 16px rgba(223, 241, 223, 0.5);
  transition: 0.8s;
  background: #333;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 7px !important;
}

.card-header,
.card-footer {
  border-radius: 7px !important;
}

.card:after {
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  z-index: 9999;
  height: 100%;
  pointer-events: none;
}

.card-title img {
  z-index: 99999 !important;
}

.card .layer {
  position: absolute;
  top: calc(100% - 5px);
  width: 100%;
  height: 100%;
  background: linear-gradient(#03a9f4, #e91ee3);
  left: 0;
  z-index: 1;
  transition: 0.5s;
}

.card:hover {
  box-shadow: -5px 50px 100px rgba(223, 241, 223, 0.5);
}

.card:hover hr {
  background-color: #fff;
}

.card:hover h4 {
  font-weight: 600;
}

.card:hover p {
  font-weight: 600;
}

.card:hover small {
  font-weight: 600;
}

.card:hover .layer {
  top: 0;
}

.card .content {
  position: relative;
  z-index: 2;
}

.card .content .img-1 {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white !important;
}

.card h4 {
  color: #fff;
  font-weight: 500;
}

hr {
  background-color: rgb(117, 117, 117);
  width: 80% !important;
  transition: 1s;
}

.bold {
  font-weight: 500;
}

#quotes {
  opacity: 0.1;
  filter: alpha(opacity=40);
}

@media (max-width: 479px) {
  p {
    padding: 0 !important;
  }

  .img-1 {
    margin-right: 0 !important;
  }
}
</style>
