<template>
  <div class="hello">
      <div class="side-bar" v-if="sidebar === 'true'">
        <br><br>
        <span @click="navigateSidebar('false')" style="float:right;margin-right:20px;color:white"><img src="https://cdn4.iconfinder.com/data/icons/arrow-68/48/36-512.png" width="20px"/>
        </span><br><br>
        <h4 class="sidebarName" style="color:white">Sam Collins</h4>
        <br>
        <h4 class="sidebarItems"><a href="/indexes" class="sidebarLinks">Cryptocurrencies</a></h4>
        <br>
        <h4 class="sidebarItems"><a href="/whatWeOffer" class="sidebarLinks">What We Offer</a></h4>
        <br>
        <h4 class="sidebarItems"><a href="/whyBitcoin" class="sidebarLinks">Why Bitcoin</a></h4>
        <br>
        <h4 class="sidebarItems"><a href="/whoItWork" class="sidebarLinks">Who It Works</a></h4>
      </div>
    <nav class="navbar navbar-expand-md navbar-light">
      <a href="/" class="navbar-brand">
      <img class="logo-1" src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif+JqxFGkBjIwXs1M3EMoAJtliEuj...Vo9P89"
          style="position: absolute; width: 140px; top: -15px; left: -20px"
          width="160px"
        />
        <img class="logo-2" src="data:image/png;base64,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"
          style="position: absolute; width: 40px; top: 8px; left: 10px"
        />
        <span class="logo-1" style="margin-left: 100px;font-weight:bold;">.</span>
        <span class="logo-2" style="margin-left: 50px;font-weight:bold;">Sam Collins</span>
        </a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        style="border: none" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
      >
        <i class="fas fa-search color-black" style="margin-right: 10px"></i>
        <i @click="navigateSidebar('true')" class="fas fa-bars color-black"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav" style="margin-left: 120px">
          <a href="/indexes" class="nav-item nav-link">Cryptocurrencies</a>
          <a href="/whatWeOffer" class="nav-item nav-link active">What We Offer</a>
          <a href="/whyBitcoin" class="nav-item nav-link">Why Bitcoin</a>
          <a href="/whoItWork" class="nav-item nav-link">Who It Works</a>
        </div>
        <div class="navbar-nav ml-auto">
          <a href="/profile" class="nav-item nav-link"
            ><i class="fas fa-user" style="color: black"></i
          ></a>
        </div>
      </div>
    </nav>
    <br /><br /><br><br>
    <div class="global-status">
      <p>
        <span class="global-status-heading">Market Cap: </span
        ><span class="global-status-detail">$1,715,605,569,999</span
        ><span class="dot">.</span
        ><span class="global-status-heading">24h Vol: </span
        ><span class="global-status-detail">$184,345,540,849</span
        ><span class="dot">.</span
        ><span class="global-status-heading">BTC Dominance: </span
        ><span class="global-status-detail">61.5%</span
        ><span class="dot">.</span
        ><span class="global-status-heading">Cryptocurrencies: </span
        ><span class="global-status-detail">8,532</span>
      </p>
      <hr class="divider" />
    </div>
    <section
      id="takeit"
      class="StaticLayout__Section-sc-1ir3foe-0 ControlHomepage__SectionHome-lzy6fr-0 dNfCSv"
    >
      <div class="Flex-l69ttv-0 Overview__Wrapper-hj28j1-0 bjzQqm">
        <h2 class="Overview__Title-hj28j1-1 exXSgk">
          Take it as Your payment Gateway
        </h2>
        <p class="Overview__Subtitle-hj28j1-2 ifjWvU">
          Block 360 has a variety of features that make it the best place to
          start trading
        </p>
        <div class="Flex-l69ttv-0 Overview__AppFeatures-hj28j1-3 jVPCLp">
          <div class="Flex-l69ttv-0 Overview__LeftCol-hj28j1-7 fGsAlA">
            <div class="Flex-l69ttv-0 Overview__Feature-hj28j1-4 gJxfuM">
              <div class="Overview__FeatureIcon-hj28j1-5 gPznmT">
                <svg width="30" height="32" viewBox="0 0 30 32">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#D4EEFF" d="M10 32h10V10H10z"></path>
                    <path fill="#1752F0" d="M20 32h10V0H20z"></path>
                    <path fill="#55B4FC" d="M0 32h10V19H0z"></path>
                  </g>
                </svg>
              </div>
              <div>
                <h2 class="f16vhz33">Manage your Payment</h2>
                <p class="Overview__FeatureText-hj28j1-6 ksnJqm">
                  Sending and Getting Prices, keep track of them in the one
                  place.
                </p>
              </div>
            </div>
            <div class="Flex-l69ttv-0 Overview__Feature-hj28j1-4 gJxfuM">
              <div class="Overview__FeatureIcon-hj28j1-5 gPznmT">
                <svg width="36" height="38" viewBox="0 0 36 38">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5M29.688 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5"
                      fill="#D4EEFF"
                    ></path>
                    <path fill="#D4EEFF" d="M0 38h35.625V4.75H0z"></path>
                    <path fill="#55B4FC" d="M0 11.875h35.625V4.75H0z"></path>
                    <path
                      d="M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5"
                      fill="#D4EEFF"
                    ></path>
                    <path
                      d="M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5"
                      fill="#1752F0"
                    ></path>
                    <path
                      d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5"
                      fill="#D4EEFF"
                    ></path>
                    <path
                      d="M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5"
                      fill="#1752F0"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M4.75 34.438h26.125V11.875H4.75z"
                    ></path>
                    <path
                      fill="#1752F0"
                      d="M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z"
                    ></path>
                    <path
                      fill="#1752F0"
                      d="M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <h2 class="f16vhz33">Recurring buys</h2>
                <p class="Overview__FeatureText-hj28j1-6 ksnJqm">
                  Invest in cryptocurrency slowly over time by scheduling buys
                  daily, weekly, or monthly.
                </p>
              </div>
            </div>
            <div class="Flex-l69ttv-0 Overview__Feature-hj28j1-4 gJxfuM">
              <div class="Overview__FeatureIcon-hj28j1-5 gPznmT">
                <svg width="30" height="33" viewBox="0 0 30 33" fill="none">
                  <path
                    d="M15 0C9.106 0 4.284 4.64 4.284 11.344V25.78h21.429V11.344C25.714 4.64 20.892 0 14.999 0z"
                    fill="#D4EEFF"
                  ></path>
                  <path d="M30 12.375H0V33h30V12.375z" fill="#56B4FC"></path>
                  <path
                    d="M25.714 12.375H4.285v16.5h21.429v-16.5z"
                    fill="#1652F0"
                  ></path>
                  <path
                    d="M15 18.563l2.84 6.187h-5.68L15 18.562z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M15 20.625c1.184 0 2.143-.923 2.143-2.063 0-1.139-.96-2.062-2.143-2.062-1.183 0-2.143.923-2.143 2.063 0 1.139.96 2.062 2.143 2.062z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <div>
                <h2 class="f16vhz33">Vault protection</h2>
                <p class="Overview__FeatureText-hj28j1-6 ksnJqm">
                  For added security, store your funds in a vault with time
                  delayed withdrawals.
                </p>
              </div>
            </div>
            <div class="Flex-l69ttv-0 Overview__Feature-hj28j1-4 gJxfuM">
              <!--  <div class="Overview__FeatureIcon-hj28j1-5 gPznmT">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M36 2.25H0v31.5h36V2.25z" fill="#D4EEFF"></path>
                      <path
                        d="M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z"
                        fill="#56B4FC"
                      ></path>
                      <path d="M29.25 2.25H6.75v31.5h22.5V2.25z" fill="#1652F0"></path>
                      <path
                        d="M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z"
                        fill="#56B4FC"
                      ></path>
                      <path
                        d="M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h2 class="f16vhz33">Mobile apps</h2>
                    <p class="Overview__FeatureText-hj28j1-6 ksnJqm">
                      Stay on top of the markets with the Coinbase app for
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://play.google.com/store/apps/details?id=com.coinbase.android"
                        >Android</a
                      >
                      or
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://itunes.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730"
                        >iOS</a
                      >.
                    </p>
                  </div> -->
            </div>
          </div>
          <div class="Overview__ImageGallery-hj28j1-8 kRVUCY">
            <picture>
              <source
                srcSet="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp"
                type="image/webp"
              />
              <img
                src=""
                alt="Coinbase Desktop and Mobile App"
                loading="lazy"
              />
              <!-- <img src="https://swastiksolution.in/pics/payment.png" alt="Coinbase Desktop and Mobile App" loading="lazy" -->
              <!-- <img src="https://d1dh93s7n44ml6.cloudfront.net/blog/wp-content/uploads/2017/02/26213235/What-Are-Payment-Gateways-and-How-Do-They-Work_v001.jpg" alt="Coinbase Desktop and Mobile App" loading="lazy" -->
            </picture>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebar: 'false'
    }
  },
  methods: {
    navigateSidebar (sidebar) {
      this.sidebar = sidebar
    }
  }
}
</script>

<style scoped>
#what {
  margin: -8px;
  margin-top: -60px;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

main {
  display: block;
}
.active{
  font-weight: bold;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  box-sizing: border-box;
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

body,
html {
  height: 100%;
  margin: 0;
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

html.lock-scroll {
  position: fixed;
  width: 100%;
}

* {
  box-sizing: border-box;
}

a {
  color: #0667d0;
  text-decoration: none;
}

@font-face {
  font-display: optional;
  font-family: Graphik;
  font-style: normal;
  font-stretch: normal;
  font-weight: 400;
  src: url();
}

@font-face {
  font-display: optional;
  font-family: Graphik;
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  src: url();
}

@font-face {
  font-display: optional;
  font-family: Graphik;
  font-style: normal;
  font-stretch: normal;
  font-weight: 600;
  src: url();
}

@font-face {
  font-display: optional;
  font-family: Graphik;
  font-style: italic;
  font-stretch: normal;
  font-weight: 400;
  src: url();
}
</style>
<style data-styled="" data-styled-version="5.1.1">
.gaVUrq {
  display: flex;
  flex-direction: row;
}
/*!sc*/

data-styled.g1[id="Flex-l69ttv-0"] {
  content: "gaVUrq,";
}
/*!sc*/

.cicsNy {
  display: block;
  margin: 0;
}
/*!sc*/

.kFFKOl {
  display: block;
}
/*!sc*/

.eanOvs {
  display: block;
  margin: 0;
  margin-bottom: 16px;
}
/*!sc*/

data-styled.g2[id="TextElement__Spacer-hxkcw5-0"] {
  content: "cicsNy,kFFKOl,eanOvs,";
}
/*!sc*/

.gDLwQC {
  font-family: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  line-height: 1.3;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
}
/*!sc*/

.fBsrTz {
  font-family: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  line-height: 1.3;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}
/*!sc*/

.dDzcmO {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: rgba(17, 51, 83, 0.6);
  font-size: 18px;
  font-weight: 400;
}
/*!sc*/

.kwgTEs {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: #050f19;
  font-size: 18px;
  font-weight: 400;
}
/*!sc*/

.iOKVsz {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: #df5f67;
  font-size: 18px;
  font-weight: 400;
}
/*!sc*/

.fDAWfV {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: #050f19;
  font-size: 32px;
  font-weight: 500;
}
/*!sc*/

.iFwGec {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: #050f19;
  font-size: 22px;
  font-weight: 500;
}
/*!sc*/

.cVkuSR {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  line-height: 1.3;
  color: #050f19;
  font-size: 18px;
  font-weight: 500;
}
/*!sc*/

data-styled.g3[id="Header__StyledHeader-sc-1xiyexz-0"] {
  content: "gDLwQC,fBsrTz,dDzcmO,kwgTEs,iOKVsz,fDAWfV,iFwGec,cVkuSR,";
}
/*!sc*/

.jWobek {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: #050f19;
}
/*!sc*/

.jWobek strong {
  font-weight: 500;
}
/*!sc*/

data-styled.g4[id="Body__StyledBody-sc-17wx6cn-0"] {
  content: "jWobek,";
}
/*!sc*/

.lFUTY {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
}
/*!sc*/

data-styled.g9[id="StaticLayout__Section-sc-1ir3foe-0"] {
  content: "lFUTY,";
}
/*!sc*/

.lhuSVi {
  padding: 4px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #eceeef;
}
/*!sc*/

@media (min-width: 769px) {
  .lhuSVi {
    margin-right: 16px;
  }
}
/*!sc*/

.lhuSVi:hover {
  cursor: pointer;
  border-color: #1652f0;
}
/*!sc*/

data-styled.g54[id="LanguageSelector__Select-sc-1xhf8co-0"] {
  content: "lhuSVi,";
}
/*!sc*/

.head {
  grid-row: 1 / 2;
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(12, minmax(5rem, 1fr));
  grid-gap: 0.5rem;
  justify-items: start;
  align-items: center;
  background-image: url(../assets/images/header.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: stretch;
  opacity: 0.9;
}

@media only screen and (max-width: 56.25em) {
  .head {
    grid-column: 1 / -1;
    background-image: none;
    background-color: #cacfd2;
  }
}

.head--logo {
  margin: 3vh 0rem 0rem 9vw;
}

@media only screen and (max-width: 37.5em) {
  .head--logo {
    margin-left: 2rem;
  }
}

.head--logo img {
  width: 15rem;
  height: 3rem;
}

.head__nav {
  margin: 3vh 0rem 0rem 2.5vw;
  grid-column: 5 / -1;
}

@media only screen and (max-width: 75em) {
  .head__nav {
    margin: 3vh 0rem 0rem 0vw;
    grid-column: 4 / -1;
  }
}

@media only screen and (max-width: 56.25em) {
  .head__nav {
    align-self: start;
    grid-column: 1 / -1;
    margin-left: 9vw;
  }
}

@media only screen and (max-width: 37.5em) {
  .head__nav {
    margin-left: 2rem;
  }
}

.head__nav--btn {
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  display: inline-block;
  border-radius: 0.5rem;
  background-color: transparent;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 75em) {
  .head__nav--btn {
    font-size: 1.4rem;
    padding: 0.8rem 1.1rem;
  }
}

@media only screen and (max-width: 56.25em) {
  .head__nav--btn {
    font-size: 1.8rem;
    padding: 0.8rem 0.5rem;
    margin: 0.5rem;
  }
}

.head__nav--home {
  color: #0000ff;
}

.head__nav--login {
  font-size: 1.2rem;
  background-color: #082440;
  color: #fff;
  margin-right: 1rem;
  transition: all 0.2s;
}

#login-nav {
  background-color: #082440;
}

@media only screen and (max-width: 56.25em) {
  .head__nav--login {
    padding: 1rem 1.5rem;
  }
}

.head__nav--login:hover {
  /* .btn:hover */
  transform: translateY(-3px);
  /* move up according to orignal state. */
  background-color: #ffffff;
}

.head__nav--login:active {
  transform: translateY(0);
  border: none;
}

.head__nav--contactagain {
  font-size: 1.2rem;
  border: 1px solid #082440;
  transition: all 0.2s;
}

@media only screen and (max-width: 56.25em) {
  .head__nav--contactagain {
    padding: 1rem 1.5rem;
  }
}

.head__nav--contactagain:hover {
  /* .btn:hover */
  transform: translateY(-3px);
  /* move up according to orignal state. */
}

.head__nav--contactagain:active {
  transform: translateY(0);
  border: none;
}

.head--heading {
  grid-column: 1 / 6;
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  color: #000;
  padding-left: 140px;
}

@media only screen and (max-width: 75em) {
  .head--heading {
    grid-column: 1 / -1;
  }
}

.head--btn {
  grid-column: 1 / -1;
  margin: 3vh 0rem 15vh 9vw;
}

.head--btn,
.head--btn:link,
.head--btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.6rem 6rem;
  /* top/bottom=15px, left/right=40px */
  display: inline-block;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #082440;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.head--btn:hover {
  /* .btn:hover */
  transform: translateY(-3px);
  /* move up according to orignal state. */
  background-color: #0f3051;
}

.head--btn:active {
  transform: translateY(0);
  border: none;
}

.kPdpmY {
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.kPdpmY:hover {
  transition: color ease 0.25s;
}
/*!sc*/

.hfBqui {
  color: rgba(17, 51, 83, 0.6);
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.hfBqui:hover {
  color: #0a46e4;
  transition: color ease 0.25s;
}
/*!sc*/

.ihobGW {
  color: #1652f0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.ihobGW:hover {
  color: #0a46e4;
  transition: color ease 0.25s;
}
/*!sc*/

data-styled.g55[id="Link__A-eh4rrz-0"] {
  content: "kPdpmY,hfBqui,ihobGW,";
}
/*!sc*/

.kygqzr {
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.kygqzr:hover {
  color: rgba(255, 255, 255, 0.8);
  transition: color ease 0.25s;
}
/*!sc*/

.kJFcGy {
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.kJFcGy:hover {
  transition: color ease 0.25s;
}
/*!sc*/

.ldIqDo {
  color: rgba(17, 51, 83, 0.6);
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.ldIqDo:hover {
  color: #0a46e4;
  transition: color ease 0.25s;
}
/*!sc*/

.UdRAK {
  color: #1652f0;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.UdRAK:hover {
  transition: color ease 0.25s;
}
/*!sc*/

data-styled.g56[id="Link__ARouterLink-eh4rrz-1"] {
  content: "kygqzr,kJFcGy,jfdven,ldIqDo,UdRAK,";
}
/*!sc*/

.ensdyo {
  font-size: 16px;
  margin: 6px 0;
  opacity: 0.7;
  color: #113355;
  text-decoration: none;
  max-width: 170px;
}
/*!sc*/

@media (max-width: 560px) {
  .ensdyo {
    max-width: none;
  }
}
/*!sc*/

.ensdyo:hover {
  text-decoration: underline;
}
/*!sc*/

@media (max-width: 560px) {
  .ensdyo {
    font-size: 18px;
  }
}
/*!sc*/

data-styled.g57[id="FooterLink__StyledLink-sc-1alprlm-0"] {
  content: "ensdyo,";
}
/*!sc*/

.ePrQOm {
  font-size: 16px;
  margin: 6px 0;
  opacity: 0.7;
  color: #113355;
  text-decoration: none;
  max-width: 170px;
  margin-top: 0;
}
/*!sc*/

@media (max-width: 560px) {
  .ePrQOm {
    max-width: none;
  }
}
/*!sc*/

@media (max-width: 768px) {
  .ePrQOm {
    font-size: 18px;
  }
}
/*!sc*/

data-styled.g58[id="Copyright-sc-7mfqhn-0"] {
  content: "ePrQOm,";
}
/*!sc*/

.NpFSg {
  font-size: 16px;
  margin: 6px 0;
  opacity: 0.7;
  color: #113355;
  text-decoration: none;
  max-width: 170px;
  margin: 6px 2px;
}
/*!sc*/

@media (max-width: 560px) {
  .NpFSg {
    max-width: none;
  }
}
/*!sc*/

@media (max-width: 560px) {
  .NpFSg {
    font-size: 18px;
  }
}
/*!sc*/

data-styled.g65[id="Social__Spacer-sc-1klxvix-0"] {
  content: "NpFSg,";
}
/*!sc*/

.cKPfNf {
  width: 100%;
}
/*!sc*/

data-styled.g66[id="Footer__Container-sc-1nr3vef-0"] {
  content: "cKPfNf,";
}
/*!sc*/

.dcNFOZ {
  display: flex;
  flex-direction: row;
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  justify-content: space-between;
  background: #ffffff;
}
/*!sc*/

data-styled.g67[id="Footer__FooterWrapper-sc-1nr3vef-1"] {
  content: "dcNFOZ,";
}
/*!sc*/

.dbesGR {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
}
/*!sc*/

@media (max-width: 768px) {
  .dbesGR {
    flex-direction: column;
  }
}
/*!sc*/

data-styled.g68[id="Footer__LinkColumns-sc-1nr3vef-2"] {
  content: "dbesGR,";
}
/*!sc*/

.hcQCjm {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 20%;
}
/*!sc*/

@media (max-width: 768px) {
  .hcQCjm {
    max-width: none;
  }
}
/*!sc*/

data-styled.g69[id="Footer__Links-sc-1nr3vef-3"] {
  content: "hcQCjm,";
}
/*!sc*/

.FQIAq {
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #113355;
}
/*!sc*/

@media (max-width: 768px) {
  .FQIAq {
    font-size: 18px;
  }
}
/*!sc*/

data-styled.g70[id="Footer__LinkHeading-sc-1nr3vef-4"] {
  content: "FQIAq,";
}
/*!sc*/

.inxrDc {
  display: block;
  margin-bottom: 32px;
  width: 90px;
}
/*!sc*/

@media (max-width: 768px) {
  .inxrDc {
    width: 120px;
  }
}
/*!sc*/

data-styled.g71[id="Footer__CoinbaseLogo-sc-1nr3vef-5"] {
  content: "inxrDc,";
}
/*!sc*/

.gAPBMs {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
/*!sc*/

data-styled.g72[id="Footer__BrandInfo-sc-1nr3vef-6"] {
  content: "gAPBMs,";
}
/*!sc*/

.hetRGe {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 90px 24px 100px;
  color: #ffffff;
}
/*!sc*/

data-styled.g73[id="Footer__FooterSection-sc-1u6akxu-0"] {
  content: "hetRGe,";
}
/*!sc*/

.fMeEDN {
  position: relative;
  width: auto;
  margin: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: all 80ms ease-in-out;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid #ffffff;
  background-color: transparent;
}
/*!sc*/

.fMeEDN:disabled {
  opacity: 0.5;
}
/*!sc*/

.fMeEDN:focus {
  outline: none;
}
/*!sc*/

.fMeEDN:hover {
  color: #263543;
  background-color: #ffffff;
}
/*!sc*/

.dViAFr {
  position: relative;
  width: auto;
  margin: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: all 80ms ease-in-out;
  padding: 24px;
  font-size: 16px;
  border: 1px solid #05b169;
  background-color: #05b169;
}
/*!sc*/

.dViAFr:disabled {
  opacity: 0.5;
}
/*!sc*/

.dViAFr:focus {
  outline: none;
}
/*!sc*/

.dViAFr:hover {
  background-color: #00a55d;
  border-color: #00a55d;
  color: #ffffff;
}
/*!sc*/

.dViAFr:active {
  border: 1px solid #00a55d;
  background-color: #00a55d;
}
/*!sc*/

.ipNNSv {
  position: relative;
  width: auto;
  margin: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: all 80ms ease-in-out;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid #05b169;
  background-color: #05b169;
}
/*!sc*/

.ipNNSv:disabled {
  opacity: 0.5;
}
/*!sc*/

.ipNNSv:focus {
  outline: none;
}
/*!sc*/

.ipNNSv:hover {
  background-color: #00a55d;
  border-color: #00a55d;
  color: #ffffff;
}
/*!sc*/

.ipNNSv:active {
  border: 1px solid #00a55d;
  background-color: #00a55d;
}
/*!sc*/

.bzMVkb {
  position: relative;
  width: auto;
  margin: 0px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: all 80ms ease-in-out;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid #1652f0;
  background-color: rgb(55, 0, 182);
}
/*!sc*/

.bzMVkb:disabled {
  opacity: 0.5;
}
/*!sc*/

.bzMVkb:focus {
  outline: none;
}
/*!sc*/

.bzMVkb:hover {
  background-color: #0a46e4;
  border-color: #0a46e4;
}
/*!sc*/

.bzMVkb:active {
  border: 1px solid #0039d7;
  background-color: #0039d7;
}
/*!sc*/

.bzMVkb:disabled {
  opacity: 0.5;
  background-color: #1652f0;
}
/*!sc*/

data-styled.g74[id="Button__Container-opcph8-0"] {
  content: "fMeEDN,dViAFr,ipNNSv,bzMVkb,";
}
/*!sc*/

.cnRbMa {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-family: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-weight: 500;
}
/*!sc*/

.bcOwKs {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 500;
}
/*!sc*/

data-styled.g75[id="Button__Content-opcph8-1"] {
  content: "cnRbMa,bcOwKs,";
}
/*!sc*/

.grIKaG {
  display: inline-block;
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 14px;
  color: #050f19;
  word-break: break-all;
  word-break: break-word;
}
/*!sc*/

data-styled.g77[id="Text__Font-sc-163p65w-0"] {
  content: "grIKaG,";
}
/*!sc*/

.goLVRO {
  font-size: 12px;
  color: #ffffff;
}
/*!sc*/

data-styled.g79[id="EarnTag__TextContent-sc-1lhcy16-0"] {
  content: "goLVRO,";
}
/*!sc*/

.iDWAhL {
  user-select: none;
  display: inline-flex;
  align-self: flex-start;
  padding: 4px 6px;
  border-radius: 3px;
  background: #05b169;
  color: #ffffff;
  align-self: center;
  position: relative;
  padding: 3px 8px;
  margin-left: 6px;
}
/*!sc*/

data-styled.g80[id="EarnTag__StyledTag-sc-1lhcy16-1"] {
  content: "iDWAhL,";
}
/*!sc*/

.bKdRd {
  font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(17, 51, 83, 0.6);
  transition: color 80ms ease-in-out;
}
/*!sc*/

data-styled.g84[id="Label__StyledLabel-sc-15jxzvg-0"] {
  content: "bKdRd,";
}
/*!sc*/

.eROCu {
  position: relative;
}
/*!sc*/

data-styled.g104[id="TooltipTrigger__Container-jtmhjj-0"] {
  content: "eROCu,";
}
/*!sc*/

.gLpIJF {
  display: inline-flex;
}
/*!sc*/

data-styled.g110[id="HeaderNavItem__StyledToolTipTrigger-sc-34h4r7-0"] {
  content: "gLpIJF,";
}
/*!sc*/

.fyaidb {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
}
/*!sc*/

data-styled.g111[id="HeaderNavItem__EarnNavContainer-sc-34h4r7-1"] {
  content: "fyaidb,";
}
/*!sc*/

.lcfvDK {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 16px;
}
/*!sc*/

data-styled.g112[id="HeaderNavItem__EarnTagContainer-sc-34h4r7-2"] {
  content: "lcfvDK,";
}
/*!sc*/

.jsaPHg {
  fill: #fff;
  margin-left: 5px;
}
/*!sc*/

data-styled.g113[id="HeaderNavItem__StyledChevron-sc-34h4r7-3"] {
  content: "jsaPHg,";
}
/*!sc*/

.hECCnY {
  display: block;
  transition: all 150ms ease;
}
/*!sc*/

.hECCnY:hover {
  opacity: 0.8;
}
/*!sc*/

data-styled.g114[id="HeaderNavItem__LinkStyle-sc-34h4r7-4"] {
  content: "hECCnY,";
}
/*!sc*/

.buhmHf {
  padding: 0;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: inherit;
  text-decoration: none;
  transition: color ease 0.25s;
}
/*!sc*/

.buhmHf:hover {
  opacity: 0.8;
  transition: color ease 0.25s;
}
/*!sc*/

.buhmHf:focus {
  outline: none;
  box-shadow: none;
}
/*!sc*/

data-styled.g115[id="HeaderNavItem__ButtonDropdown-sc-34h4r7-5"] {
  content: "buhmHf,";
}
/*!sc*/

.ictdMy {
  display: block;
  transition: all 150ms ease;
  display: "flex";
}
/*!sc*/

.ictdMy:hover {
  opacity: 0.8;
}
/*!sc*/

data-styled.g116[id="HeaderNavItem__LoginLink-sc-34h4r7-6"] {
  content: "ictdMy,";
}
/*!sc*/

.epthqp {
  display: flex;
  flex-direction: row;
  display: flex;
  position: relative;
  bottom: -1px;
  height: 100%;
  align-items: center;
}
/*!sc*/

@media (max-width: 768px) {
  .epthqp {
    display: none;
  }
}
/*!sc*/

data-styled.g117[id="HeaderNavItem__NavItem-sc-34h4r7-7"] {
  content: "epthqp,";
}
/*!sc*/

.lfUtKr {
  height: 0;
}
/*!sc*/

data-styled.g118[id="HeaderNavigation__DetachedPlaceholder-sc-5vu4vd-0"] {
  content: "lfUtKr,";
}
/*!sc*/

.cnkAbp {
  position: static;
  height: 72px;
  min-height: 26px;
  width: 100%;
  top: -104px;
  right: 0;
  left: 0;
  background: transparent;
  border-bottom: none;
  z-index: 2;
  transition: top 0.3s ease;
}
/*!sc*/

data-styled.g119[id="HeaderNavigation__Wrapper-sc-5vu4vd-1"] {
  content: "cnkAbp,";
}
/*!sc*/

.giFKoa {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0;
}
/*!sc*/

data-styled.g120[id="HeaderNavigation__InnerWrapper-sc-5vu4vd-2"] {
  content: "giFKoa,";
}
/*!sc*/

.dxiGS {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}
/*!sc*/

@media (max-width: 768px) {
  .dxiGS {
    display: none;
  }
}
/*!sc*/

data-styled.g121[id="HeaderNavigation__SignupContainer-sc-5vu4vd-3"] {
  content: "dxiGS,";
}
/*!sc*/

.gPpkjJ {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
}
/*!sc*/

.gPpkjJ > * {
  flex-shrink: 0;
  margin-right: 24px;
}
/*!sc*/

@media (max-width: 768px) {
  .gPpkjJ {
    display: none;
  }
}
/*!sc*/

data-styled.g122[id="HeaderNavigation__DesktopMenu-sc-5vu4vd-4"] {
  content: "gPpkjJ,";
}
/*!sc*/

.dCIZag {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}
/*!sc*/

data-styled.g123[id="HeaderNavigation__SideContainer-sc-5vu4vd-5"] {
  content: "dCIZag,";
}
/*!sc*/

.iycgKt {
  display: flex;
  flex-direction: row;
}
/*!sc*/

data-styled.g124[id="HeaderNavigation__EndContainer-sc-5vu4vd-6"] {
  content: "iycgKt,";
}
/*!sc*/

.fESSlR {
  display: flex;
  align-items: center;
  flex-direction: row;
}
/*!sc*/

data-styled.g125[id="HeaderNavigation__EndContainerButtons-sc-5vu4vd-7"] {
  content: "fESSlR,";
}
/*!sc*/

.caNXFc {
  position: relative;
  height: 22px;
  fill: #ffffff;
  margin-right: 20px;
}
/*!sc*/

data-styled.g126[id="HeaderNavigation__Logo-sc-5vu4vd-8"] {
  content: "caNXFc,";
}
/*!sc*/

.gWmVFF {
  white-space: nowrap;
  margin-left: 16px;
}
/*!sc*/

data-styled.g127[id="HeaderNavigation__GetStartedButton-sc-5vu4vd-9"] {
  content: "gWmVFF,";
}
/*!sc*/

.cZpRmI {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
}
/*!sc*/

data-styled.g128[id="HeaderLoggedout__Section-jyoqee-0"] {
  content: "cZpRmI,";
}
/*!sc*/

.bOghLQ {
  position: absolute;
  top: -1000em;
  left: -1000em;
}
/*!sc*/

data-styled.g129[id="HeaderLoggedout__SkipToContentLinkContainer-jyoqee-1"] {
  content: "bOghLQ,";
}
/*!sc*/

.cXANxY {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: transparent;
}
/*!sc*/

data-styled.g130[id="Layout__Container-tuminz-0"] {
  content: "cXANxY,";
}
/*!sc*/

.hzACMs {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1 1 50%;
  width: 100%;
}
/*!sc*/

.kzqAjX {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1 1 50%;
  width: 100%;
}
/*!sc*/

.ciNoZ {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1 1 50%;
  width: 100%;
}
/*!sc*/

data-styled.g254[id="Banner__Spacer-sc-1ezuqog-0"] {
  content: "hzACMs,kzqAjX,ciNoZ,";
}
/*!sc*/

.bCQvZB {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  z-index: 1;
  min-width: 250px;
}
/*!sc*/

@media (max-width: 768px) {
  .bCQvZB {
    margin-left: 24px;
    max-width: 250px;
    align-items: center;
    text-align: center;
  }
}
/*!sc*/

@media (max-width: 560px) {
  .bCQvZB {
    max-width: 325px;
    margin-left: 0;
    padding: 0 16px;
  }
}
/*!sc*/

data-styled.g255[id="Banner__Content-sc-1ezuqog-1"] {
  content: "bCQvZB,";
}
/*!sc*/

.fceMXU {
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  position: relative;
  background-color: #ffffff;
  height: auto;
  width: 100%;
}
/*!sc*/

@media (max-width: 768px) {
  .fceMXU {
    flex-direction: column;
    height: auto;
    overflow: unset;
    contain-intrinsic-size: 100vw px;
  }
}
/*!sc*/

.dNGPCl {
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  position: relative;
  background-color: #e9f6ff;
  height: 460px;
  width: 100%;
  overflow: hidden;
}
/*!sc*/

@media (max-width: 768px) {
  .dNGPCl {
    flex-direction: column;
    height: 500px;
    overflow: unset;
    contain-intrinsic-size: 100vw 500px;
  }
}
/*!sc*/

data-styled.g256[id="Banner__Container-sc-1ezuqog-2"] {
  content: "fceMXU,dNGPCl,";
}
/*!sc*/

.hpqmkQ {
  width: fit-content;
}
/*!sc*/

data-styled.g257[id="EarnFooterBanner__StyledButton-k2senj-0"] {
  content: "hpqmkQ,";
}
/*!sc*/

.bUineL {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  max-width: 750px;
  height: auto;
}
/*!sc*/

.bUineL picture,
.bUineL img {
  width: 100%;
}
/*!sc*/

@media (max-width: 560px) {
  .bUineL {
    width: 100%;
    max-width: 100%;
  }
}
/*!sc*/

data-styled.g258[id="EarnFooterBanner__ImageContainer-k2senj-1"] {
  content: "bUineL,";
}
/*!sc*/

.QnXxB {
  margin-top: 8px;
  width: 455px;
  display: flex;
  border-radius: 8px;
}
/*!sc*/

@media (max-width: 560px) {
  .QnXxB {
    width: 100%;
    flex-direction: column;
  }
}
/*!sc*/

.QnXxB input {
  flex: 1;
  margin-right: 10px;
  padding: 13px 16px 15px;
  border-radius: 4px;
  appearance: none;
  border: none;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  color: #0b3466;
}
/*!sc*/

@media (max-width: 560px) {
  .QnXxB input {
    margin-right: 0px;
  }
}
/*!sc*/

@media (max-width: 560px) {
  .QnXxB button {
    margin: 12px 0;
    text-align: center;
  }
}
/*!sc*/

data-styled.g451[id="EmailInput__Form-sc-10151ca-0"] {
  content: "QnXxB,";
}
/*!sc*/

.dAGoVa {
  white-space: normal;
}
/*!sc*/

@media (max-width: 768px) {
  .dAGoVa {
    width: min-content;
  }
}
/*!sc*/

data-styled.g488[id="MoreAssetsRow__StyledHeader-sc-1g0rumx-0"] {
  content: "dAGoVa,";
}
/*!sc*/

.kLlxvt {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 22px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #e7ebee;
  transition: box-shadow 500ms, opacity 500ms, z-index 0ms ease-out 500ms;
  cursor: pointer;
  opacity: 0.9;
  margin-bottom: 0;
  margin-top: -1px;
  display: flex;
  width: 100%;
  padding: 24px;
  border: none !important;
  white-space: nowrap;
}
/*!sc*/

.kLlxvt:hover {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  opacity: 1;
  z-index: 1;
  position: relative;
}
/*!sc*/

@media (max-width: 768px) {
  .kLlxvt {
    padding: 16px;
  }
}
/*!sc*/

data-styled.g489[id="MoreAssetsRow__Container-sc-1g0rumx-1"] {
  content: "kLlxvt,";
}
/*!sc*/

.gBZVcZ {
  display: flex;
  align-items: center;
  justify-content: center;
}
/*!sc*/

@media (max-width: 768px) {
  .gBZVcZ {
    justify-content: start;
  }
}
/*!sc*/

data-styled.g490[id="MoreAssetsRow__Block-sc-1g0rumx-2"] {
  content: "gBZVcZ,";
}
/*!sc*/

.dksWvu {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}
/*!sc*/

@media (max-width: 768px) {
  .dksWvu {
    justify-content: start;
  }
}
/*!sc*/

data-styled.g491[id="MoreAssetsRow__Block2-sc-1g0rumx-3"] {
  content: "dksWvu,";
}
/*!sc*/

.kxvRBd {
  height: 38px;
  width: 38px;
  margin-right: 15px;
}
/*!sc*/

data-styled.g492[id="MoreAssetsRow__Icon-sc-1g0rumx-4"] {
  content: "kxvRBd,";
}
/*!sc*/

.bYwkFr {
  margin: 0 16px;
}
/*!sc*/

@media (max-width: 768px) {
  .bYwkFr {
    display: none;
  }
}
/*!sc*/

data-styled.g493[id="MoreAssetsRow__SubTitle-sc-1g0rumx-5"] {
  content: "bYwkFr,";
}
/*!sc*/

.iQueXQ {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #05b169;
  font-weight: 500;
}
/*!sc*/

@media (max-width: 768px) {
  .iQueXQ {
    font-size: 16px;
    line-height: 21px;
  }
}
/*!sc*/

data-styled.g495[id="AssetHelper__CTADetails-m3wdys-0"] {
  content: "iQueXQ,";
}
/*!sc*/

.jKUteZ {
  display: block;
  margin: 12px 0 0 24px;
  font-weight: 500;
}
/*!sc*/

data-styled.g498[id="EarnUpsellBanner__ViewMore-ygvhwr-0"] {
  content: "jKUteZ,";
}
/*!sc*/

.feRCoC {
  width: fit-content;
  margin-bottom: 24px;
}
/*!sc*/

data-styled.g499[id="EarnUpsellBanner__StyledButton-ygvhwr-1"] {
  content: "feRCoC,";
}
/*!sc*/

.jwNrPK {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  flex-grow: 1;
}
/*!sc*/

@media (max-width: 768px) {
  .jwNrPK {
    min-width: 300px;
  }
}
/*!sc*/

@media (max-width: 560px) {
  .jwNrPK {
    min-width: unset;
    width: 100%;
  }
}
/*!sc*/

data-styled.g500[id="EarnUpsellBanner__AssetsSection-ygvhwr-2"] {
  content: "jwNrPK,";
}
/*!sc*/

.cAlHKD {
  width: 100%;
}
/*!sc*/

data-styled.g501[id="EarnUpsellBanner__MoreAssetsContainer-ygvhwr-3"] {
  content: "cAlHKD,";
}
/*!sc*/

.eWonXt {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px 0px;
}
/*!sc*/

@media (max-width: 560px) {
  .eWonXt {
    text-align: center;
  }
}
/*!sc*/

data-styled.g502[id="Features__Wrapper-o1awuh-0"] {
  content: "eWonXt,";
}
/*!sc*/

.jlfhDm {
  margin-top: 0px;
  margin-bottom: 21px;
  line-height: 48px;
  font-size: 40px;
  color: #0f3256;
  font-weight: 500;
}
/*!sc*/

data-styled.g503[id="Features__Title-o1awuh-1"] {
  content: "jlfhDm,";
}
/*!sc*/

.rMIVK {
  font-size: 18px;
  color: #90a1b8;
  margin: 0;
}
/*!sc*/

data-styled.g504[id="Features__Subtitle-o1awuh-2"] {
  content: "rMIVK,";
}
/*!sc*/

.fNsxbm {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  flex-direction: row;
}
/*!sc*/

@media (max-width: 560px) {
  .fNsxbm {
    flex-direction: column;
  }
}
/*!sc*/

data-styled.g505[id="Features__FeatureWrapper-o1awuh-3"] {
  content: "fNsxbm,";
}
/*!sc*/

.jfpckp {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px;
  text-align: center;
}
/*!sc*/

@media (max-width: 560px) {
  .jfpckp {
    margin-bottom: 40px;
  }
}
/*!sc*/

data-styled.g506[id="Features__Feature-o1awuh-4"] {
  content: "jfpckp,";
}
/*!sc*/

.rNGTa {
  margin-top: 72px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 500;
  color: #002f6b;
}
/*!sc*/

data-styled.g507[id="Features__FeatureTitle-o1awuh-5"] {
  content: "rNGTa,";
}
/*!sc*/

.lbdxIi {
  color: #90a1b8;
  margin: 14px 0 23px;
  line-height: 24px;
  font-size: 16px;
}
/*!sc*/

data-styled.g508[id="Features__FeatureSubtitle-o1awuh-6"] {
  content: "lbdxIi,";
}
/*!sc*/

.iaSkTW {
  line-height: 28px;
}
/*!sc*/

data-styled.g509[id="Features__FeatureLink-o1awuh-7"] {
  content: "iaSkTW,";
}
/*!sc*/

.hYafng {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 725px;
}
/*!sc*/

@media (max-width: 768px) {
  .hYafng {
    text-align: center;
    align-items: center;
  }
}
/*!sc*/

data-styled.g510[id="HeroCTA__CTAContainer-sc-1rcc3uj-0"] {
  content: "hYafng,";
}
/*!sc*/

.frmXXS {
  font-size: 48px;
  font-weight: 800;
  line-height: 52px;
}
/*!sc*/

@media (max-width: 560px) {
  .frmXXS {
    font-size: 28px;
    line-height: 40px;
  }
}
/*!sc*/

data-styled.g511[id="HeroCTA__HeroTitle-sc-1rcc3uj-1"] {
  content: "frmXXS,";
}
/*!sc*/

.imdAVR {
  margin: 24px 0;
  font-size: 16px;
  line-height: 28px;
}
/*!sc*/

data-styled.g512[id="HeroCTA__HeroSubtitle-sc-1rcc3uj-2"] {
  content: "imdAVR,";
}
/*!sc*/

.gvghTv {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
  justify-content: center;
}
/*!sc*/

data-styled.g519[id="Hero__InputContainer-sc-1o85dom-6"] {
  content: "gvghTv,";
}
/*!sc*/

.gXtUcN {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 35px 24px;
}
/*!sc*/

@media (max-width: 768px) {
  .gXtUcN {
    padding: 0 24px;
  }
}
/*!sc*/

@media (max-width: 560px) {
  .gXtUcN {
    padding: 0;
  }
}
/*!sc*/

data-styled.g520[id="Hero__PaddingContainer-sc-1o85dom-7"] {
  content: "gXtUcN,";
}
/*!sc*/

.bjzQqm {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 60px;
}
/*!sc*/

@media (max-width: 560px) {
  .bjzQqm {
    text-align: center;
  }
}
/*!sc*/

data-styled.g521[id="Overview__Wrapper-hj28j1-0"] {
  content: "bjzQqm,";
}
/*!sc*/

.exXSgk {
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 500;
  color: #0f3256;
  text-align: center;
}
/*!sc*/

data-styled.g522[id="Overview__Title-hj28j1-1"] {
  content: "exXSgk,";
}
/*!sc*/

.ifjWvU {
  color: #90a1b8;
  text-align: center;
}
/*!sc*/

data-styled.g523[id="Overview__Subtitle-hj28j1-2"] {
  content: "ifjWvU,";
}
/*!sc*/

.jVPCLp {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  flex-direction: column-reverse;
  align-items: center;
}
/*!sc*/

@media (min-width: 1170px) {
  .jVPCLp {
    margin-top: 60px;
    flex-direction: row;
    justify-content: space-between;
  }
}
/*!sc*/

data-styled.g524[id="Overview__AppFeatures-hj28j1-3"] {
  content: "jVPCLp,";
}
/*!sc*/

.gJxfuM {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}
/*!sc*/

@media (max-width: 560px) {
  .gJxfuM {
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
  }
  .gJxfuM:before {
    width: 0px;
  }
}
/*!sc*/

data-styled.g525[id="Overview__Feature-hj28j1-4"] {
  content: "gJxfuM,";
}
/*!sc*/

.gPznmT {
  margin-top: -8px;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  margin-right: 28px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 16px rgba(218, 225, 233, 0.557943);
}
/*!sc*/

@media (max-width: 560px) {
  .gPznmT {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
  }
}
/*!sc*/

data-styled.g526[id="Overview__FeatureIcon-hj28j1-5"] {
  content: "gPznmT,";
}
/*!sc*/

.ksnJqm {
  margin: 0px;
  line-height: 1.6;
  color: #838fa0;
}
/*!sc*/

data-styled.g527[id="Overview__FeatureText-hj28j1-6"] {
  content: "ksnJqm,";
}
/*!sc*/

.fGsAlA {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 0px;
  flex: 1;
}
/*!sc*/

@media (min-width: 1170px) {
  .fGsAlA {
    margin-top: 0;
    margin-right: 18px;
  }
}
/*!sc*/

data-styled.g528[id="Overview__LeftCol-hj28j1-7"] {
  content: "fGsAlA,";
}
/*!sc*/

.kRVUCY {
  max-width: 700px;
}
/*!sc*/

.kRVUCY picture,
.kRVUCY img {
  width: 100%;
}
/*!sc*/

@media (max-width: 560px) {
  .kRVUCY {
    max-width: 327px;
  }
}
/*!sc*/

data-styled.g529[id="Overview__ImageGallery-hj28j1-8"] {
  content: "kRVUCY,";
}
/*!sc*/

.cdfFYq {
  display: block;
  fill: none;
}
/*!sc*/

data-styled.g532[id="SparkLine__Svg-sc-9wg5ja-0"] {
  content: "cdfFYq,";
}
/*!sc*/

.kDnVnu {
  stroke-width: 1.7;
  stroke: rgba(17, 51, 83, 0.3);
  pointer-events: none;
}
/*!sc*/

data-styled.g533[id="SparkLine__Path-sc-9wg5ja-1"] {
  content: "kDnVnu,";
}
/*!sc*/

.fDpZyr {
  background: #ffffff;
  user-select: none;
}
/*!sc*/

.fDpZyr:last-child {
  border-bottom: 0;
}
/*!sc*/

.fDpZyr:hover {
  background: rgba(17, 51, 83, 0.02);
}
/*!sc*/

data-styled.g535[id="AssetTableRow__Row-bzcx4v-1"] {
  content: "fDpZyr,";
}
/*!sc*/

.hWYkXX {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: default;
  position: relative;
  width: 85px;
}
/*!sc*/

.hWYkXX:first-child {
  padding-left: 32px;
}
/*!sc*/

.hWYkXX:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .hWYkXX {
    padding: 14px 24px 14px 0;
  }
  .hWYkXX:first-child {
    padding-left: 24px;
  }
  .hWYkXX:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

@media (max-width: 768px) {
  .hWYkXX {
    padding-right: 14px;
    width: unset;
  }
}
/*!sc*/

data-styled.g537[id="AssetTableRow__IndexColumn-bzcx4v-3"] {
  content: "hWYkXX,";
}
/*!sc*/

.jKKyYd {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: pointer;
  min-width: 140px;
}
/*!sc*/

.jKKyYd:first-child {
  padding-left: 32px;
}
/*!sc*/

.jKKyYd:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .jKKyYd {
    padding: 14px 24px 14px 0;
  }
  .jKKyYd:first-child {
    padding-left: 24px;
  }
  .jKKyYd:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

data-styled.g538[id="AssetTableRow__NameColumn-bzcx4v-4"] {
  content: "jKKyYd,";
}
/*!sc*/

.dJsuaC {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  flex-direction: row;
}
/*!sc*/

data-styled.g539[id="AssetTableRow__NameColumnInner-bzcx4v-5"] {
  content: "dJsuaC,";
}
/*!sc*/

.iLRMMM {
  display: flex;
  flex-direction: row;
  align-items: center;
}
/*!sc*/

.iLRMMM h4 {
  padding-left: 16px;
}
/*!sc*/

@media (max-width: 768px) {
  .iLRMMM {
    flex-direction: column;
    align-items: flex-start;
  }
}
/*!sc*/

data-styled.g540[id="AssetTableRow__NameColumnRow-bzcx4v-6"] {
  content: "iLRMMM,";
}
/*!sc*/

.ghCgMA {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: default;
  width: 132px;
}
/*!sc*/

.ghCgMA:first-child {
  padding-left: 32px;
}
/*!sc*/

.ghCgMA:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .ghCgMA {
    padding: 14px 24px 14px 0;
  }
  .ghCgMA:first-child {
    padding-left: 24px;
  }
  .ghCgMA:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

data-styled.g541[id="AssetTableRow__PriceColumn-bzcx4v-7"] {
  content: "ghCgMA,";
}
/*!sc*/

.OsTUg {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
/*!sc*/

.OsTUg .asset-table-percent-change {
  display: none;
}
/*!sc*/

@media (max-width: 768px) {
  .OsTUg {
    flex-direction: column;
    align-items: flex-end;
  }
  .OsTUg .asset-table-percent-change {
    display: unset;
  }
}
/*!sc*/

data-styled.g542[id="AssetTableRow__PriceColumnInner-bzcx4v-8"] {
  content: "OsTUg,";
}
/*!sc*/

.dsPQVr {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: default;
  width: 100px;
  padding: 5px;
  padding-right: 25px;
}
/*!sc*/

.dsPQVr:first-child {
  padding-left: 32px;
}
/*!sc*/

.dsPQVr:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .dsPQVr {
    padding: 14px 24px 14px 0;
  }
  .dsPQVr:first-child {
    padding-left: 24px;
  }
  .dsPQVr:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

data-styled.g543[id="AssetTableRow__ChartColumn-bzcx4v-9"] {
  content: "dsPQVr,";
}
/*!sc*/

.khMzcw {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: default;
  width: 70px;
}
/*!sc*/

.khMzcw:first-child {
  padding-left: 32px;
}
/*!sc*/

.khMzcw:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .khMzcw {
    padding: 14px 24px 14px 0;
  }
  .khMzcw:first-child {
    padding-left: 24px;
  }
  .khMzcw:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

data-styled.g545[id="AssetTableRow__TradeColumn-bzcx4v-11"] {
  content: "khMzcw,";
}
/*!sc*/

.eWcrcU {
  text-align: left;
}
/*!sc*/

data-styled.g548[id="AssetTableRow__StyledHeaderLight-bzcx4v-14"] {
  content: "eWcrcU,";
}
/*!sc*/

.inPOHG {
  text-align: left;
}
/*!sc*/

data-styled.g549[id="AssetTableRow__StyledHeaderDark-bzcx4v-15"] {
  content: "inPOHG,";
}
/*!sc*/

.gDZxaI {
  padding: 14px 48px 14px 0;
  border-top: 1px solid #eceff1;
  cursor: default;
  width: 100px;
  margin-right: 20px;
  text-align: left;
  padding-right: 2px;
}
/*!sc*/

.gDZxaI:first-child {
  padding-left: 32px;
}
/*!sc*/

.gDZxaI:last-child {
  padding-right: 32px;
  width: 70px;
}
/*!sc*/

@media (max-width: 768px) {
  .gDZxaI {
    padding: 14px 24px 14px 0;
  }
  .gDZxaI:first-child {
    padding-left: 24px;
  }
  .gDZxaI:last-child {
    padding-right: 24px;
  }
}
/*!sc*/

@media (max-width: 768px) {
  .gDZxaI {
    text-align: right;
    margin-right: 0;
  }
}
/*!sc*/

data-styled.g550[id="AssetTableRow__PercentChangeColumn-bzcx4v-16"] {
  content: "gDZxaI,";
}
/*!sc*/

.hiXhZK {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  height: 100%;
  top: 0;
  opacity: 0;
  padding: inherit;
  transition: opacity 0.25s;
}
/*!sc*/

data-styled.g551[id="AssetTableRow__ReorderListIconContainer-bzcx4v-17"] {
  content: "hiXhZK,";
}
/*!sc*/

.bgcZor {
  display: block;
  width: 15px;
  height: 15px;
  margin-left: -6px;
  cursor: grab;
}
/*!sc*/

data-styled.g552[id="AssetTableRow__ReorderListIcon-bzcx4v-18"] {
  content: "bgcZor,";
}
/*!sc*/

.fgsiwR {
  flex-shrink: 0;
}
/*!sc*/

data-styled.g553[id="AssetTableRow__Icon-bzcx4v-19"] {
  content: "fgsiwR,";
}
/*!sc*/

.gcVqXC {
  padding: 0;
  border: none;
  transition: opacity 300ms;
}
/*!sc*/

data-styled.g554[id="AssetTable__AssetTableBody-sc-1hzgxt1-0"] {
  content: "gcVqXC,";
}
/*!sc*/

.hdtgTo {
  width: 100%;
  padding: 0;
  background: #ffffff;
  border-spacing: 0px;
  border-collapse: separate;
  caption-side: top;
}
/*!sc*/

data-styled.g555[id="AssetTable__Table-sc-1hzgxt1-1"] {
  content: "hdtgTo,";
}
/*!sc*/

.ifvEvw {
  width: 100%;
}
/*!sc*/

data-styled.g556[id="AssetTable__TableWrap-sc-1hzgxt1-2"] {
  content: "ifvEvw,";
}
/*!sc*/

.igjkkt {
  border: none;
}
/*!sc*/

data-styled.g557[id="AssetTableHelpers__Head-sc-1o9oxiy-0"] {
  content: "igjkkt,";
}
/*!sc*/

.hBIYtO {
  display: flex;
  align-items: center;
}
/*!sc*/

data-styled.g558[id="AssetTableHelpers__Column-sc-1o9oxiy-1"] {
  content: "hBIYtO,";
}
/*!sc*/

.eajQoS {
  font-weight: 400;
}
/*!sc*/

data-styled.g559[id="AssetTableHelpers__ColumnLabel-sc-1o9oxiy-2"] {
  content: "eajQoS,";
}
/*!sc*/

.hkhubj {
  padding: 16px;
  padding-left: 0;
  text-align: left;
}
/*!sc*/

.hkhubj:first-child {
  padding-left: 32px;
}
/*!sc*/

.hkhubj:last-child {
  padding-right: 32px;
}
/*!sc*/

data-styled.g561[id="AssetTableHelpers__Th-sc-1o9oxiy-4"] {
  content: "hkhubj,";
}
/*!sc*/

.bOnkOC {
  border-bottom: 1px solid #eceff1;
}
/*!sc*/

.bOnkOC:first-child {
  border-top: 1px solid 1px solid #eceff1;
}
/*!sc*/

data-styled.g564[id="AssetTableHelpers__Row-sc-1o9oxiy-7"] {
  content: "bOnkOC,";
}
/*!sc*/

.cPqKDE {
  padding: 12px 16px;
  white-space: nowrap;
}
/*!sc*/

data-styled.g565[id="PricesTable__TradeButton-sc-1uwln1z-0"] {
  content: "cPqKDE,";
}
/*!sc*/

.iZSDKj {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 60px 0px;
}
/*!sc*/

@media (max-width: 560px) {
  .iZSDKj {
    text-align: center;
  }
}
/*!sc*/

data-styled.g566[id="Quickstart__Wrapper-r2y3l6-0"] {
  content: "iZSDKj,";
}
/*!sc*/

.IbSbt {
  margin: 0;
  line-height: 48px;
  font-size: 40px;
  color: #0f3256;
  font-weight: 500;
}
/*!sc*/

data-styled.g567[id="Quickstart__Title-r2y3l6-1"] {
  content: "IbSbt,";
}
/*!sc*/

.jQlRGn {
  margin-top: 14px;
  line-height: 28px;
  font-size: 16px;
  color: #043169;
  opacity: 0.7;
  font-weight: 400;
}
/*!sc*/

data-styled.g568[id="Quickstart__Subtitle-r2y3l6-2"] {
  content: "jQlRGn,";
}
/*!sc*/

.dptiub {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 60px;
}
/*!sc*/

@media (max-width: 560px) {
  .dptiub {
    flex-direction: column;
  }
}
/*!sc*/

data-styled.g569[id="Quickstart__Steps-r2y3l6-3"] {
  content: "dptiub,";
}
/*!sc*/

.eYDFyM {
  text-align: center;
}
/*!sc*/

.eYDFyM img {
  width: 70px;
  height: 70px;
}
/*!sc*/

@media (max-width: 560px) {
  .eYDFyM {
    margin-bottom: 40px;
  }
}
/*!sc*/

data-styled.g570[id="Quickstart__Step-r2y3l6-4"] {
  content: "eYDFyM,";
}
/*!sc*/

.hXKAJf {
  margin: 0;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #233143;
  font-weight: 500;
}
/*!sc*/

data-styled.g571[id="Quickstart__StepTitle-r2y3l6-5"] {
  content: "hXKAJf,";
}
/*!sc*/

.jMLglJ {
  flex: 1;
  height: 1px;
  margin-top: 40px;
  background-color: #bac5d4;
}
/*!sc*/

@media (max-width: 560px) {
  .jMLglJ {
    display: none;
  }
}
/*!sc*/

data-styled.g572[id="Quickstart__Line-r2y3l6-6"] {
  content: "jMLglJ,";
}
/*!sc*/

.fkUfJX {
  background: rgb(55, 0, 182);
}
/*!sc*/

data-styled.g573[id="Stats__Backdrop-mgmfao-0"] {
  content: "fkUfJX,";
}
/*!sc*/

.iddqpw {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  margin: 40px 0px;
}
/*!sc*/

@media (max-width: 560px) {
  .iddqpw {
    flex-direction: column;
  }
}
/*!sc*/

data-styled.g574[id="Stats__Wrapper-mgmfao-1"] {
  content: "iddqpw,";
}
/*!sc*/

.kesOkd {
  flex: 1;
  text-align: center;
}
/*!sc*/

@media (max-width: 560px) {
  .kesOkd {
    flex-direction: column;
    margin-bottom: 60px;
  }
  .kesOkd:last-child {
    margin-bottom: 0px;
  }
}
/*!sc*/

data-styled.g575[id="Stats__Stat-mgmfao-2"] {
  content: "kesOkd,";
}
/*!sc*/

.kEIzWR {
  margin: 0;
  margin-bottom: 12px;
  line-height: 48px;
  font-size: 56px;
  font-weight: 500;
}
/*!sc*/

data-styled.g576[id="Stats__Number-mgmfao-3"] {
  content: "kEIzWR,";
}
/*!sc*/

.bLDeOz {
  line-height: 24px;
  font-size: 16px;
  opacity: 0.7;
}
/*!sc*/

data-styled.g577[id="Stats__Description-mgmfao-4"] {
  content: "bLDeOz,";
}
/*!sc*/

.dNfCSv {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
}
/*!sc*/

@media (max-width: 560px) {
  .dNfCSv {
    padding: 0 24px;
  }
}
/*!sc*/

data-styled.g578[id="ControlHomepage__SectionHome-lzy6fr-0"] {
  content: "dNfCSv,";
}
/*!sc*/

.iHhval {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
  justify-content: center;
}
/*!sc*/

data-styled.g579[id="ControlHomepage__HeroSection-lzy6fr-1"] {
  content: "iHhval,";
}
/*!sc*/

.fbVSuX {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
/*!sc*/

data-styled.g580[id="ControlHomepage__BannerContainer-lzy6fr-2"] {
  content: "fbVSuX,";
}
/*!sc*/

.guMaIE {
  background-color: rgb(55, 0, 182);
  /* background-color: #1652f0; */
}
/*!sc*/

data-styled.g581[id="ControlHomepage__Backdrop-lzy6fr-3"] {
  content: "guMaIE,";
}
/*!sc*/

.hOGjIa {
  width: 100%;
  height: 1px;
  background-color: #dae1e9;
}
/*!sc*/

data-styled.g583[id="ControlHomepage__Divider-lzy6fr-5"] {
  content: "hOGjIa,";
}
/*!sc*/

.fbjeLh {
  position: relative;
}
/*!sc*/

data-styled.g584[id="ControlHomepage__PricesTablePositioner-lzy6fr-6"] {
  content: "fbjeLh,";
}
/*!sc*/

.kcfMNB {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
  flex-direction: column;
  padding: 0;
  max-width: 1142px;
  border: 1px solid #eceff1;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(17, 51, 83, 0.02);
}
/*!sc*/

@media (max-width: 768px) {
  .kcfMNB {
    border: none;
  }
}
/*!sc*/

data-styled.g585[id="ControlHomepage__PricesTableSection-lzy6fr-7"] {
  content: "kcfMNB,";
}
/*!sc*/

.jhdrIe {
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #1652f0;
  height: 175px;
  width: 100%;
}
/*!sc*/

data-styled.g586[id="ControlHomepage__PricesBackdrop-lzy6fr-8"] {
  content: "jhdrIe,";
}

#GetStartedd:hover {
  color: black;
}

.whybtc {
  grid-row: 5 / 6;
  grid-column: full-start / full-end;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 10vh 23vw 0vh 23vw;
}

#started-btn:hover {
  background-color: rgb(95, 95, 95);
}
@media only screen and (max-width: 56.25em) {
  .whybtc {
    margin: 10vh 10vw 0vw 10vw;
  }
}
.whybtc--head {
  font-size: 2rem;
  color: rgb(65, 65, 65);
}
.whybtc--para {
  margin-top: 1rem;
  align-self: center;
  font-size: 1.2rem;
  color: #424949;
  text-align: center;
  color: rgb(114, 114, 114);
}
@media only screen and (max-width: 56.25em) {
  .whybtc--para {
    font-size: 2rem;
  }
}

.reasons {
  grid-row: 6 / 7;
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(12, minmax(min-content, 1fr));
  grid-gap: 1rem;
  align-items: center;
  margin: 0vh 8vw 5vh 8vw;
  margin-top: -50px;
  color: rgb(114, 114, 114);
}
@media only screen and (max-width: 56.25em) {
  .reasons {
    margin: 5vh 8vw;
  }
}
.reasons__left {
  grid-column: 1 / 4;
  font-size: 1.6rem;
}
@media only screen and (max-width: 56.25em) {
  .reasons__left {
    grid-column: 1 / -1;
  }
}
.reasons__left__one {
  margin: 0rem 0rem 3rem 0rem;
}
.reasons__left__one--head {
  margin-bottom: 1.5rem;
  margin-right: 18rem;
  border-bottom: 0.1rem solid lightskyblue;
  width: 150px;
  font-size: 18px;
  text-align: start;
  color: rgb(65, 65, 65);
}
@media only screen and (max-width: 56.25em) {
  .reasons__left__one--head {
    margin-right: 0rem;
    border-bottom: none;
    text-align: start;
  }
}
.reasons__left__one--para {
  font-size: 1.5rem;
  color: #424949;
  text-align: start;
  font-size: 17px;
}
@media only screen and (max-width: 56.25em) {
  .reasons__left__one--para {
    font-size: 1.5rem;
  }
}
.reasons__left__two--head {
  margin-bottom: 1.5rem;
  margin-right: 11rem;
  border-bottom: 0.1rem solid lightskyblue;
  width: 230px;
  text-align: start;
  font-size: 18px;
  color: rgb(65, 65, 65);
}
@media only screen and (max-width: 56.25em) {
  .reasons__left__two--head {
    margin-right: 0rem;
    border-bottom: none;
  }
}
.reasons__left__two--para {
  font-size: 1.5rem;
  color: #424949;
  font-size: 17px;
  text-align: start;
}
@media only screen and (max-width: 56.25em) {
  .reasons__left__two--para {
    font-size: 2rem;
  }
}
.reasons__mid {
  grid-column: 4 / 10;
}
@media only screen and (max-width: 56.25em) {
  .reasons__mid {
    grid-column: 1 / -1;
  }
}
.reasons__mid img {
  padding-top: 5rem;
  width: 100%;
  height: 100%;
}
.reasons__right {
  align-self: center;
  grid-column: 10 / -1;
  font-size: 1.6rem;
}
@media only screen and (max-width: 56.25em) {
  .reasons__right {
    grid-column: 1 / -1;
  }
}
.reasons__right--head {
  margin-bottom: 1.65em;
  margin-right: 13rem;
  border-bottom: 0.1rem solid lightskyblue;
  width: 250px;
  text-align: start;
  color: rgb(65, 65, 65);
  font-size: 19px;
}
@media only screen and (max-width: 56.25em) {
  .reasons__right--head {
    margin-right: 0rem;
    border-bottom: none;
  }
}
.reasons__right--para {
  color: #424949;
  text-align: start;
  font-size: 17px;
}
@media only screen and (max-width: 56.25em) {
  .reasons__right--para {
    font-size: 1.5rem;
  }
}
</style>
