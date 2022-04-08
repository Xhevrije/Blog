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
    <div class="text-center mt-4 name">Register</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <form action="#" @submit.prevent="submit" class="p-3 mt-3">
      <div class="form-field d-flex align-items-center">
        <label for="name" class="col-md-4 col-form-label text-md-left">Name:</label>
        <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
      </div>
      <div class="form-field d-flex align-items-center" >
                <label for="email" class="col-md-4 col-form-label text-md-left">Email:</label>

                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
              </div>
              <div class="form-field d-flex align-items-center">
                <label for="password" class="col-md-4 col-form-label text-md-left">Password:</label>

                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
              </div>
      <div class="form-group row" style="width: 100%;">
        <div class="col-md-8 offset-md-2">
          <button type="submit" class="btn px-5 text-left">Register</button>
        </div>
      </div>
      <p class="message mt-3">
        Already have an account?
        <router-link :to="'/auth/login'">Login</router-link>
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
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});

          this.$router.push({name: 'home'})
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
.container{
  min-height: 100vh;
  margin-top: 149px;
}

</style>