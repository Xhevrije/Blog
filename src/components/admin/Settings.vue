<template>
<div class="container mt-3">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold d-inline text-primary">Settings</h6>
        </div>
        <div class="card-body">
            <label for="">Select panel skin</label>
          <ul class="demo-choose-skin">
            <li @click="theme('#b78890')">
              <div class="default"></div>
              <span>Default</span>
            </li>
            <li class="active" @click="theme('#f44336')">
              <div class="red"></div>
              <span>Red</span>
            </li>
            <li @click="theme('#e91e63')">
              <div class="pink"></div>
              <span>Pink</span>
            </li>
            <li @click="theme('#9c27b0')">
              <div class="purple"></div>
              <span>Purple</span>
            </li>
            <li @click="theme('#673ab7')">
              <div class="deep-purple"></div>
              <span>Deep Purple</span>
            </li>
            <li @click="theme('#3f51b5')">
              <div class="indigo"></div>
              <span>Indigo</span>
            </li>
            <li @click="theme('#2196f3')">
              <div class="blue"></div>
              <span>Blue</span>
            </li>
            <li @click="theme('#03a9f4')">
              <div class="light-blue"></div>
              <span>Light Blue</span>
            </li>
            <li @click="theme('#00bcd4')">
              <div class="cyan"></div>
              <span>Cyan</span>
            </li>
            <li @click="theme('#009688')">
              <div class="teal"></div>
              <span>Teal</span>
            </li>
            <li @click="theme('#4caf50')">
              <div class="green"></div>
              <span>Green</span>
            </li>
            <li @click="theme('#8bc34a')">
              <div class="light-green"></div>
              <span>Light Green</span>
            </li>
            <li @click="theme('#cddc39')">
              <div class="lime"></div>
              <span>Lime</span>
            </li>
            <li @click="theme('#ffe821')">
              <div class="yellow"></div>
              <span>Yellow</span>
            </li>
            <li @click="theme('#ffc107')">
              <div class="amber"></div>
              <span>Amber</span>
            </li>
            <li @click="theme('#ff9800')">
              <div class="orange"></div>
              <span>Orange</span>
            </li>
            <li @click="theme('#ff5722')">
              <div class="deep-orange"></div>
              <span>Deep Orange</span>
            </li>
            <li @click="theme('#795548')">
              <div class="brown"></div>
              <span>Brown</span>
            </li>
            <li @click="theme('#9e9e9e')">
              <div class="grey"></div>
              <span>Grey</span>
            </li>
            <li @click="theme('#607d8b')">
              <div class="blue-grey"></div>
              <span>Blue Grey</span>
            </li>
            <li @click="theme('#000000')">
              <div class="black"></div>
              <span>Black</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Settings",

  methods: {
    theme(color) {
        this.setCookie(this.cookieName, color, 1);
        location.reload();
    }
  }
};
</script>
<style scoped>
.container{
 height: 100vh;
 margin-top: 123px!important ;
}
</style>
