<template>
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
        <span class="fa fa-user"></span>
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

  <style lang="css" scoped>
.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 69px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.wrapper .form-field input {
  width: 92%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #7a7c7e;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.wrapper .btn:hover {
  background-color: #d989b6;
}

.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #686868;
}

.wrapper a:hover {
  color: #d989b6;
}
.message {
  font-size: 15px;
}
@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>