<template>
    <div>
        <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    id="mainNav"
    style="background-color:rgb(169 134 141)"
  >
    <div class="container">
      <a class="navbar-brand" href="#page-top">
        <img src="./img/logo.png" style="width:90px; height:80px; " />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars "></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0 ">
                <li class="nav-item" >
                    <router-link class="nav-link " to="/guest/menu/home" >
                    <a class="">Home</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/reviews" >
                    <a>Reviews</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/contact" >
                    <a>Contact</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/about" >
                    <a>About</a>
                    </router-link>
                </li>

                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
.nav-link a {
  font-size: 20px;
  margin-right: 0 !important;
  padding: 0px 25px !important;
  text-decoration: none;
  color: rgb(0, 0, 0)  !important;

}
.dropdown-toggle {
  color: rgb(0, 0, 0);
}
</style>