<template>
  <div class="container mt-5">
    <div class="row">
      <div
        class="col-md-6 offset-md-3 border p-4 shadow bg-light"
        id="Add-post"
      >
        <div class="col-12 form-action">
          <h3 class="fw-normal text-dark fs-4 text-uppercase mb-4">
            Edit post
          </h3>
        </div>
        <form action="">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="">TITLE: </label> <br />
              <input
                type="text"
                id="title"
                name="title"
                required
                v-model="currentPost.title"
              />
            </div>
            <div class="col-md-6 ">
              <label for="">Image: </label> <br />
              <input
                type="file"
                id="imagepath"
                name="imagepath"
                required
                accept="image/x-png,image/gif,image/jpeg"
              />
            </div>
            <div class="col-12">
              <label for="">DESCRIPTION: </label> <br />
              <textarea
                id="text"
                name="text"
                cols="30"
                rows="5"
                required
                v-model="currentPost.description"
              ></textarea>
            </div>
            <div class="col-md-6">
              <label for="">DESIGN: </label> <br />
              <input
                type="number"
                id="design"
                name="design"
                required
                v-model="currentPost.design"
              />
            </div>
            <div class="col-md-6">
              <label for="">Product Link: </label> <br />
              <input
                type="text"
                id="product_link"
                name="product_link"
                required
                v-model="currentPost.product_link"
              />
            </div>
            <div class="col-12 mt-5 ">
              <input
                type="button"
                name="submit"
                id="submit"
                value="Update"
                @click="updatePost()"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPost: {
        title: "",
        description: "",
        design: "",
        product_link: "",
      },
    };
  },

  mounted() {
    this.axios.get("/posts/" + this.$route.params.id).then((response) => {
      this.currentPost = response.data;
    });
  },

  methods: {
    updatePost() {
      this.axios
        .put("/posts/" + this.$route.params.id, this.currentPost)
        .then((res) => {
          window.location.href = "/admin/";
          console.log(res);
        })
        .catch((e) => {
          console.log(e);

          console.log("FAILURE!!");
        });
    },
  },
};
</script>
<style scoped>
.container {
  margin-top: 123px !important;
  height: 100vh;
}
</style>
