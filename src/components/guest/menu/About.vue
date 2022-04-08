<template>
<div class="container">
    <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="@/components/guest/img/profile1.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Edona Jemini</h2>
        <p class="title">Web Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>ej50024@ubt-uni.net</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="@/components/guest/img/profile2.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Gëzim Dallku</h2>
        <p class="title">Backend developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>gd47735@unt-uni.net</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="@/components/guest/img/profile3.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>Xhevrije Neziri</h2>
        <p class="title">Backend developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>xn49665@ubt-uni.net</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
.container{
    margin-top:123px ;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 #bdb6b6;
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #818080;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
  font-size: 20px;
}


@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>