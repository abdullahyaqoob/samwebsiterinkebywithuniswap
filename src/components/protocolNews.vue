<template>
  <div class="top-container-" id="Axia_Protocol_News" :class="changeModeIndex === 'lightTheme' ? 'axiaProtocolForLightTheme' : 'axiaProtocolForDarkTheme'">
      <div class="inside-container">
          <div class="left_container">
              <h3 id="newsHeading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Axia Protocol News</h3><br>
              <p id="newsSubHeading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"><span class="boldIt">2021-02-18 </span><span class="left-cont-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorGrey' : 'colorWhite'">Website Nightmode Implemented </span><span><i class="fas fa-link" aria-hidden="true"></i></span><span class="mediaRelease">Media Release</span></p>
              <p id="newsSubHeading2" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"><span class="boldIt">2021-02-18 </span><span class="left-cont-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorGrey' : 'colorWhite'">Axia Releases Whitepaper 2.0 </span><span><i class="fas fa-link" aria-hidden="true"></i></span><span class="mediaRelease">Media Release</span></p>
              <p id="newsSubHeading3" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"><span class="boldIt">2021-02-18 </span><span class="left-cont-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorGrey' : 'colorWhite'">Axia Launches New Website </span><span><i class="fas fa-link" aria-hidden="true"></i></span><span class="mediaRelease">Media Release</span></p>
          </div>
            <div class="right_container"></div>
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
.colorGrey{
    color: grey;
}
.inside-container{
    width: 80%;
    margin: 0 auto;
    text-align: start;
    height: 350px;
}
.left_container{
    width: 50%;
    margin-top: -40px;
    display: inline-block;
}
.left-cont-sub-heading{
    font-size: 17.6px;
}
.mediaRelease{
    color: rgb(102, 176, 255);
    font-size: 12.8px;
}
.desk-img{
    width: 550px;
    margin-top: -210px;
}
.right_container{
    width: 50%;
    display: inline-block;
    position: relative;
}
.fas{
    color: #3E9FE0;font-size: 12px;
    margin-right: 5px;
}
.boldIt{
    font-weight: bold;
}
@media only screen and (max-width: 900px) {
.top-container-{
    height: auto;
    padding: 10px;
    padding-left: -50px;
    padding-top: 80px;
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
    margin-top: -40px;
    margin-left: -20px;
}
}
</style>
