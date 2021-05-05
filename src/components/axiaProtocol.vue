<template>
  <div class="helo" style="margin-bottom: 40px; margin-top: 30px">
    <div class="axia-Protocols" :class="changeModeIndex === 'lightTheme' ? 'axiaProtocolForLightTheme' : 'axiaProtocolForDarkTheme'">
      <h2 class="axia-protocols-heading">Introducing Crypto Protocols</h2>
      <div class="inside-container">
        <div class="left_container">
          <img
            class="desk-img1"
            src="../assets/images/manag-removebg-preview.png"
          />
          <h3 class="axia-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Manage your portfolio</h3>
          <p class="left-cont-sub-heading">
            Axia is open to all. Buy and sell popular digital currencies, keep
            track of them in the one place. We believe everyone should be able
            to invest and expand their portfolio by letting their currencies
            work smarter.
          </p>
        </div>
        <div class="center_container">
          <img class="desk-img2" src="https://s3-ca-central-1.amazonaws.com/cdn.hedgetrade.com/wp-content/uploads/2019/04/29033116/growth-chart.png" />
          <h3 class="axia-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Recurring buys</h3>
          <p class="left-cont-sub-heading">
            Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
            Investing into Axia funds means that you can take control of your
            portfolio and in Your Crypto.
          </p>
        </div>
        <div class="right_container">
          <img class="desk-img3" src="../assets/images/vaultProtect.png" />
          <div id="vault">
          <h3 class="axia-sub-heading" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'">Vault protection</h3>
          <p class="left-cont-sub-heading">
            Our protocol automates the entire investing and diversification
            process so all you have to do is pick a fund that you like and press
            invest! Let Axia do all the hard work for you.
          </p>
          </div>
        </div>
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
.axia-Protocols {
  width: 100%;
  height: 600px;
  margin-top: -30px;
  padding: 100px;
}
.inside-container {
  width: 100%;
  margin: 150px auto;
  height: 350px;
  padding-top: 70px;
}
.left_container {
  width: 25%;
  display: inline-block;
  margin-right: 30px;
}
.left-cont-sub-heading {
  color: grey;
  font-size: 17.6px;
  text-align: start;
}
.axia-sub-heading{
  font-size: 28px;
  font-weight: normal;
}
.app-launch {
  border-radius: 10px;
  padding: 1rem 1.5rem;
  border: none;
  background-color: #f15e66;
  color: white;
  font-weight: bold;
}
.center_container {
  width: 25%;
  display: inline-block;
  margin-right: 30px;
  position: relative;
  top: -28px;
}
.right_container {
  width: 25%;
  display: inline-block;
  position: relative;
  margin-right: 30px;
  position: relative;
  top: -7px;
}
.desk-img1 {
  width: 50%;
  margin-top: -210px;
}
.desk-img2 {
  width: 75%;
  margin-top: -200px;
}
.desk-img3 {
  width: 70%;
  margin-top: -210px;
}
#vault{
  position: relative;
  top: -20px;
}
@media only screen and (max-width: 900px) {
  .axia-protocols-heading {
    white-space: nowrap;
    margin-left: -70px;
  }
  .inside-container,
  .axia-Protocols {
    height: auto;
  }
  .left_container,
  .center_container,
  .right_container {
    width: 350px;
    margin-left: -70px;
  }
  .center_container,
  .right_container {
    margin-top: 180px;
  }
}
@media only screen and (max-width: 550px) {
  .axia-Protocols,
  .helo {
    width: 108%;
    height: 1400px;
  }
  .axia-protocols-heading {
    margin-left: -110px;
  }
}
@media only screen and (max-width: 550px) {
  .axia-Protocols,
  .helo {
    width: 110%;
  }
  .axia-protocols-heading {
    margin-left: -120px;
  }
}
@media only screen and (max-width: 465px) {
  .axia-Protocols,
  .helo {
    width: 112%;
  }
  .axia-protocols-heading {
    margin-left: -125px;
  }
}
@media only screen and (max-width: 430px) {
  .axia-Protocols,
  .helo {
    width: 112%;
  }
  .axia-protocols-heading {
    margin-left: -120px;
    font-size: 30px;
  }
}
@media only screen and (max-width: 410px) {
  .axia-protocols-heading {
    margin-left: -100px;
  }
}
@media only screen and (max-width: 395px) {
  .axia-protocols-heading {
    font-size: 28px;
    margin-left: -90px;
  }
  .left_container,
  .center_container,
  .right_container {
    width: 115%;
  }
}
@media only screen and (max-width: 380px) {
  .axia-protocols-heading {
    margin-left: -100px;
    font-size: 26px;
  }
  .axia-Protocols,
  .helo {
    width: 113%;
    height: 1400px;
  }
}
@media only screen and (max-width: 340px) {
  .axia-protocols-heading {
    margin-left: -95px;
    font-size: 26px;
  }
  .left_container,
  .center_container,
  .right_container {
    width: 125%;
  }
}
</style>
