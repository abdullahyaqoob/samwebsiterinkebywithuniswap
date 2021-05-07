<template>
  <div
    class="hello" style="overflow: hidden"
    :class="
      changeModeIndex === 'lightTheme'
        ? 'helloForLightTheme'
        : 'helloForDarkTheme'
    "
  >
    <div class="side-bar" v-if="sidebar === 'true'">
      <br /><br />
      <span
        @click="navigateSidebar('false')"
        style="float: right; margin-right: 20px; color: white; cursor: pointer"
        ><img
          src="https://cdn4.iconfinder.com/data/icons/arrow-68/48/36-512.png"
          width="20px"
        /> </span
      ><br /><br />
      <h4 class="sidebarName" style="color: white">Sam Collins</h4>
      <br />
      <h4 class="sidebarItems">
        <a href="/indexes" class="sidebarLinks">Cryptocurrencies</a>
      </h4>
      <br />
      <h4 class="sidebarItems">
        <a href="/whatWeOffer" class="sidebarLinks">What We Offer</a>
      </h4>
      <br />
      <h4 class="sidebarItems">
        <a href="/whyBitcoin" class="sidebarLinks">Why Bitcoin</a>
      </h4>
      <br />
      <h4 class="sidebarItems">
        <a href="/whoItWork" class="sidebarLinks">Who It Works</a>
      </h4>
      <div
        class="navbar-nav ml-auto istBtn"
        id="color-btns"
        :class="
          changeModeIndex === 'lightTheme' ? 'displayInherit' : 'displayNone'
        "
      >
        <button
          class="change-color-site"
          id="changeModeIndexMoon"
          @click="changeIndexMode('darkTheme')"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'changeColorSiteForLight'
              : 'changeColorSiteForDark'
          "
        >
          <!-- @click="navigateMode('true')"
               id="changeMode1"   CLASS k aagay likha huwa tah -->
          <span
            class="red-btn"
            :class="
              changeModeIndex === 'darkTheme' ? 'displayNone' : 'displayInherit'
            "
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
                transform: rotate(360deg);
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
      <div
        class="navbar-nav ml-auto sndBtn"
        id="color-btns"
        :class="
          changeModeIndex === 'lightTheme' ? 'displayNone' : 'displayInherit'
        "
      >
        <button
          class="change-color-site"
          id="changeModeIndexMoon"
          @click="changeIndexMode('lightTheme')"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'changeColorSiteForLight'
              : 'changeColorSiteForDark'
          "
        >
          <!-- @click="navigateMode('true')"
               id="changeMode1"   CLASS k aagay likha huwa tah -->
          <span
            class="sun-like"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'displayNone'
                : 'displayInherit'
            "
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
                transform: rotate(360deg);
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
    <div v-if="page === 'buySell'">
      <div v-if="infoDiv === 'connected'">
        <div
          class="accountAddress"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'accountAddressForLightTheme'
              : 'accountAddressForDarkTheme'
          "
        >
          <span>{{ accountAddress }}</span>
        </div>
        <div
          class="accountBalance"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'accountBalanceForLightTheme'
              : 'accountBalanceForDarkTheme'
          "
        >
          <span>{{ withoutPoint }} ETH</span>
        </div>
      </div>
    </div>
    <nav
      class="navbar navbar-expand-md navbar-light"
      :class="
        changeModeIndex === 'lightTheme'
          ? 'navbarForLightTheme'
          : 'navbarForDarkTheme'
      "
    >
      <a href="/" class="navbar-brand">
        <img
          class="logo-1"
          src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif+JqxFGkBjIwXs1M3EMoAJtliEuj...Vo9P89"
          style="position: absolute; width: 140px; top: -15px; left: -20px"
          width="160px"
        />
        <img
          class="logo-2"
          src="../assets/images/block360.png"
          style="position: absolute; width: 40px; top: 8px; left: 10px"
        />
        <span
          class="logo-1"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'logo1ForLightTheme'
              : 'logo1ForDarkTheme'
          "
          style="margin-left: 100px; font-weight: bold"
          >.</span
        >
        <span
          class="logo-2"
          style="margin-left: 50px"
          id="marginTopMinusFive"
          :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
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
        <i
          class="fas fa-search" id="marginTopMinusFive"
          :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
          style="margin-right: 10px"
        ></i>
        <i
          @click="navigateSidebar('true')" id="marginTopMinusFive"
          class="fas fa-bars"
          :class="changeModeIndex === 'darkTheme' ? 'colorWhite' : 'colorBlack'"
        ></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav" style="margin-left: 120px">
          <router-link
            to="/indexes"
            class="nav-item nav-link active"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'activeForLightTheme'
                : 'activeForDarkTheme'
            "
            >Cryptocurrencies</router-link
          >
          <router-link
            to="/whatWeOffer"
            class="nav-item nav-link"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'navlinkForLightTheme'
                : 'navlinkForDarkTheme'
            "
            >What We Offer</router-link
          >
          <router-link
            to="/whyBitcoin"
            class="nav-item nav-link"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'navlinkForLightTheme'
                : 'navlinkForDarkTheme'
            "
            >Why Bitcoin</router-link
          >
          <router-link
            to="/whoItWork"
            class="nav-item nav-link"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'navlinkForLightTheme'
                : 'navlinkForDarkTheme'
            "
            >Who It Works</router-link
          >
        </div>
        <div class="navbar-nav ml-auto">
          <div
            class="navbar-nav ml-auto istBtn"
            id="color-btns"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'displayInherit'
                : 'displayNone'
            "
          >
            <button
              class="change-color-site"
              id="changeModeIndexMoon"
              @click="changeIndexMode('darkTheme')"
              :class="
                changeModeIndex === 'lightTheme'
                  ? 'changeColorSiteForLight'
                  : 'changeColorSiteForDark'
              "
            >
              <!-- @click="navigateMode('true')"
               id="changeMode1"   CLASS k aagay likha huwa tah -->
              <span
                class="red-btn"
                :class="
                  changeModeIndex === 'darkTheme'
                    ? 'displayNone'
                    : 'displayInherit'
                "
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
                    transform: rotate(360deg);
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
          <div
            class="navbar-nav ml-auto sndBtn"
            id="color-btns"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'displayNone'
                : 'displayInherit'
            "
          >
            <button
              class="change-color-site"
              id="changeModeIndexMoon"
              @click="changeIndexMode('lightTheme')"
              :class="
                changeModeIndex === 'lightTheme'
                  ? 'changeColorSiteForLight'
                  : 'changeColorSiteForDark'
              "
            >
              <!-- @click="navigateMode('true')"
               id="changeMode1"   CLASS k aagay likha huwa tah -->
              <span
                class="sun-like"
                :class="
                  changeModeIndex === 'lightTheme'
                    ? 'displayNone'
                    : 'displayInherit'
                "
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
                    transform: rotate(360deg);
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
          <a href="/profile" class="nav-item nav-link"
            ><i
              class="fas fa-user" style="position:relative;top:7px;"
              :class="
                changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
              "
            ></i
          ></a>
        </div>
      </div>
    </nav>
    <hr class="divide" />
    <br /><br /><br /><br />
    <div class="global-status">
      <p>
        <span class="global-status-heading">Market Cap: </span
        ><span
          class="global-status-detail"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'globalstatusDetailForLightTheme'
              : 'globalstatusDetailForDarkTheme'
          "
          >$1,715,605,569,999</span
        ><span class="dot">.</span
        ><span class="global-status-heading">24h Vol: </span
        ><span
          class="global-status-detail"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'globalstatusDetailForLightTheme'
              : 'globalstatusDetailForDarkTheme'
          "
          >$184,345,540,849</span
        ><span class="dot">.</span
        ><span class="global-status-heading">BTC Dominance: </span
        ><span
          class="global-status-detail"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'globalstatusDetailForLightTheme'
              : 'globalstatusDetailForDarkTheme'
          "
          >61.5%</span
        ><span class="dot">.</span
        ><span class="global-status-heading">Cryptocurrencies: </span
        ><span
          class="global-status-detail"
          :class="
            changeModeIndex === 'lightTheme'
              ? 'globalstatusDetailForLightTheme'
              : 'globalstatusDetailForDarkTheme'
          "
          >8,532</span
        >
      </p>
      <hr class="divider" />
    </div>
    <div></div>
    <div v-if="page === 'mainPage'">
      <div>
        <!-- <img
        src="https://static2.clutch.co/s3fs-public/logos/5122x.png?9LLY4hBhGYxh3oX_CPKPjrYEIRu4AFOS"
        width="100px"
        height="100px"
      /><span style="font-size: 30px; margin-left: 20px">Block360</span -->
        <img
          class="add-img"
          id="lightPageBanner"
          :class="
            changeModeIndex === 'lightTheme' ? 'heroImgForLight' : 'displayNone'
          "
          src="http://www.globalethicalbanking.com/wp-content/uploads/2020/07/23-zoya.jpg"
          width="1000px"
          height="250px"
        />
        <img
          class="add-img2"
          id="darkPageBanner"
          :class="changeModeIndex === 'lightTheme' ? 'displayNone' : 'displayInherit'"
          src="https://i.graphicmama.com/blog/wp-content/uploads/2019/11/01141506/black-web-banner-design.jpg"
          width="1000px"
          height="250px"
        />

        <br /><br />
      </div>

      <div class="table-main-div">
        <table
          class="table"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
        >
          <thead style="position: sticky">
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th></th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          <div v-if="loading" class="loading-div" :class="changeModeIndex === 'lightTheme' ? 'displayNone' : 'displayInherit'">
            <div style="margin-top: 50px" class="spinner-border text-light loading_class" id="loadingImg" role="status">
          </div>
            <span class="loading_class loading_text">Loading...</span>
          </div>
          <div v-if="loading" class="loading-div" :class="changeModeIndex === 'lightTheme' ? 'displayInherit' : 'displayNone'">
            <div style="margin-top: 50px" class="spinner-border text-dark loading_class" id="loadingImg" role="status">
          </div>
            <span class="loading_class loading_text">Loading...</span>
          </div>
          <tbody v-else>
            <tr
              v-for="(indexes, index) in arrayOfIndex"
              :key="index"
              @click="furtherCoinData(indexes)"
            >
              <td>{{ index + 1 }}</td>
              <td><img class="indexesImage" :src="indexes.image" /></td>
              <td class="alignStart">{{ indexes.name }}</td>
              <td>{{ commaFunc("$" + indexes.current_price) }}</td>
              <td>
                <span
                  :class="
                    indexes.price_change_percentage_1h_in_currency === null
                      ? 'normal'
                      : indexes.price_change_percentage_1h_in_currency > 0
                      ? 'text-success'
                      : 'text-danger'
                  "
                >
                  {{
                    indexes.price_change_percentage_1h_in_currency === null
                      ? "?"
                      : formatPercent(
                          indexes.price_change_percentage_1h_in_currency
                        ) + "%"
                  }}
                </span>
              </td>
              <td>
                <span
                  :class="
                    indexes.price_change_percentage_24h === null
                      ? 'normal'
                      : indexes.price_change_percentage_24h > 0
                      ? 'text-success'
                      : 'text-danger'
                  "
                >
                  {{
                    indexes.price_change_percentage_24h === null
                      ? "?"
                      : formatPercent(indexes.price_change_percentage_24h) + "%"
                  }}
                  <!-- {{ formatPercent(indexes.price_change_percentage_24h) + '%' }} -->
                </span>
              </td>
              <td>
                <span
                  :class="
                    indexes.price_change_percentage_7d_in_currency === null
                      ? 'normal'
                      : indexes.price_change_percentage_7d_in_currency > 0
                      ? 'text-success'
                      : 'text-danger'
                  "
                >
                  {{
                    indexes.price_change_percentage_7d_in_currency === null
                      ? "?"
                      : formatPercent(
                          indexes.price_change_percentage_7d_in_currency
                        ) + "%"
                  }}
                </span>
              </td>
              <td>
                {{
                  indexes.total_volume === null
                    ? "?"
                    : commaFunc("" + indexes.total_volume)
                }}
              </td>
              <td>
                {{
                  indexes.market_cap === null
                    ? "?"
                    : commaFunc("" + indexes.market_cap)
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="page === 'buySell'">
      <div class="furtherPage">
        <div
          class="cross"
          style="
            position: absolute;
            right: 100px;
            cursor: pointer;
            margin-top: -10px;
          "
          @click="navigatePage('mainPage')"
        >
          <span
            ><img id="curvedArrow"
              src="https://cdn4.iconfinder.com/data/icons/arrow-68/48/36-512.png"
              width="20px"
              :class="
                changeModeIndex === 'lightTheme'
                  ? 'displayInherit'
                  : 'displayNone'
              "
          /></span>
          <span
            ><img id="curvedArrow"
              src="../assets/curvedArrow.png"
              width="20px"
              :class="
                changeModeIndex === 'lightTheme'
                  ? 'displayNone'
                  : 'displayInherit'
              "
          /></span>
        </div>
        <div class="success" v-if="transactionSuccess === 'true'">
          <!-- <div class="overLay"></div> -->
          <a href="/indexes"
            ><img src="../assets/images/cross.png" class="crossModel"
          /></a>
          <img class="successImg" src="../assets/images/successTick.png" />
          <h4 class="successHeading">Congratulations</h4>
          <p
            class="successSubHeading"
            :class="
              changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorBlack'
            "
          >
            Your Transaction is successfully completed.
          </p>
          <p class="successHash">
            <span
              class="successTransactionText"
              :class="
                changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorBlack'
              "
              >Transaction Hash: </span
            ><span
              class="successHashNumber"
              :class="
                changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorBlack'
              "
              >{{ transactionHash }}</span
            >
          </p>
          <a href="/indexes"><button class="successBtn">Home</button></a>
        </div>
        <div class="copyContractDiv" v-if="tokenContractPopup === true">
        <!-- <div class="copyContractDiv"> -->
          <p class="copyContractText">Please Copy the mainnet token Contract address and paste it in select a token button Search.</p>
        </div>
        <div class="checkout">
          <h5
            class="about-heading"
            :class="
              changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
            "
          >
            <img class="imgfont" :src="furtherCoinDetail.image.small" />
            <span class="fontSizes">{{ furtherCoinDetail.name }}
            <span class="coinSymbol">({{ furtherCoinDetail.symbol }})</span></span>
          </h5>
          <div
            class="about-sub-heading"
            :class="
              changeModeIndex === 'lightTheme'
                ? 'colorForAboutSubHeading'
                : 'colorWhite'
            "
          >
            <img
              src="../assets/images/heart.png"
              class="interestHeart"
              width="23px"
            />{{ furtherCoinDetail.public_interest_stats.alexa_rank }} people
            take interest in this coin <br /><br /><br />
            <p v-if="furtherCoinDetail.market_cap_rank !== ''">
              Market Cap:
              <span
                ><span
                  class="rankBox"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'stylingForRankBoxLightTheme'
                      : 'stylingForRankBoxDarkTheme'
                  "
                  >Rank #{{ furtherCoinDetail.market_cap_rank }}</span
                ></span
              >
            </p>
            <p>
              Website:
              <span style="margin-left: 34px"
                ><span v-if="furtherCoinDetail.links.homepage[0] !== ''"
                  class="infoTokens"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >{{ furtherCoinDetail.links.homepage[0] }}</span
                >
                <span v-if="furtherCoinDetail.links.announcement_url[0] !== ''"
                  class="infoTokens"
                  id="secondWebsiteName"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >{{ furtherCoinDetail.links.announcement_url[0] }}</span
                ></span
              >
            </p>
            <p>
              Explorers:
              <span style="margin-left: 24px"
                ><span
                  class="infoTokens"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >Etherscan</span
                >
                <span
                  class="infoTokens"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >Ethplorer</span
                ></span
              >
            </p>
            <p v-if="tokensmartAddress !== ''">
              Contract:
              <span style="margin-left: 30px"
                ><span
                  class="infoTokens"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >{{ tokensmartAddress }} </span
                ><button
                  class="tooltips"
                  v-clipboard:copy="tokensmartAddress"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span class="tooltiptexts" id="myTooltips"
                    >Copy to clipboard</span
                  ><img
                    class="icon-copy"
                    src="../assets/images/content_copy-black-18dp.svg"
                    alt=""
                  /></button
              ></span>
            </p>
            <p>
              Community:
              <span style="margin-left: 12px"
                ><span
                  class="infoTokens"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >Twitter</span
                ><span
                  class="infoTokens"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >discordapp.com</span
                ></span
              >
            </p>
            <!-- <p>
              Tags:
              <span style="margin-left: 53px"
                ><span
                  class="infoTokens"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  style="color: black"
                  >Token</span
                >
                <span
                  class="infoTokens"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >DeFi Index</span
                >
                <span
                  class="infoTokens"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >TokenSets</span
                >
                <span id="secondWebsiteName2"
                  class="infoTokens"
                  style="margin-left: 2px"
                  :class="
                    changeModeIndex === 'lightTheme'
                      ? 'infoTokensForLightTheme'
                      : 'infoTokensForDarkTheme'
                  "
                  >Decentralized Finance (DeFi)</span
                ></span
              >
            </p> -->
          </div>
          <!-- <p class="about-footer">
            <span class="totalSupply">Total Supply</span
            ><span class="aboutVolume">24 Hour Volume</span
            ><span class="aboutMarket">Market Cap</span>
          </p>
          <p class="about-footers">
            <span class="gap">ETH</span><span class="gaps">$37.45B USD</span
            ><span>$> 1T USD</span>
          </p> -->
        </div>
        <div class="checkoutInfo">
          <div v-if="loadingIframe === true" style="position: absolute; right: 50%; top: 25%">
            <div class="loading-div" :class="changeModeIndex === 'lightTheme' ? 'displayNone' : 'displayInherit'">
              <div style="margin-top: 50px" class="spinner-border text-light loading_class" id="loadingImg" role="status">
            </div>
            </div>
            <div class="loading-div" :class="changeModeIndex === 'lightTheme' ? 'displayInherit' : 'displayNone'">
              <div style="margin-top: 50px" class="spinner-border text-dark loading_class" id="loadingImg" role="status">
            </div>
            </div>
          </div>
       <!-- iframe of uniswap -->
        <iframe
          src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
          height="650px"
          width="100%"
          style="
            border: 0;
            margin: 0 auto;
            display: block;
            border-radius: 10px;
            max-width: 500px;
            min-width: 300px;
            margin-bottom: 100px;
          "
          id="myId"
        />
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <div
      class="footer"
      :class="
        changeModeIndex === 'lightTheme' ? 'backgroundBrown' : 'backgroundWhite'
      "
    >
      <h6>
        <span
          class="footerText"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
          >Disclaimer</span
        ><span class="footer-dot"> . </span
        ><span
          class="footerText"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
          >Terms of Service</span
        ><span class="footer-dot"> . </span
        ><span
          class="footerText"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
          >Privacy Policy</span
        >
      </h6>
      <h6>
        <!-- <span>@</span> -->
        <span
          class="footerText"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
          >2021 Sam Collins<span class="footer-dot"> . </span></span
        ><span
          class="footerText"
          :class="
            changeModeIndex === 'lightTheme' ? 'colorBlack' : 'colorWhite'
          "
        >
          All Rights Reserved</span
        >
      </h6>
    </div>
  </div>
</template>

<script>
// import Web3 from 'web3'
// import { Fetcher, WETH, Route, Trade, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
// import { ethers } from 'ethers'
// import uniswapAbi from '../assets/uniswapAbi.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      page: 'mainPage',
      infoDiv: '',
      sidebar: 'false',
      loading: true,
      arrayOfIndex: [],
      indexId: '',
      websitesRegex: '',
      websites: '',
      // filterWebsite: '',
      furtherCoinDetail: {},
      totalTokens: '',
      ethBalance: '0',
      withoutPoint: '0',
      swap: 'false',
      networkId: '',
      totalTokenPrice: '',
      oneTokenPrice: '',
      tradeIs: '',
      weth: '',
      dai: '',
      amountOutMin: '',
      minAmountOut: '',
      slippageTolerance: '',
      value: '',
      connectWallet: false,
      placedAmount: '',
      totalPriceM: '',
      finalPrice: '',
      transactionHash: '',
      transactionSuccess: 'false',
      keyPressedLast: '',
      charRegex: '',
      lightMode: 'true',
      changeModeIndex: '',
      resMetamask: '',
      tokensmartAddress: '',
      tokenContractPopup: '',
      loadingIframe: true
    }
  },
  created () {
    this.$http
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=defipulse-index%2Cdefi-top-5-tokens-index%2Csdefi%2Ccryptocurrency-top-10-tokens-index%2Cpower-index-pool-token%2Cassy-index%2Cpunk-basic%2Cpiedao-defi-large-cap%2Cyearn-ecosystem-token-index%2Cdegen-index%2Cpiedao-defi%2Cpiedao-defi-small-cap%2Cnftx-hashmasks-index%2Ccoinshares-gold-and-cryptoassets-index-lite%2Choly-trinity%2Coracle-top-5%2Cbaby-power-index-pool-token%2Cidefi%2Cpunk%2C1x-short-defi-index-token%2C0-5x-long-defi-index-token%2Cserum-ecosystem-token%2Cpunk-attr-4%2Cpunk-attr-5%2C3x-short-defi-index-token%2C3x-long-defi-index-token%2Cpunk-female%2Cpiedao-yearn-ecosystem-pie%2Cpunk-zombie&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C7d')
      .then(function (coins) {
        console.log('response', coins)
        this.props = coins
        const { data } = this.props
        console.log('data', data)
        this.loading = false

        const defipulseIndex = data.find(coin => coin.id === 'defipulse-index')
        const Defi5Index = data.find(coin => coin.id === 'defi-top-5-tokens-index')
        const SDEFI = data.find(coin => coin.id === 'sdefi')
        const cryptotop10Index = data.find(coin => coin.id === 'cryptocurrency-top-10-tokens-index')
        const powerPoolToken = data.find(coin => coin.id === 'power-index-pool-token')
        const ASSYINDEX = data.find(coin => coin.id === 'assy-index')
        const PunkBasic = data.find(coin => coin.id === 'punk-basic')
        const piedaoDefiLargeCap = data.find(coin => coin.id === 'piedao-defi-large-cap')
        const yearnEcosystemTokenindex = data.find(coin => coin.id === 'yearn-ecosystem-token-index')
        const degenindex = data.find(coin => coin.id === 'degen-index')
        const piedaodefi = data.find(coin => coin.id === 'piedao-defi')
        const piedaodefismallcap = data.find(coin => coin.id === 'piedao-defi-small-cap')
        const nftxhashmasksindex = data.find(coin => coin.id === 'nftx-hashmasks-index')
        const coinsharesgoldandcryptoassetsindexlite = data.find(coin => coin.id === 'coinshares-gold-and-cryptoassets-index-lite')
        const holytrinity = data.find(coin => coin.id === 'holy-trinity')
        const oracconstop5 = data.find(coin => coin.id === 'oracle-top-5')
        // const babypowerindexpooltoken = data.find(coin => coin.id === 'baby-power-index-pool-token')
        const idefi = data.find(coin => coin.id === 'idefi')
        const punk = data.find(coin => coin.id === 'punk')
        const shortdefiindextoken = data.find(coin => coin.id === '1x-short-defi-index-token')
        const xlongdefiindextoken = data.find(coin => coin.id === '0-5x-long-defi-index-token')
        const serumecosystemtoken = data.find(coin => coin.id === 'serum-ecosystem-token')
        const punkattr4 = data.find(coin => coin.id === 'punk-attr-4')
        const punkattr5 = data.find(coin => coin.id === 'punk-attr-5')
        const shortdefiindextoken3x = data.find(coin => coin.id === '3x-short-defi-index-token')
        const longdefiindextoken3x = data.find(coin => coin.id === '3x-long-defi-index-token')
        const punkfemale = data.find(coin => coin.id === 'punk-female')
        const piedaoyearnecosystempie = data.find(coin => coin.id === 'piedao-yearn-ecosystem-pie')
        const punkzombie = data.find(coin => coin.id === 'punk-zombie')

        this.arrayOfIndex = [
          defipulseIndex,
          Defi5Index,
          SDEFI,
          cryptotop10Index,
          powerPoolToken,
          ASSYINDEX,
          PunkBasic,
          piedaoDefiLargeCap,
          yearnEcosystemTokenindex,
          degenindex,
          piedaodefi,
          piedaodefismallcap,
          nftxhashmasksindex,
          coinsharesgoldandcryptoassetsindexlite,
          holytrinity,
          oracconstop5,
          // babypowerindexpooltoken,
          idefi,
          punk,
          shortdefiindextoken,
          xlongdefiindextoken,
          serumecosystemtoken,
          punkattr4,
          punkattr5,
          shortdefiindextoken3x,
          longdefiindextoken3x,
          punkfemale,
          piedaoyearnecosystempie,
          punkzombie
        ]
        console.log('arrayOfIndex', this.arrayOfIndex)
      })

      .catch((error) => {
        console.log('error', error)
      })
  },
  methods: {
    navigateMode (Mode) {
      this.lightMode = Mode
    },
    navigatePage (page) {
      this.page = page
    },
    changeIndexMode (mode) {
      localStorage.setItem('WebsiteIndexmode', mode)
      this.changeModeIndex = this.$store.state.changeModeIndexWebsite = mode
      // this.changeModeIndex = mode
    },
    onCopy () {
      this.$toasted.success('Address Copied ' + this.tokensmartAddress)
    },
    onError () {
      this.$toasted.error('Failed to copy Texts ' + this.tokensmartAddress)
    },
    furtherCoinData (index) {
      console.log(index.id)
      this.indexId = index.id
      this.$http
        .get(`https://api.coingecko.com/api/v3/coins/${this.indexId}`)
        .then(function (coin) {
          this.page = 'buySell'
          window.scrollTo(0, 0)
          this.furtherCoinDetail = coin.body
          console.log('furthercoindertatil', this.furtherCoinDetail)
          this.websites = this.furtherCoinDetail.links.homepage[0]
          console.log('websites', this.websites)
          this.tokenContractPopup = true
          setTimeout(() => {
            this.loadingIframe = false
          }, 5000)
          setTimeout(() => {
            this.tokenContractPopup = false
          }, 12500)
          this.tokensmartAddress = this.furtherCoinDetail.platforms.ethereum
        })
        .catch(error => {
          console.log(error)
        })
    },
    navigateSidebar (sidebar) {
      this.sidebar = sidebar
    },
    formatPercent (number) {
      return Number.parseFloat(number).toFixed(1)
    },
    commaFunc (number) {
      return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }
  },
  mounted () {
    var websiteModeTheme = localStorage.getItem('WebsiteIndexmode')
    console.log('websiteModeTheme', websiteModeTheme)
    if (websiteModeTheme === null) {
      this.$store.state.changeModeIndexWebsite = 'lightTheme'
      this.changeModeIndex = 'lightTheme'
    } else {
      this.changeModeIndex = websiteModeTheme
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.helloForLightTheme {
  background-color: white;
  color: black;
}
.helloForDarkTheme {
  background-color: #212121;
  color: white;
}
.navbarForLightTheme {
  background-color: white;
}
.navbarForDarkTheme {
  background-color: #212121;
}
.navbar {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #000;
  z-index: 1111;
  height: 50px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.navbar-nav .nav-link {
  padding-right: 0 !important;
  padding-left: 15px !important;
}
.global-status {
  margin-top: -40px;
  width: 95%;
  white-space: nowrap;
  overflow: auto hidden;
  margin-left: 10px;
}

.global-status-heading {
  font-size: 13px;
}

.globalstatusDetailForLightTheme {
  color: blue;
}
.globalstatusDetailForDarkTheme {
  color: rgb(0, 187, 212);
}
.global-status-detail {
  font-size: 13px;
}

.footer {
  height: 110px;
  width: 100%;
  padding-top: 17px;
  bottom: 0;
  position: relative;
  font-size: 16px;
}

.footer span {
  font-size: 16px;
}

.footer-dot {
  font-size: 17px;
}

.divider {
  position: relative;
  top: -17px;
  width: 100%;
}

.divide {
  position: relative;
  top: -17px;
  width: 90%;
  border: none;
  // border-bottom: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid #e6e6e6;
}

.coinSymbol {
  text-transform: uppercase;
}

.loading_class {
  vertical-align: sub;
  width: 140px;
  margin: 0 auto;
  position: absolute;
  left: 45%;
  // transform: translateX(-50%);
}

.loading_text {
  left: 51%;
  transform: translateX(-50%);
  font-size: 23px;
  margin-top: 50px;
}

.loading-div {
  margin-bottom: 79px;
}
.changeColorSiteForLight {
  background-color: white;
}
.changeColorSiteForDark {
  background-color: #212121;
}
// change color site
.change-color-site {
  width: 45px;
  height: 45px;
  border: none;
  // box-shadow: 0px 1px 40px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.sun-like,
.red-btn {
  margin-right: 5px;
  margin-left: 5px;
}
.tooltip {
  position: relative;
  display: inline-block;
  border: none;
  background-color: rgb(255, 251, 243);
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltips {
  // float: right;
  cursor: pointer;
  margin-left: 5px;
  position: relative;
  // left: -75px;
  // top: -2px;
  display: inline-block;
  border: none;
  background-color: rgb(255, 251, 243);
  outline: none;
  border-radius: 5px;
}

.tooltips .tooltiptexts {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -70px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltips .tooltiptexts::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltips:hover .tooltiptexts {
  visibility: visible;
  opacity: 1;
}
.sun-icon,
.moon-icon {
  width: 20px;
  height: 20px;
}
@media only screen and (min-width: 900px) {
  .global-status {
    position: absolute;
    top: 35px;
    text-align: end;
    width: 90%;
    margin-left: 80px;
  }

  .navbar {
    width: 90%;
    position: relative;
    top: 50px;
    margin: 0 auto;
  }

  .logo-2,
  .side-bar {
    display: none;
  }
}
.logo1ForLightTheme {
  color: white !important;
}
.logo1ForDarkTheme {
  color: #212121 !important;
}

.logo-1 {
  color: white;
}

.add-img {
  margin-top: -60px;
  // margin-left: 400px;
}
.add-img2 {
  width: 70%;
  margin-top: -60px;
  height: 240px;
  border-radius: 13px;
  margin-left: 220px;
}
#curvedArrow{
  margin-top: -40px;
}
@media only screen and (min-width: 1600px) {
  .add-img {
    margin-left: 350px;
  }
}

@media only screen and (max-width: 380px) {
  #curvedArrow{
    // margin-right: 50px;
    position: relative !important;
    right: 50px !important;
  }
  .fontSizes{
    font-size: 17px;
}
}

@media only screen and (max-width: 1850px) {
  .accountAddress{
    top: 5.2%;
  }
  .accountBalance{
    top: 5.2%;
  }

}
@media only screen and (max-width: 1656px) {
  .accountAddress{
    top: 5.5%;
  }
  .accountBalance{
    top: 5.5%;
  }
}
@media only screen and (max-width: 1550px) {
  .accountAddress{
    top: 6%;
  }
  .accountBalance{
    top: 6%;
  }
}

@media only screen and (max-width: 500px) {
  #secondWebsiteName{
    display: block;
    position: relative;
    left: 90px;
    min-width: 46%;
    margin-top: 8px;
  }
  #secondWebsiteName2{
    display: block;
    position: relative;
    left: 90px;
    min-width: 44%;
    margin-top: 8px;
  }
  #loadingImg{
    display: none;
  }
}
@media only screen and (max-width: 900px) {
  .global-status {
    margin-top: -110px;
    margin-bottom: -20px;
  }
  .logo-1 {
    display: none;
  }
  #marginTopMinusFive{
    position: relative;
    top: -5px;
  }
  .change-color-site {
    float: left;
    margin-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
  }
  .navbar {
    width: 100%;
    margin-bottom: -60px;
  }
  .add-img {
    width: 70%;
    height: 150px;
    position: relative;
    left: -170px;
    margin-top: -20px;
  }
  .add-img2 {
    width: 70%;
    height: 200px;
    position: relative;
    left: -170px;
    border-radius: 5px;
    margin-top: -20px;
  }
  .copyContractDiv{
    width: 90%;
    color: white;
    margin-top: 20px;
    margin-bottom: -20px;
  }
  .checkout {
    // overflow: auto;
    width: 110%;
    margin-top: 30px;
    margin-left: 30px;
    position: inherit;
  }
  .checkoutInfo {
    position: relative;
    // top: -130px;
    margin: 0 auto;
    left: -10px;
  }
  .checkout-div {
    width: 90%;
  }
  .checkoutInfo {
    width: 90%;
    margin-left: 20px;
    margin-top: 400px;
  }
  .cross {
    top: 110px;
    left: 370px;
  }
  .review-btn {
    margin-left: 30px;
  }
  #curvedArrow{
  margin-top: 0px;
}
}
@media only screen and (max-width: 1640px) {
  .review-btn {
    margin-left: 30px;
  }
}
@media only screen and (max-width: 1500px) {
  .review-btn {
    padding: 20px 70px;
  }
}
@media only screen and (max-width: 1400px) {
  .review-btn {
    margin-left: 17px;
  }
}
@media only screen and (max-width: 1300px) {
  .review-btn {
    padding: 20px 60px;
  }
}
</style>
