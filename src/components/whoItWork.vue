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
          <a href="/whyBitcoin" class="nav-item nav-link">Why Bitcoin</a>
          <a href="/whoItWork" class="nav-item nav-link active">Who It Works</a>
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
      class="StaticLayout__Section-sc-1ir3foe-0 ControlHomepage__SectionHome-lzy6fr-0 dNfCSv"
    >
      <section class="StaticLayout__Section-sc-1ir3foe-0 lFUTY">
        <div class="Flex-l69ttv-0 Features__Wrapper-o1awuh-0 eWonXt">
          <h2 class="Features__Title-o1awuh-1 jlfhDm">
            The most trusted Payment Gateway platform
          </h2>
          <p class="Features__Subtitle-o1awuh-2 rMIVK">
            Here are a few reasons why you should choose Block 360
          </p>
          <div class="Flex-l69ttv-0 Features__FeatureWrapper-o1awuh-3 fNsxbm">
            <div class="Features__Feature-o1awuh-4 jfpckp">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M56 0H8v50h48V0z" fill="#BFE9FF"></path>
                <path d="M64 10H0v48h64V10z" fill="#56B4FC"></path>
                <path d="M56 10H8v40h48V10z" fill="#1652F0"></path>
                <path
                  d="M10 16H6v8h4v-8zM10 36H6v8h4v-8z"
                  fill="#1652F0"
                ></path>
                <path
                  d="M64 58h-8v6h8v-6zM8 58H0v6h8v-6z"
                  fill="#56B4FC"
                ></path>
                <path
                  d="M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z"
                  fill="#fff"
                ></path>
              </svg>
              <h2 class="Features__FeatureTitle-o1awuh-5 rNGTa">
                Secure storage
              </h2>
              <p class="Features__FeatureSubtitle-o1awuh-6 lbdxIi">
                We store the vast majority of the digital assets in secure
                offline storage.
              </p>
              <a
                href="security"
                title="Learn how Coinbase keeps your funds safe and secure"
                color="textAccent"
                class="Link__A-eh4rrz-0 ihobGW Features__FeatureLink-o1awuh-7 iaSkTW"
                >Learn how Coinbase keeps your funds safe and secure<!-- -->
                <svg width="5" height="9" viewBox="0 0 8 11" fill="none">
                  <path
                    d="M1 10l5-4.5L1 1"
                    stroke="#1652F0"
                    stroke-width="2"
                  ></path></svg
              ></a>
            </div>
            <div class="Features__Feature-o1awuh-4 jfpckp">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z"
                  fill="#BFE9FF"
                ></path>
                <path
                  d="M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
                  fill="#56B4FC"
                ></path>
                <path
                  d="M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
                  fill="#1652F0"
                ></path>
                <path
                  d="M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z"
                  fill="#fff"
                ></path>
              </svg>
              <h2 class="Features__FeatureTitle-o1awuh-5 rNGTa">
                Protected by insurance
              </h2>
              <p class="Features__FeatureSubtitle-o1awuh-6 lbdxIi">
                Cryptocurrency stored on our servers is covered by our insurance
                policy.
              </p>
              <a
                href="https://support.coinbase.com/customer/portal/articles/1662379-how-is-coinbase-insured-"
                title="Learn how your crypto is covered by our insurance policy"
                color="textAccent"
                class="Link__A-eh4rrz-0 ihobGW Features__FeatureLink-o1awuh-7 iaSkTW"
                >Learn how your crypto is covered by our insurance policy<!-- -->
                <svg width="5" height="9" viewBox="0 0 8 11" fill="none">
                  <path
                    d="M1 10l5-4.5L1 1"
                    stroke="#1652F0"
                    stroke-width="2"
                  ></path></svg
              ></a>
            </div>
            <div class="Features__Feature-o1awuh-4 jfpckp">
              <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
                <path d="M56 0H24v64h32V0z" fill="#BFE9FF"></path>
                <path
                  d="M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z"
                  fill="#56B4FC"
                ></path>
                <path d="M24 8v52s24-10.75 24-24V8H24z" fill="#1652F0"></path>
                <path
                  d="M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z"
                  fill="#fff"
                ></path>
              </svg>
              <h2 class="Features__FeatureTitle-o1awuh-5 rNGTa">
                Industry best practices
              </h2>
              <p class="Features__FeatureSubtitle-o1awuh-6 lbdxIi">
                Coinbase supports a variety of the most popular digital
                currencies.
              </p>
              <a
                href="security"
                title="Learn how we implement industry best practices for account security"
                color="textAccent"
                class="Link__A-eh4rrz-0 ihobGW Features__FeatureLink-o1awuh-7 iaSkTW"
                >Learn how we implement industry best practices for account
                security<!-- -->
                <svg width="5" height="9" viewBox="0 0 8 11" fill="none">
                  <path
                    d="M1 10l5-4.5L1 1"
                    stroke="#1652F0"
                    stroke-width="2"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="Stats__Backdrop-mgmfao-0 fkUfJX">
      <section class="StaticLayout__Section-sc-1ir3foe-0 lFUTY">
        <div class="Flex-l69ttv-0 Stats__Wrapper-mgmfao-1 iddqpw">
          <div class="Stats__Stat-mgmfao-2 kesOkd">
            <h2 class="Stats__Number-mgmfao-3 kEIzWR">$320B+</h2>
            <div class="Stats__Description-mgmfao-4 bLDeOz">
              Total Volume Traded
            </div>
          </div>
          <div class="Stats__Stat-mgmfao-2 kesOkd">
            <h2 class="Stats__Number-mgmfao-3 kEIzWR">100+</h2>
            <div class="Stats__Description-mgmfao-4 bLDeOz">
              Countries supported
            </div>
          </div>
          <div class="Stats__Stat-mgmfao-2 kesOkd">
            <h2 class="Stats__Number-mgmfao-3 kEIzWR">35M+</h2>
            <div class="Stats__Description-mgmfao-4 bLDeOz">Verified Users</div>
          </div>
        </div>
      </section>
    </div>
    <section class="StaticLayout__Section-sc-1ir3foe-0 lFUTY" id="third">
      <div class="Flex-l69ttv-0 Quickstart__Wrapper-r2y3l6-0 iZSDKj">
        <h2 class="Quickstart__Title-r2y3l6-1 IbSbt">
          Get started in a few minutes
        </h2>
        <h2 class="Quickstart__Subtitle-r2y3l6-2 jQlRGn">
          Coinbase supports a variety of the most popular digital currencies.
        </h2>
        <div class="Flex-l69ttv-0 Quickstart__Steps-r2y3l6-3 dptiub">
          <div class="Quickstart__Step-r2y3l6-4 eYDFyM">
            <svg width="64" height="60" viewBox="0 0 64 60" fill="none">
              <path
                d="M32 16a8 8 0 100-16 8 8 0 000 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z"
                fill="#56B4FC"
              ></path>
              <path d="M64 36H0v24h64V36z" fill="#BFE9FF"></path>
              <path d="M52 36H12v24h40V36z" fill="#1652F0"></path>
              <path d="M33 42h-2v12h2V42z" fill="#fff"></path>
              <path d="M38 49v-2H26v2h12z" fill="#fff"></path>
            </svg>
            <h2 class="Quickstart__StepTitle-r2y3l6-5 hXKAJf">
              Create an account
            </h2>
          </div>
          <div class="Quickstart__Line-r2y3l6-6 jMLglJ"></div>
          <div class="Quickstart__Step-r2y3l6-4 eYDFyM">
            <svg width="65" height="56" viewBox="0 0 65 56" fill="none">
              <path d="M57.03 20h-50v24h50V20z" fill="#BFE9FF"></path>
              <path
                d="M60.03 52v-4h-8V16.06L64 16.1l.01-4.1L32.06 0 .01 12 0 15.9l12.03.04V48h-8v4h-4v4h64v-4h-4zm-16-4h-8V16.01l8 .03V48zm-24-32.04l8 .03V48h-8V15.96z"
                fill="#56B4FC"
              ></path>
              <path d="M52.03 20h-40v24h40V20z" fill="#1652F0"></path>
              <path
                d="M36.41 34.38c0-2.34-1.42-3.12-4.17-3.5-2.03-.29-2.42-.77-2.42-1.72 0-.9.69-1.54 2.01-1.54 1.34 0 2.04.52 2.26 1.75h1.99c-.19-1.86-1.26-2.96-3.06-3.28V24h-2v2.05c-1.98.28-3.26 1.6-3.26 3.29 0 2.19 1.32 3.04 4.12 3.42 1.9.31 2.44.72 2.44 1.8s-.92 1.8-2.21 1.8c-1.98 0-2.45-.98-2.6-2.16h-2.09c.14 1.94 1.2 3.4 3.61 3.72V40h2v-2.08c2.06-.33 3.38-1.77 3.38-3.54z"
                fill="#fff"
              ></path>
            </svg>
            <h2 class="Quickstart__StepTitle-r2y3l6-5 hXKAJf">
              Link your bank account
            </h2>
          </div>
          <div class="Quickstart__Line-r2y3l6-6 jMLglJ"></div>
          <div class="Quickstart__Step-r2y3l6-4 eYDFyM">
            <svg width="61" height="56" viewBox="0 0 61 56" fill="none">
              <path
                d="M40 40.5v-.99c0-.89-.59-1.68-1.45-1.92l-9.21-2.63a7.975 7.975 0 00-6.31.83L16 40v12h15.65c2.88 0 5.73-.52 8.43-1.53L60 43c.9-2.26-.93-4.67-3.35-4.39L40 40.5z"
                fill="#56B4FC"
              ></path>
              <path d="M16 36H0v20h16V36z" fill="#BFE9FF"></path>
              <path d="M16 40H0v12h16V40z" fill="#1652F0"></path>
              <path
                d="M28 20c5.523 0 10-4.477 10-10S33.523 0 28 0 18 4.477 18 10s4.477 10 10 10z"
                fill="#56B4FC"
              ></path>
              <path
                d="M48 36c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
                fill="#1652F0"
              ></path>
              <path
                d="M32 9h-3V6h-2v3h-3v2h3v3h2v-3h3V9zM52 27v-2h-8v2h8z"
                fill="#fff"
              ></path>
            </svg>
            <h2 class="Quickstart__StepTitle-r2y3l6-5 hXKAJf">
              Start buying &amp; selling
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section
      color="backgroundAccent"
      class="Banner__Container-sc-1ezuqog-2 dNGPCl"
    >
      <div class="Flex-l69ttv-0 Banner__Spacer-sc-1ezuqog-0 ciNoZ">
        <div id="takeItInYourWeb"
          class="Flex-l69ttv-0 Banner__Content-sc-1ezuqog-1 bCQvZB"
          style="text-align: left"
        >
          <h2
            class="TextElement__Spacer-hxkcw5-0 eanOvs Header__StyledHeader-sc-1xiyexz-0 fDAWfV"
          >
            Take it in your website up to $20
          </h2>
          <p
            class="TextElement__Spacer-hxkcw5-0 eanOvs Body__StyledBody-sc-17wx6cn-0 jWobek"
          >
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
          <a
            color="slate"
            weight="inherit"
            class="Link__ARouterLink-eh4rrz-1 ldIqDo"
            href="https://www.siteground.com/tutorials/wordpress/install-plugins/#:~:text=In%20WordPress%202.7%20and%20above,plugin%20will%20be%20installed%20shortly."
            target="_blank"
            ><button
              type="primary"
              class="Button__Container-opcph8-0 bzMVkb EarnFooterBanner__StyledButton-k2senj-0 hpqmkQ"
            >
              <span class="Button__Content-opcph8-1 bcOwKs">Discover</span>
            </button></a
          >
        </div>
      </div>
      <div class="Flex-l69ttv-0 Banner__Spacer-sc-1ezuqog-0 ciNoZ">
        <div
          class="Flex-l69ttv-0 EarnFooterBanner__ImageContainer-k2senj-1 bUineL"
        >
          <picture>
            <source
              srcSet="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
              type="image/webp" />
            <img
              src=""
              alt="Earn crypto while learning about crypto"
              loading="lazy"
          /></picture>
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
.active{
  font-weight: bold;
}
@media only screen and (max-width: 900px) {
  #takeItInYourWeb {
    margin-top: 220px;
  }
}
</style>
