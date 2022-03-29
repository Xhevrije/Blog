<template>
     <div class="footer" :style="'background-color: '+this.getCookie(this.cookieName)">

            <div >
               <p>Copyright © {{new Date().getFullYear()}}</p>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  }
};
</script>