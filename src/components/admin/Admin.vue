<template>
<div class="admin">
    <div class="container my-2">
        <div class="row mb-2">
            <div class="col-md-6 p-4" v-for="post in reversedItems" :key="post.updated_date">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0" v-text="post.title"></h3>
                        <p class="card-text text-left" v-text="post.description"></p>
                        <p class="card-text text-left m-0" v-text="'Design: '+ post.design"></p>
                        <a :href="post.product_link" class="link mt-3">Product Link</a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 pt-2">
                        <img :src="`http://localhost:4000/posts/${post.image}`" class="img-thumbnail">
                    </div>
                    <div class="d-flex p-3 justify-content-between">
                        <div class="mb-1 text-muted">Posted: {{post.updated_date | human-date}}</div>
                        <div>
                            <router-link class="mx-2" :to="'/admin/posts/edit/'+post._id" >
                                <a class="btn btn-success">Edit</a>
                            </router-link>
                            <a @click="deletePost(post._id)" class="btn btn-danger">Delete</a>
                        </div>
                    </div>
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

        deletePost(id){
            if (confirm('Are you sure you want to delete this post?')) {
                this.axios.delete('/posts/'+id)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                });
            }
        }
    },

    mounted() {
        this.fetchPosts();
    },
}
</script>

