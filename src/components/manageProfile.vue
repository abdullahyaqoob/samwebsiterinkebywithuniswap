<template>
  <div class="top-container-" id="manageProfile" :class="changeModeIndex === 'lightTheme' ? 'manageprofileForLightTheme' : 'manageprofileForDarkTheme'">
      <div class="inside-container">
          <div class="right_container">
                <img class="desk-img" src="../assets/images/phone3.png">
          </div>
          <div class="left_container">
              <h2 id="manageHeading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Manage your Portfolio with Axia</h2>
              <p id="manageSubHeading" class="left-cont-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Our decentralized application has it all. Keep track of your funds and measure your investment performance and returns. Our powerful protocol means you can either let your selected fund do the work for you or take active control in allocating your investments into different funds. The decision is entirely up to you!</p>
          </div>
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
    height: 450px;
    margin-top: 15px;
    padding: 100px;
    color: black;
    position: relative;
    top: -20px;
}
.manageprofileForLightTheme{
    background-color: white;
}
.manageprofileForDarkTheme{
    background-color: #2b2b2b;
}
.inside-container{
    width: 80%;
    margin: 0 auto;
    text-align: start;
    height: 350px;
    padding-top: 50px;
}
.left_container{
    width: 50%;
    display: inline-block;
}
.left-cont-sub-heading{
    color: black;
    font-size: 17.6px;
    margin-top: 30px;
}
.app-launch{
    border-radius: 10px;
    padding: 1rem 1.5rem;
    border: none;
    background-color: #f15e66;
    color: white;
    font-weight: bold;
}
.desk-img{
    width: 400px;
    margin-top: -180px;
}
.right_container{
    width: 50%;
    display: inline-block;
    position: relative;
}
@media only screen and (max-width: 900px) {
.top-container-{
    height: auto;
    padding: 10px;
    padding-left: -50px;
    width: 104%;
}
.inside-container{
    height: auto;
}
.right_container{
    margin-top: 80px;
}
.left_container{
    height: auto;
    width: 100%;
    display: inline-block;
}
.desk-img{
    margin-left: -40px;
}
}
</style>
