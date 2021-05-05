<template>
  <div class="top-container-" id="ourInstruments" style="margin-bottom:-20px;" :class="changeModeIndex === 'lightTheme' ? 'ourInstrumentsLightTheme' : 'ourInstrumentsDarkTheme'">
      <div class="inside-container">
          <div class="left_container">
              <h2 id="inst-heading">Our Instruments</h2><br>
              <h4 id="inst-funds" style="color:white"><span class="axiaFunds">Axia Funds</span><span class="staking">Staking</span></h4><br><br><br>
              <span class="left-cont-sub-heading" id="inst-cont">Automatically diversify your portfolio into funds with a press of a button. Each fund is carefully arranged by our team who scrutinise each token to ensure you get the best possible return with minimal risk on your investment.</span>
          </div>
            <div class="right_container">
                <img class="desk-img" src="../assets/images/fundings.svg">
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
.ourInstrumentsLightTheme{
    background-color: #171566;
}
.ourInstrumentsDarkTheme{
    background-color: #212121;
}
.top-container-{
    width: 100%;
    height: 500px;
    margin-top: -100px;
    padding: 100px;
    color: #fff;
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
    color: rgb(226, 226, 226);
    font-size: 16px;
}
.staking{
    margin-left: 40px;
    color: rgb(226, 226, 226);
    font-size: 24px;
}
.desk-img{
    width: 350px;
    margin-top: -210px;
    margin-left: 240px;
}
.right_container{
    width: 50%;
    display: inline-block;
    position: relative;
}
.axiaFunds{
    font-size: 24px;
}
@media (min-width: 901px) and (max-width: 1620px) {
.desk-img{
    margin-left: 160px;
}
}
@media only screen and (max-width: 900px) {
.top-container-{
    height: auto;
    padding: 10px;
    padding-left: -50px;
    padding-top: 80px;
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
    margin-top: -40px;
    margin-left: -20px;
}
}
</style>
