<template>
<div class="home">
<div class="py-5 " >
            <div class="text-center my-5 pt-4">
                <h1 class="text-black fs-2 fw-bolder pt-2">Welcome</h1>
                <p class="text-black  paragraph fs-3  pt-5 ">Everything you need to know about
                    the beauty world.<br>Makeup reviews, tutorials, beauty tips & so much more.</p>
                    <div class="btn">
                    <button class="login mb-4"><router-link :to="'/auth/login'" >Login</router-link></button>
                    <button class="register mb-4"><router-link :to="'/auth/register'" >Register</router-link></button>
            </div>
            </div>
        </div>
        </div>
</template>
<style scoped>
.py-5{
    margin-top: 106px;
    background-image: url('https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.home{
    height: 100vh;
}
.btn,.paragraph{
    padding-top: 50px;
}
.login{
    padding: 8px 37px 8px 37px;
    margin-left: 5px;
    background-color: rgb(169, 134, 141);
    border-radius: 50px ;
}
.register{
    padding: 8px 28px 8px 28px;
    margin-left: 5px;
    background-color: rgb(169, 134, 141);
    border-radius: 50px ;
}
</style>

