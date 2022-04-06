<template>
      <div class="container">
            <div class="title">
                <h3> Take a look about what our guests have been saying about us</h3>
            </div>
            <div class="content" >

                    <div class="review" v-for="(testimonials, index) in testimonials" :key="index" >
                        <div class="head-review">
                            <img src="@/components/guest/img/profile.jpg" width="250px" alt="">
                        </div>
                        <div class="body-review">
                            <div class="name-review" >Jane Doe</div>
                            <!-- <div class="place-review">Lorem Ipsum</div> -->
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="desc-review">
                            <p class="bold text-center px-md-3"> {{testimonials.name}}</p>

                            </div>
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
.review {
 margin: 10px;
}
</style>