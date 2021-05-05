<template>
  <div class="hello">
      <div class="side-bar" v-if="sidebar === 'true'">
        <br><br>
        <span @click="navigateSidebar('false')" style="float:right;margin-right:20px;color:white"><img src="https://cdn4.iconfinder.com/data/icons/arrow-68/48/36-512.png" width="20px"/>
        </span><br><br>
        <h4 class="sidebarName">Sam Collins</h4>
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
        style="border: none"
      >
        <i class="fas fa-search color-black" style="margin-right: 10px"></i>
        <i @click="navigateSidebar('true')" class="fas fa-bars color-black"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav" style="margin-left: 120px">
          <a href="/indexes" class="nav-item nav-link">Cryptocurrencies</a>
          <a href="/whatWeOffer" class="nav-item nav-link">What We Offer</a>
          <a href="/whyBitcoin" class="nav-item nav-link active">Why Bitcoin</a>
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

    <div class="whybtc" id="why">
      <p class="whybtc--head">Why Bitcoin?</p>
      <p class="whybtc--para">
        Bitcoin is the most secure, decentralized and permissionless payments
        system the world has ever seen. Offer the advantages of a payments
        system that is guaranteed to run 24/7.
      </p>
    </div>
    <div class="reasons">
      <div class="reasons__left">
        <div class="reasons__left__one">
          <h4 class="reasons__left__one--head">
            Low<span style="color: white">.</span>fees
          </h4>
          <p class="reasons__left__one--para">
            With the Lightning Network there are lower fees than any other
            payment system. Start offering Bitcoin payments, both via Bitcoin
            mainnet and the Lightning Network.
          </p>
        </div>
        <div class="reasons__left__two">
          <h4 class="reasons__left__two--head">
            Transaction<span style="color: white">.</span>speed
          </h4>
          <p class="reasons__left__two--para">
            All your payments made in Bitcoin are instantly confirmed by our
            payment processing platform. Accept Bitcoin and have all your
            transactions confirmed instantly.
          </p>
        </div>
      </div>
      <div class="reasons__mid">
        <img src="../assets/images/bitcoin.png" alt="bitcoin image" />
      </div>
      <div class="reasons__right">
        <h4 class="reasons__right--head">
          No<span style="color: white">.</span>chargebacks
        </h4>
        <p class="reasons__right--para">
          With Bitcoin, all payments are final. No more hassle and no more lost
          funds and disputes. Take control of your business through our Bitcoin
          payment gateway.
        </p>
      </div>
    </div>

    <div class="ControlHomepage__Divider-lzy6fr-5 hOGjIa"></div>

    <section class="StaticLayout__Section-sc-1ir3foe-0 lFUTY">
      <div
        class="Flex-l69ttv-0 ControlHomepage__BannerContainer-lzy6fr-2 fbVSuX"
      >
        <section
          color="background"
          class="Banner__Container-sc-1ezuqog-2 fceMXU"
        >
          <div class="Flex-l69ttv-0 Banner__Spacer-sc-1ezuqog-0 hzACMs">
            <div
              class="Flex-l69ttv-0 Banner__Content-sc-1ezuqog-1 bCQvZB"
              style="text-align: left"
            >
              <h2
                class="TextElement__Spacer-hxkcw5-0 eanOvs Header__StyledHeader-sc-1xiyexz-0 fDAWfV"
              >
                <!-- Earn up to $121 worth of crypto -->
                Earn it up to $20 for your Webstie
              </h2>
              <p
                class="TextElement__Spacer-hxkcw5-0 eanOvs Body__StyledBody-sc-17wx6cn-0 jWobek"
              >
                Discover how specific cryptocurrencies work — and get a bit of
                each crypto to try out for yourself.
              </p>
              <a
                color="slate"
                weight="inherit"
                class="Link__ARouterLink-eh4rrz-1 ldIqDo"
                href="https://www.siteground.com/tutorials/wordpress/install-plugins/#:~:text=In%20WordPress%202.7%20and%20above,plugin%20will%20be%20installed%20shortly."
                target="_blank"
                ><button
                  type="primary"
                  class="Button__Container-opcph8-0 bzMVkb EarnUpsellBanner__StyledButton-ygvhwr-1 feRCoC"
                  style="background-color: rgb(55, 0, 182)"
                >
                  <!-- <span class="Button__Content-opcph8-1 bcOwKs">Start earning</span> -->
                  <span class="Button__Content-opcph8-1 bcOwKs"
                    >Discover More</span
                  >
                </button></a
              >
            </div>
          </div>
          <div class="Flex-l69ttv-0 Banner__Spacer-sc-1ezuqog-0 kzqAjX">
            <div class="EarnUpsellBanner__MoreAssetsContainer-ygvhwr-3 cAlHKD">
              <div
                class="Flex-l69ttv-0 EarnUpsellBanner__AssetsSection-ygvhwr-2 jwNrPK"
              >
                <a
                  color="slate"
                  weight="inherit"
                  class="Link__ARouterLink-eh4rrz-1 ldIqDo"
                  href="https://makerdao.com/en/"
                >
                  <div
                    class="Common__Card-gw3xc6-19 Common__CardShadow-gw3xc6-20 Common__CardHoverable-gw3xc6-21 MoreAssetsRow__Container-sc-1g0rumx-1 kLlxvt"
                  >
                    <div class="MoreAssetsRow__Block-sc-1g0rumx-2 gBZVcZ">
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/1518.png"
                        alt="Maker"
                        class="MoreAssetsRow__Icon-sc-1g0rumx-4 kxvRBd"
                      />
                      <h2
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 iFwGec MoreAssetsRow__StyledHeader-sc-1g0rumx-0 dAGoVa"
                      >
                        Maker
                      </h2>
                      <h3
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 cVkuSR MoreAssetsRow__SubTitle-sc-1g0rumx-5 bYwkFr"
                      >
                        MKR
                      </h3>
                    </div>
                    <div
                      class="MoreAssetsRow__Block-sc-1g0rumx-2 MoreAssetsRow__Block2-sc-1g0rumx-3 dksWvu"
                    >
                      <span
                        class="Common__Normal-gw3xc6-7 AssetHelper__CTADetails-m3wdys-0 iQueXQ"
                        >Earn
                        <!-- -->$6<!-- -->
                        <!-- -->MKR</span
                      >
                    </div>
                  </div>
                </a>
                <a
                  color="slate"
                  weight="inherit"
                  class="Link__ARouterLink-eh4rrz-1 ldIqDo"
                  href="https://celo.org/"
                >
                  <div
                    class="Common__Card-gw3xc6-19 Common__CardShadow-gw3xc6-20 Common__CardHoverable-gw3xc6-21 MoreAssetsRow__Container-sc-1g0rumx-1 kLlxvt"
                  >
                    <div class="MoreAssetsRow__Block-sc-1g0rumx-2 gBZVcZ">
                      <img
                        src="https://icodrops.com/wp-content/uploads/2018/06/Celo-Logo.jpg"
                        alt="Celo"
                        class="MoreAssetsRow__Icon-sc-1g0rumx-4 kxvRBd"
                      />
                      <h2
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 iFwGec MoreAssetsRow__StyledHeader-sc-1g0rumx-0 dAGoVa"
                      >
                        Celo
                      </h2>
                      <h3
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 cVkuSR MoreAssetsRow__SubTitle-sc-1g0rumx-5 bYwkFr"
                      >
                        CGLD
                      </h3>
                    </div>
                    <div
                      class="MoreAssetsRow__Block-sc-1g0rumx-2 MoreAssetsRow__Block2-sc-1g0rumx-3 dksWvu"
                    >
                      <span
                        class="Common__Normal-gw3xc6-7 AssetHelper__CTADetails-m3wdys-0 iQueXQ"
                        >Earn
                        <!-- -->$6<!-- -->
                        <!-- -->CGLD</span
                      >
                    </div>
                  </div>
                </a>
                <a
                  color="slate"
                  weight="inherit"
                  class="Link__ARouterLink-eh4rrz-1 ldIqDo"
                  href="https://compound.finance/"
                >
                  <div
                    class="Common__Card-gw3xc6-19 Common__CardShadow-gw3xc6-20 Common__CardHoverable-gw3xc6-21 MoreAssetsRow__Container-sc-1g0rumx-1 kLlxvt"
                  >
                    <div class="MoreAssetsRow__Block-sc-1g0rumx-2 gBZVcZ">
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png"
                        alt="Compound"
                        class="MoreAssetsRow__Icon-sc-1g0rumx-4 kxvRBd"
                      />
                      <h2
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 iFwGec MoreAssetsRow__StyledHeader-sc-1g0rumx-0 dAGoVa"
                      >
                        Compound
                      </h2>
                      <h3
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 cVkuSR MoreAssetsRow__SubTitle-sc-1g0rumx-5 bYwkFr"
                      >
                        COMP
                      </h3>
                    </div>
                    <div
                      class="MoreAssetsRow__Block-sc-1g0rumx-2 MoreAssetsRow__Block2-sc-1g0rumx-3 dksWvu"
                    >
                      <span
                        class="Common__Normal-gw3xc6-7 AssetHelper__CTADetails-m3wdys-0 iQueXQ"
                        >Earn
                        <!-- -->$59<!-- -->
                        <!-- -->COMP</span
                      >
                    </div>
                  </div>
                </a>
                <a
                  color="slate"
                  weight="inherit"
                  class="Link__ARouterLink-eh4rrz-1 ldIqDo"
                  href="https://www.stellar.org/?locale=en"
                >
                  <div
                    class="Common__Card-gw3xc6-19 Common__CardShadow-gw3xc6-20 Common__CardHoverable-gw3xc6-21 MoreAssetsRow__Container-sc-1g0rumx-1 kLlxvt"
                  >
                    <div class="MoreAssetsRow__Block-sc-1g0rumx-2 gBZVcZ">
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/200x200/512.png"
                        alt="Stellar Lumens"
                        class="MoreAssetsRow__Icon-sc-1g0rumx-4 kxvRBd"
                      />
                      <h2
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 iFwGec MoreAssetsRow__StyledHeader-sc-1g0rumx-0 dAGoVa"
                      >
                        Stellar Lumens
                      </h2>
                      <h3
                        class="TextElement__Spacer-hxkcw5-0 cicsNy Header__StyledHeader-sc-1xiyexz-0 cVkuSR MoreAssetsRow__SubTitle-sc-1g0rumx-5 bYwkFr"
                      >
                        XLM
                      </h3>
                    </div>
                    <div
                      class="MoreAssetsRow__Block-sc-1g0rumx-2 MoreAssetsRow__Block2-sc-1g0rumx-3 dksWvu"
                    >
                      <span
                        class="Common__Normal-gw3xc6-7 AssetHelper__CTADetails-m3wdys-0 iQueXQ"
                        >Earn
                        <!-- -->$50<!-- -->
                        <!-- -->XLM</span
                      >
                    </div>
                  </div>
                </a>
              </div>
              <!-- <a
                    color="accent"
                    class="Link__ARouterLink-eh4rrz-1 UdRAK EarnUpsellBanner__ViewMore-ygvhwr-0 jKUteZ"
                    weight="inherit"
                    href="it/earn.html"
                    >View more
                    &gt;</a
                  > -->
            </div>
          </div>
        </section>
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
.active{
  font-weight: bold;
}
</style>
