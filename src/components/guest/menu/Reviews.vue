<template>
     <div class="container">
          <div class="card-deck row">
              <div class="card " v-for="(testimonials, index) in testimonials" :key="index" >
                  <img class="card-img-top img-fluid" src="@/components/guest/img/profile.jpg" >
                  <div class="card-body">
                      <h4 class="card-title">{{testimonials.user}}</h4>
                      <p class="card-text">{{testimonials.name}}</p>
                  </div>
              </div>
          </div>


      </div>

</template>

<script>

export default {
    data(){
        return {
            testimonials: [],
        }
    },

    methods: {
        fetchTest(){
            this.axios.get('/Testimonials/')
                .then(response => {
                    this.testimonials = response.data;
                });
        },

        deleteTest(id){
            if (confirm('Are you sure you want to delete this Testimonials?')) {
                this.axios.delete('/Testimonials/'+id)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                });
            }
        }
    },

    mounted() {
        this.fetchTest();
    },
}
</script>
<style scoped>
.container {
 margin-top: 123px;
}
</style>