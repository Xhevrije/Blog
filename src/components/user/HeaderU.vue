<template>
    <div>
        <nav
    class="navbar navbar-expand-lg navbar-dark"
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
                    <router-link class="nav-link" to="/user/umenu/home" >
                    <a>Home</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/products" >
                    <a>Products</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/testimonials" >
                    <a>Testimonials</a>
                    </router-link>
                </li>
                <router-link class="nav-link" to="/user/umenu/contactu" >
                    <a>Contact</a>
                    </router-link>
                <li class="nav-item" >
                   <router-link class="nav-link" to="/user/umenu/profil" >
                    <a>Profile</a>
                    </router-link>
                </li>

                </ul>
                <li
          class="nav-item dropdown "
          style="list-style-type: none; font-weight: bold;"
          v-if="this.$store.getters.user.loggedIn"
        >
          <a
            class="nav-link dropdown-toggle text-uppercase"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ this.$store.getters.user.data.displayName }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="nav-link cursor" @click="logout()">
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </li>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout');
            this.$router.push({name: 'home'})
        }
    }
}
</script>
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