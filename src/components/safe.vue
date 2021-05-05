<template>
  <div class="top-container-" id="safe-div" :class="changeModeIndex === 'lightTheme' ? 'safeDivForLightTheme' : 'safeDivForDarkTheme'">
      <div class="inside-container">
          <div class="left_container">
              <h1 class="left_container-heading">Safe</h1>
              <p class="left-cont-sub-heading" id="safe-Content">Rest easy knowing your investment is safe! Each token is put through a stringent vetting process before they are added to our funds. Even Axia itself has been through stringent vetting through multiple security and code audits!</p>
          </div>
            <div class="right_container">
                <img class="desk-img" src="../assets/images/unlock.svg">
          </div>
      </div>
      <div class="space-gap">

      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changeModeIndex: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.changeModeIndex = this.$store.state.changeModeIndexWebsite
    }, 20)
  }
}
</script>

<style scoped>
.top-container-{
    width: 100%;
    height: 300px;
    margin-top: 15px;
    padding: 100px;
}
.inside-container{
    width: 80%;
    margin: 0 auto;
    text-align: start;
    /* height: 350px; */
    padding-top: 50px;
}
.left_container{
    width: 55%;
    display: inline-block;
    position: relative;
    top: -50px;
}
.left-cont-sub-heading{
    color: rgb(255, 255, 255);
    font-size: 16px;
}
.left_container-heading{
    color: white;
    font-size: 28px;
}
.desk-img{
    width: 300px;
    margin-top: -260px;
    margin-left: 100px;
}
.right_container{
    width: 30%;
    display: inline-block;
    position: relative;
}
.safeDivForLightTheme{
    background-color: #171566;
}
.safeDivForDarkTheme{
    background-color: #212121;
    margin-top: -40px;
}
@media only screen and (max-width: 900px) {
    .top-container-{
        height: auto;
        padding: 0;
        padding-top: 50px;
        width: 104%;
    }
    .left_container{
        width: 100%;
    }
    .right_container{
        width: 30%;
        display: inline-block;
        position: relative;
        margin-top: 200px;
        margin-left: -30px;
    }
    .desk-img{
        width: 200px;
    }
}
</style>
