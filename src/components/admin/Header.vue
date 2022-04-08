<template>
<!-- + this.getCookie(this.cookieName)" -->
   <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    id="mainNav"
    style="background-color:rgb(169 134 141)"
    :style="'background-color: '+this.getCookie(this.cookieName)"
  >
            <div class="container">
 <a class="navbar-brand" href="#page-top">
        <img src="./img/logo.png"  style="width:90px; height:80px; " />
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
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">
              <a>Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/posts/addpost">
              <a>Add Post</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/testimonials">
              <a>Testimonials</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/messages">
              <a>Messages</a>
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
              <router-link class="nav-link" to="/admin/settings/">
                <span>Settings</span>
              </router-link>
            </li>
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
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="css" scoped>
.nav-link a {
  font-size: 20px;
  margin-right: 0 !important;
  padding: 0px 25px !important;
  text-decoration: none;
  color: black  !important;
}
.dropdown-toggle {
  color: rgb(0, 0, 0);
}
</style>
