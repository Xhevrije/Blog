<template>
<div class="container">
  <div class="wrapper">
    <!-- Linku per icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- ---- -->
    <div class="logo">
      <img
        src="https://image.shutterstock.com/image-vector/beauty-blog-hand-written-logo-260nw-1608340216.jpg"
        alt=""
      />
    </div>
    <div class="text-center mt-4 name">Login</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <form action="#" @submit.prevent="submit" class="p-3 mt-3">
      <div class="form-field d-flex align-items-center">
        <i class="fa fa-user"></i>
        <label
          for="text"
          name="userName"
          id="userName"
          class="col-form-label text-md-right"
          ><input
            id="email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
        /></label>
      </div>
      <div class="form-field d-flex align-items-center">
        <span class="fa fa-key"></span>
        <label
          for="password"
          name="password"
          id="pwd"
          class="col-form-label text-md-right"
        >
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
        /></label>
      </div>
      <div class="form-group row mb-0" style="width: 100%">
        <div class="col-md-8 offset-md-2">
          <button type="submit" class="btn px-5 text-right">Login</button>
        </div>
      </div>
      <p class="message mt-3">
        Not Registered?
        <router-link :to="'/auth/register'">Register Now</router-link>
      </p>
    </form>
  </div>
  </div>
</template>

<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          let user = this.$store.state.user;
          let role = "";
          if (!user.loggedIn) {
            role = "guest";
          }

          if (["admin@admin.com"].includes(this.form.email)) {
            role = "admin";
          } else {
            role = "user";
          }

          if (role == "admin") {
            this.$router.push({ name: "admin" });
          } else {
            this.$router.push({ name: "homeu" });
          }
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
.container{
  min-height: 100vh;
  margin-top: 149px;
}
</style>
