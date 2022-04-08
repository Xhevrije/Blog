<template>
  <div class="umain-container">
      <div class="form">
          <form id="formt" >
          <h1>Send your own testimony!</h1>
            <textarea name="testimony" id="testimony" v-model="name" cols="30" rows="10" placeholder="Sent yout testiomony..."></textarea>
            <input type="button" class="float-right mt-3" name="submit" id="submit" value="Send" @click="addtestimonials()">

          </form>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
        }
    },
    methods: {
        addtestimonials(){
            
            this.axios.post('/testimonials', {
              name: this.name
            }, {
               
            }).then(res => {
                this.$swal({
                    icon: 'success',
                    title: 'Testimonial has been created!',
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

                this.$router.push({name: 'testimonials'})
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>

<style>

textarea {
    overflow: auto;
    resize: vertical;
}



#fname, #emailc, textarea {
    width: 650px;
    padding: 12px;
    background-color: #f2f3f4;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius: 10px;
}







#fname,
#emailc,
textarea {
    width: 650px;
    padding: 12px;
    background-color: #f2f3f4;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius: 10px;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


#submit {
    background-color: rgba(182, 134, 142, 0.979);
    border-radius: 1px;
    color: black;
    width: 100px;
    padding: 8px;
    cursor: pointer;
    margin-bottom: 27%;
}

#submit:hover {
    background-color: white;
}


</style>