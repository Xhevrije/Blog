<template>

  <!-- Footer -->
  <div class=" text-center text-white mb-4" style="background-color:rgb(169 134 141)">
    <!-- Grid container -->
    <!-- Linku per icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="container p-4">
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0 pt-5">
            <img src="./img/logo.png" style="width:90px; height:80px; " />
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0 pt-4">

            <ul class="list-unstyled mb-0">
              <li>
                <a href="index" target="" class="text-white" title="">Home</a>
              </li>
              <li>
                <a href="reviews" target="" class="text-white" title="">Reviews</a>
              </li>
              <li>
                <a href="contact" target="" class="text-white" title="Contact Us"
                  >Contact</a
                >
              </li>
              <li>
                <a href="about" target="" class="text-white" title="About Us">About</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0 pt-4">

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://www.instagram.com"
                  >
                  <span class="fa fa-instagram "></span></a>
              </li>
              <li>
                <a href="https://www.facebook.com"
                  ><span class="fa fa-facebook "></span></a>
              </li>
              <li>
                <a href="https://github.com/Xhevrije/Blog"
                  ><span class="fa fa-github "></span></a>
              </li>
              <li>
                <a href="https://www.youtube.com"
                  ><span class="fa fa-youtube "></span></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div>
      <p>Copyright © {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
li {
  padding-bottom: 10px;
}
.fa{
  color: white;
 font-size: 20px;
}
.fa:hover{
  color: rgb(0, 0, 0);
}
</style>
