<template>
    <div class="main-container">
        <div class="container mt-5 d-flex justify-content-center">
            <div class="card p-3">
                <div class="d-flex align-items-center">
                    <div class="image"> <img src="https://wallpapercave.com/wp/wp7810667.jpg" class="rounded" width="155"> </div>
                    <div class="ml-3 w-100" v-if="this.$store.getters.user.data">
                        <h4 class="mb-0 mt-0 p-2">Name: {{this.$store.getters.user.data.displayName}}</h4>
                        <h4 class="mb-0 mt-0 p-2">Email: {{this.$store.getters.user.data.email}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.main-container{
    height: 100vh;
}

.card {
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #fff
}

.stats {
    background: #f2f5f8 !important;
    color: #000 !important
}

.articles {
    font-size: 10px;
    color: #a1aab9
}

.number1 {
    font-weight: 500
}

.followers {
    font-size: 10px;
    color: #a1aab9
}

.number2 {
    font-weight: 500
}

.rating {
    font-size: 10px;
    color: #a1aab9
}

.number3 {
    font-weight: 500
}

.image img{
    width: 230px;
}

</style>