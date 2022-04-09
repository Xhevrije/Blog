<template>
       <div class="main-container">
             <div class="container">
            <div class="title">
                <h1> Makeup</h1>

            </div>
        </div>
         <div class="gallery">
                <div class="square-container " >
                    <div class="row row-cols-4 p-3">

                     <a v-for="post in reversedItems" :key="post.updated_date"
                          :href="post.product_link">
                            <div class="square"><img :src="`http://localhost:4000/posts/${post.image}`"  width="200px" height="200px" ></div>
                        <div class=" justify-content-between pb-4" style="14px; align:right " >
                        <div class="mb-1 text-muted">Posted: {{post.updated_date | human-date }}   </div>

                         </div>

                        </a>

                          <a
                            href="https://www.amazon.com/NYX-PROFESSIONAL-MAKEUP-Ultimate-Eyeshadow/dp/B01IW02HYG/ref=sr_1_7?dchild=1&keywords=revolution+makeup&qid=1595623268&sr=8-7">
                            <div class="square"><img src="@/components/user/img/makeproduct2.jpg" width="200px" alt="2.png"></div>
                             <div class="mb-1 text-muted">Posted: 1 day ago   </div>
                        </a>
                        <a href="https://www.amazon.com/dp/B00B4YVU4G/ref=emc_b_5_i">
                            <div class="square"><img src="@/components/user/img/makeproduct3.jpg" width="200px" height="200"
                                    alt="3.png"></div>
                                    <div class="mb-1 text-muted">Posted: 1 day ago   </div>
                        </a>
                        <a
                            href="https://www.amazon.com/BEAUTYBLENDER-ORIGINAL-Makeup-Foundations-Powders/dp/B07VBNQ367/ref=sr_1_1?dchild=1&keywords=beauty+blender&qid=1595623896&sr=8-1">
                            <div class="square"><img src="@/components/user/img/makeproduct4.jpg" width="200px" alt="3.png"></div>
                            <div class="mb-1 text-muted">Posted: 1 day ago   </div>
                        </a>
                        <a
                            href="https://www.amazon.com/BEAUTYBLENDER-ORIGINAL-Makeup-Foundations-Powders/dp/B07VBNQ367/ref=sr_1_1?dchild=1&keywords=beauty+blender&qid=1595623896&sr=8-1">
                            <div class="square"><img src="@/components/user/img/makeproduct4.jpg" width="200px" alt="3.png"></div>
                            <div class="mb-1 text-muted">Posted: 1 day ago   </div>
                        </a>
                    </div>




                </div>
              </div>
              </div>

</template>
<script>
export default {
    data(){
        return {
            posts: [],
        }
    },
    computed:{
        reversedItems(){
            return this.posts.slice(0).reverse();
        }
    },

    methods: {
        fetchPosts(){
            this.axios.get('/posts/')
                .then(response => {
                    this.posts = response.data;
                });
        },


    },

    mounted() {
        this.fetchPosts();
    },
}
</script>
<style scoped>
.row{
    margin-right : 163px;
    margin-left : 177px;
}
</style>