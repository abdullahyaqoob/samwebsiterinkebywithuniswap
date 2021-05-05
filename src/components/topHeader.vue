<template>
  <div class="hello-world">
    <nav class="navbar navbar-expand-md" :class="changeModeIndex === 'darkTheme' ? 'navbarForDarkMode' : 'navbarForLightMode'">
      <a href="/" class="navbar-brand">
        <img
          class="logo-1"
          src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif+JqxFGkBjIwXs1M3EMoAJtliEuj...Vo9P89"
          style="position: absolute; width: 140px; top: 13px; left: 60px"
          width="160px"
        />
          <!-- src="data:image/png;base64,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" -->
        <img
          class="logo-2"
          src="../assets/images/block360Logo.png"
          style="position: absolute; width: 40px; top: 33px; left: 10px"
        />
        <span
          class="logo-2"
          id="mobile-logo-heading"
          style="margin-left: 50px; font-weight: bold;" :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
          >Sam Collins</span
        >
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        style="border: none"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-search" style="margin-right: 10px" :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"></i>
        <span v-if="sidebar === 'false'"
          ><i
            @click="navigateSidebar('true')"
            class="fas fa-bars" :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
          ></i
        ></span>
        <span v-if="sidebar === 'true'"
          ><i
            @click="navigateSidebar('false')"
            class="fas fa-times"  :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
          ></i
        ></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav" style="margin-left: 120px; margin-top: 10px">
          <a
            style="color: black"
            class="nav-item nav-link active" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"
            @click="scrollWin1()"
            >Home</a
          >
          <a
            style="color: black"
            class="nav-item nav-link" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"
            @click="scrollWin2()"
            >Protocols</a
          >
          <a
            style="color: black"
            class="nav-item nav-link" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"
            @click="scrollWin3()"
            >Instruments</a
          >
          <a
            style="color: black; white-space: nowrap"
            class="nav-item nav-link" :class="changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'"
            @click="scrollWin4()"
            >Contact Us</a
          >
        </div>
        <div class="navbar-nav ml-auto istBtn" id="color-btns" :class="changeModeIndex === 'lightTheme' ? 'displayInherit' : 'displayNone'">
            <button
            class="change-color-site"
            @click="navigateMode('darkTheme')"
            id="changeMode1"
          >
            <span class="sun-like"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                style="
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg); position: relative; right: 3px; margin-left: 3px;
                "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="iconify moon-icon"
                data-icon="feather-moon"
                data-inline="false"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
                  ></path>
                </g></svg
            ></span>
          </button>
        </div>
        <div class="navbar-nav ml-auto sndBtn" id="color-btns" :class="changeModeIndex === 'darkTheme' ? 'displayInherit' : 'displayNone'">
            <button
            class="change-color-site"
            @click="navigateMode('lightTheme')"
            id="changeMode2"
          >
              <span class="sun-like"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  style="
                    -ms-transform: rotate(360deg);
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg); position: relative; right: 4px; margin-left: 3px;
                  "
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  class="iconify sun-icon"
                  data-icon="feather-sun"
                  data-inline="false"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                  </g></svg
              ></span>
          </button>
        </div>
      </div>
      <div v-if="sidebar === 'true'" :class="changeModeIndex === 'darkTheme' ? 'sidebarMain-DivForDarkTheme' : 'sidebarMain-DivForLightTheme'">
        <a
          class="nav-item nav-link active"
          @click="scrollMob1()"
          >Home</a
        >
        <a class="nav-item nav-link" @click="scrollMob2()"
          >Protocols</a
        >
        <a class="nav-item nav-link" @click="scrollMob3()"
          >Instruments</a
        >
        <a
          style="white-space: nowrap"
          class="nav-item nav-link"
          @click="scrollMob4()"
          >Contact Us</a
        >
        <div class="navbar-nav ml-auto istBtn" id="color-btns" :class="changeModeIndex === 'lightTheme' ? 'displayInherit' : 'displayNone'">
            <button
            class="change-color-site"
            @click="navigateMode('darkTheme')"
            id="changeMode1"
          >
            <span class="sun-like"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                style="
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg); position: relative; right: 3px; margin-left: 3px;
                "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="iconify moon-icon"
                data-icon="feather-moon"
                data-inline="false"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
                  ></path>
                </g></svg
            ></span>
          </button>
        </div>
        <div class="navbar-nav ml-auto sndBtn" id="color-btns" :class="changeModeIndex === 'darkTheme' ? 'displayInherit' : 'displayNone'">
            <button
            class="change-color-site"
            @click="navigateMode('lightTheme')"
            id="changeMode2"
          >
              <span class="sun-like"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  style="
                    -ms-transform: rotate(360deg);
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg); position: relative; right: 4px; margin-left: 3px;
                  "
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  class="iconify sun-icon"
                  data-icon="feather-sun"
                  data-inline="false"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                  </g></svg
              ></span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebar: 'false',
      changeModeIndex: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.changeModeIndex = this.$store.state.changeModeIndexWebsite
    }, 20)
  },
  methods: {
    navigateSidebar (sidebar) {
      this.sidebar = sidebar
    },
    navigateMode (Mode) {
      localStorage.setItem('WebsiteIndexmode', Mode)
      this.changeModeIndex = this.$store.state.changeModeIndexWebsite = Mode
      console.log('store changeModeIndexWebsite2', this.$store.state.changeModeIndexWebsite)
    },
    scrollWin1 () {
      window.scrollTo(0, 0)
    },
    scrollWin2 () {
      window.scrollTo(0, 480)
    },
    scrollWin3 () {
      window.scrollTo(0, 1850)
    },
    scrollWin4 () {
      window.scrollTo(0, 2740)
    },
    scrollMob1 () {
      window.scrollTo(0, 0)
      this.sidebar = 'false'
    },
    scrollMob2 () {
      window.scrollTo(0, 750)
      this.sidebar = 'false'
    },
    scrollMob3 () {
      window.scrollTo(0, 3600)
      this.sidebar = 'false'
    },
    scrollMob4 () {
      window.scrollTo(0, 4900)
      this.sidebar = 'false'
    }
  }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0px;
  margin: 0 auto;
  width: 100%;
  padding: 0 90px !important;
  color: #000;
  z-index: 1111;
  height: 110px;
  cursor: pointer;
}

.change-color-site {
  width: auto;
  height: 45px;
  border: none;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 1px 40px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.sun-like,
.red-btn {
  color: #226451;
  margin-right: 5px;
  margin-left: 5px;
}

.sun-icon,
.moon-icon {
  width: 25px;
  height: 25px;
}

.sidebarMain-DivForLightTheme {
  position: absolute;
  top: 90px;
  left: 0px;
  height: 230px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  color: #000;
}

.sidebarMain-DivForDarkTheme {
  position: absolute;
  top: 90px;
  left: 0px;
  height: 230px;
  width: 100%;
  margin: 0 auto;
  background-color: #2B2B2B;
  color: rgb(255, 255, 255);
}

.sidebar_links_items {
  text-align: left;
  margin-left: 30px;
  font-size: 18.4px;
  font-weight: bold;
  padding-top: 10px;
  color: #000;
}

@media only screen and (min-width: 900px) {
  .logo-2,
  .side-bar {
    display: none;
  }
  .navbar {
    margin: 0 auto;
    width: 100%;
    padding: 0 470px !important;
    color: #000;
    z-index: 1111;
    height: 110px;
    position: fixed !important;
    top: 0px;
    box-shadow: 0 7px 2px -2px rgb(236, 236, 236);
  }
  #color-btns {
    margin-left: 320px !important;
  }
}
@media only screen and (min-width: 1530px) {
  .navbar {
    padding: 0 500px !important;
  }
  #color-btns {
    margin-left: 400px !important;
  }
}

@media only screen and (min-width: 1565px) {
  .navbar {
    padding: 0 400px !important;
  }
  #color-btns {
    margin-left: 470px !important;
  }
}

@media only screen and (min-width: 1645px) {
  .navbar {
    padding: 0 490px !important;
  }
  #color-btns {
    margin-left: 450px !important;
  }
}

@media only screen and (min-width: 1700px) {
  .navbar {
    padding: 0 530px !important;
  }
  #color-btns {
    margin-left: 470px !important;
  }
}

@media only screen and (min-width: 1780px) {
  .navbar {
    padding: 0 550px !important;
  }
}

@media only screen and (min-width: 1880px) {
  .navbar {
    padding: 0 610px !important;
  }
}

@media only screen and (max-width: 900px) {
  .logo-1{
    display: none;
  }
  .navbar {
    position: absolute;
    top: 0px;
    margin: 0 auto;
    width: 104%;
    padding: 0 90px !important;
    background-color: white;
    color: #000;
    z-index: 1111;
    height: 100px;
    cursor: pointer;
  }
  .logo-2 {
    position: absolute;
  }
  #mobile-logo-heading {
    position: absolute;
    left: 25px;
    margin-top: -11px;
  }
  .navbar-toggler {
    margin-right: -70px;
    margin-top: 8px;
  }
  .change-color-site{
    width: 96%;
  }
}

@media only screen and (max-width: 465px) {
  .change-color-site{
    width: 95%;
    margin-left: 2px;
    margin-top: 15px;
  }
}

</style>
