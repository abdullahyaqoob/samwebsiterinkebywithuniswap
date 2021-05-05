<template>
  <div>
  <!-- <div class="top-container-"> -->
    <!-- <div class="inside-container">
          <div class="left_container">
              <h1 class="heading">Contact With Us</h1>
          </div>
            <div class="right_container">
                <img class="icon icon-1" src="../assets/images/telegram3.svg">
                <img class="icon icon-2" src="../assets/images/twitter6.png">
                <img class="icon icon-3" src="../assets/images/discord7.jpg">
          </div>
      </div>
      <div class="support-div">
        <p class="support-1"><span class="support">Support</span> <span class="axia">Axia Terms and Condition</span></p>
        <p><span class="support">About Us</span> <span class="axia">Privacy</span></p>
        <p><span class="support">Company News</span></p>
      </div> -->
      <div class="inner" :class="changeModeIndex === 'lightTheme' ? 'footerBackgroundForLightTheme' : 'footerBackgroundForDarkTheme'">
        <form action="" style="margin:0 auto">
          <h3 class="contactusHeading" style="color:white">Contact Us</h3>
          <div class="form-group">
            <div class="form-wrapper">
              <label for="">First Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-wrapper">
              <label for="">Last Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-wrapper">
            <label for="">Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-wrapper">
            <label for="">Message</label>
            <textarea cols="100" rows="4" class="form-control" style="height: 80px;"></textarea>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" /> I caccept the Terms of Use & Privacy
              Policy.
              <span class="checkmark"></span>
            </label>
          </div>
          <button>Contact Now</button>
        </form>
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
.support-div {
  position: relative;
  top: -250px;
  width: 100%;
  text-align: start;
  margin-left: 150px;
  padding-top: 100px;
}
.support {
  color: grey;
}
.axia {
  margin-left: 200px;
  color: #0179c8;
}
.top-container- {
  background-color: #000000;
  width: 100%;
  height: 100px !important;
  margin-top: -15px;
  padding: 100px;
  color: #000;
}
.inside-container {
  width: 80%;
  margin: 0 auto;
  text-align: start;
  height: 350px;
  padding-top: -150px;
}
.left_container {
  width: 50%;
  display: inline-block;
  margin-top: 60px;
}
.heading {
  color: white;
  font-size: 28px;
  position: relative;
  top: -70px;
}
.desk-img {
  width: 550px;
  margin-top: -210px;
}
.right_container {
  width: 50%;
  display: inline-block;
  margin-left: 1100px;
}
.icon {
  display: inline-block;
  width: 40px;
  margin-top: -220px;
}
@media (min-width: 901px) and (max-width: 1620px) {
  .right_container {
    margin-left: 910px;
  }
}
@media only screen and (max-width: 900px) {
  .top-container- {
    height: auto;
    padding: 10px;
    padding-left: -50px;
    padding-top: 80px;
    width: 104%;
  }
  .inside-container {
    height: auto;
  }
  .right_container {
    margin-top: 80px;
  }
  .left_container {
    height: auto;
    width: 100%;
    display: inline-block;
  }
  .heading {
    margin-top: -30px;
  }
  .support {
    margin-left: -110px;
  }
  .support-1 {
    margin-top: 30px;
  }
  .axia {
    margin-left: 50px;
    color: #0179c8;
  }
}
input, textarea, select, button {
    font-family: "Muli-Regular";
    color: #333;
    font-size: 13px;
}

p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
}

img {
    max-width: 100%;
}

ul {
    padding-left: 0;
    margin-bottom: 0;
}

a:hover {
    text-decoration: none;
}

:focus {
    outline: none;
}

.wrapper {
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.inner {
    min-width: 850px;
    margin: auto;
    padding-top: 68px;
    padding-bottom: 48px;
}
.footerBackgroundForLightTheme{
  background-color: #171566;
}
.footerBackgroundForDarkTheme{
  background-color: #212121;
}
.inner h3 {
    text-transform: uppercase;
    font-size: 22px;
    font-family: "Muli-Bold";
    text-align: center;
    margin-bottom: 32px;
    color: #fff;
    letter-spacing: 2px;
}

form {
    width: 50%;
    padding-left: 45px;
}

.form-group {
    display: flex;
}

.form-group .form-wrapper {
    width: 50%;
}

.form-wrapper label {
  text-align: start;
}

.form-group .form-wrapper:first-child {
    margin-right: 20px;
}

.form-wrapper {
    margin-bottom: 17px;
    color: white;
}

.form-wrapper label {
    margin-bottom: 9px;
    display: block;
}

.form-control {
    border: 1px solid #fff;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    font-family: "Muli-Bold";
    background: none;
}

.form-control:focus {
    border: 1px solid #ae3c33;
}

select {
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding-left: 20px;
}

select option[value=""][disabled] {
    display: none;
}

button {
    border: 3px solid rgb(93, 93, 93);
    width: 152px;
    height: 40px;
    margin: auto;
    margin-top: 29px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: #fff;
    font-size: 13px;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Muli-SemiBold";
    border-radius: 20px;
    overflow: hidden;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
}

button:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #171566;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

button:hover:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

.checkbox {
    position: relative;
    color: white;
}

.checkbox label {
    padding-left: 22px;
    cursor: pointer;
}

.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkbox input:checked~.checkmark:after {
    display: block;
}

.checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 12px;
    width: 13px;
    border-radius: 2px;
    background-color: #ebebeb;
    border: 1px solid #ccc;
    font-family: Material-Design-Iconic-Font;
    color: #000;
    font-size: 10px;
    font-weight: bolder;
}

.checkmark:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    content: '\f26b';
}

@media (max-width: 991px) {
    .inner {
        min-width: 768px;
    }
}

@media (max-width: 767px) {
    .inner {
        min-width: auto;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    form {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
}
</style>
