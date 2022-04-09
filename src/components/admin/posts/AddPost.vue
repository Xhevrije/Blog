<template>
    <div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3 border p-4 shadow bg-light" id="Add-post">
            <div class="col-12 form-action">
                <h3 class="fw-normal text-dark fs-4 text-uppercase mb-4">Add Post</h3>
            </div>
            <form action="">
                <div class="row g-3">
                    <div class="col-md-6">
                      <label for="">TITLE: </label> <br>
                      <input type="text" id="title" name="title" required v-model="title">
                    </div>
                    <div class="col-md-6 ">
                      <label for="">Image: </label> <br>
                      <input type="file" id="imagepath" name="imagepath" required @change="selectedFiles" accept="image/x-png,image/gif,image/jpeg">
                    </div>
                    <div class="col-12">
                      <label for="">DESCRIPTION: </label> <br>
                      <textarea  id="text"  name="text" cols="30" rows="5" required v-model="description"></textarea>
                    </div>
                    <div class="col-md-6">
                      <label for="">DESIGN: </label> <br>
                      <input type="number" id="design" name="design" required v-model="design">
                    </div>
                    <div class="col-md-6">
                      <label for="">Product Link: </label> <br>
                      <input type="text" id="product_link" name="product_link" required v-model="product_link">
                    </div>
                    <div class="col-12 mt-5 " >
                      <input type="button" name="submit" id="submit" value="Add Post" @click="addPost()">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<style lang="css">

</style>

<script>
export default {
    data(){
        return {
            title: '',
            image: null,
            description: '',
            design: '',
            product_link: '',
        }
    },
    methods: {
        selectedFiles(event){
            if(! event.target.files.length) return
            this.image = event.target.files[0]
        },

        addPost(){
            let formData = new FormData()

            formData.append('title', this.title);
            formData.append('image', this.image);
            formData.append('description', this.description);
            formData.append('design', this.design);
            formData.append('product_link', this.product_link);

            this.axios.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                this.$swal({
                    icon: 'success',
                    title: 'Post has been created!',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    }
                });

                this.$router.push({name: 'admin'})
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>
<style scoped>
.container{
  margin-top: 123px!important;
  min-height:100vh;
}
#submit{
  float: right;
  background-color: rgb(217 165 174);
  border-color:rgb(183, 136, 144) ;
  height: 35px;
  width: 95px;
  text-align: center;
}
#imagepath{
  width: 228px;
}
#submit:hover{
  background-color: rgb(183, 136, 144);
}
#Add-post{
  background-color: #dfd8dc !important;
}
#fname, #emailc, textarea {
  width: 515px;

}
</style>
