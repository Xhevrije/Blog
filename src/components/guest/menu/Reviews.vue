<template>
     <div class="card-columns">
    <div class="card " style="background-color:rgb(169 134 141 / 28%)"  v-for="testimonials in reversedItems" :key="testimonials.name">
      <div class="card-body text-center">
          <img class="card-img-top" src="@/components/guest/img/profile.jpg" style="width: 150px" alt="Card image">
        <p class="card-text">{{testimonials.name}}</p>
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
     computed:{
        reversedItems(){
            return this.testimonials.slice(0).reverse();
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
.card-columns {
 margin-top: 123px;
}
.card-text{
    font-weight: 700;
    font-size: 20px;
}
</style>