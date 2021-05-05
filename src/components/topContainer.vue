<template>
  <div class="top-container-" id="topContainer" :class="changeModeIndex === 'darkTheme' ? 'topContainerForDarkTheme' : 'topContainerForLightTheme'">
    <div class="inside-container">
      <div class="left_container">
        <img class="desk-img" src="../assets/images/hero-img3-removebg-preview.png" />
        <!-- <img class="desk-img" src="../assets/images/heroimg2-removebg-preview.png" /> -->
        <!-- <img class="desk-img" src="https://thegaltimes.com/wp-content/uploads/2021/02/could-ethereum-mining-be-profitable-with-a-laptop-f1dcee7-1280x720.jpg"/> -->
      </div>
      <div class="right_container">
        <h1 class="container-heading" style="color:white">
          Buy And Sell <br />
          Cryptocurrency
        </h1>
        <p class="left-cont-sub-heading" id="axia-content">
          Axia, is the easiest place to buy and sell cryptocurrency. It gives tools to take control of your
          finances and make your cryptocurrencies work smarter not harder.
        </p>
        <router-link to="./indexes"><button class="app-launch">Launch dApp</button></router-link>
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

<style scoped lang="scss">
.top-container- {
  width: 100%;
  height: 600px;
  margin-top: 15px;
  padding: 100px;
}
.inside-container {
  width: 80%;
  margin: 0 auto;
  text-align: start;
  height: 350px;
  padding-top: 100px;
  color: white;
}
.left_container {
  width: 50%;
  display: inline-block;
}
.left-cont-sub-heading {
  color: rgb(202, 202, 202);
  font-size: 17.6px;
}
.app-launch {
  border-radius: 10px;
  padding: 1rem 1.5rem;
  border: none;
  border: 4px solid rgb(98, 98, 98);
  font-weight: bold;
}
.desk-img {
  width: 480px;
  margin-top: -220px;
  margin-left: 0px;
  border-radius: 20px;
}
.right_container {
  width: 50%;
  display: inline-block;
  position: relative;
}
@media (min-width: 901px) and (max-width: 1620px) {
  .desk-img {
    margin-left: -50px;
  }
}
h1{
  font-size: 40px !important;
}
@media only screen and (max-width: 900px) {
  .top-container- {
    width: 104%;
    padding: 0px;
    padding-left: 30px;
    padding-top: 100px;
    height: 740px;
  }
  .container-heading {
    font-size: 30px !important;
    margin-top: -35px;
    color: white;
  }
  .left-cont-sub-heading {
    font-size: 18px;
    width: 95%;
  }
  .inside-container {
    width: 100%;
  }
  .desk-img {
    width: 400px;
    position: absolute;
    bottom: 40px;
  }
  .left_container {
    width: 100%;
  }
  .right_container {
    margin-top: 200px;
    margin-left: -20px;
    width: 95%;
    position: absolute;
    left: 40px;
    top: -20px;
  }
}

@media only screen and (max-width: 550px) {
  .desk-img {
    margin-left: 20px;
    margin-top: -120px;
  }
}
@media only screen and (max-width: 520px) {
  .desk-img {
    margin-left: 5px;
    position: relative;
    top: 400px;
  }
}
@media only screen and (max-width: 488px) {
  .desk-img {
    margin-left: -10px;
  }
}
@media only screen and (max-width: 465px) {
  .desk-img {
    margin-left: 7px;
    width: 370px;
  }
}
@media only screen and (max-width: 440px) {
  .desk-img {
    margin-left: -10px;
  }
}
@media only screen and (max-width: 415px) {
  .desk-img {
    margin-left: -25px;
  }
}
@media only screen and (max-width: 380px) {
  .desk-img {
    margin-left: -33px;
  }
}
@media only screen and (max-width: 365px) {
  .desk-img {
    margin-left: -17px;
    width: 320px;

  }
}
@media only screen and (max-width: 350px) {
  .desk-img {
    margin-left: -22px;
  }
}
</style>
