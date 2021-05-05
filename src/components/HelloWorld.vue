<template>
  <div class="hello">
    <topHeader />
    <topContainer />
    <axiaProtocol />
    <safe />
    <manageProfile />
    <ourInstruments />
    <protocolNews />
    <footerPage />
  </div>
</template>

<script>
import topHeader from '@/components/topHeader.vue'
import topContainer from '@/components/topContainer.vue'
import axiaProtocol from '@/components/axiaProtocol.vue'
import safe from '@/components/safe.vue'
import manageProfile from '@/components/manageProfile.vue'
import ourInstruments from '@/components/ourInstruments.vue'
import protocolNews from '@/components/protocolNews.vue'
import footerPage from '@/components/footerPage.vue'
export default {
  name: 'HelloWorld',
  components: {
    topHeader,
    topContainer,
    axiaProtocol,
    safe,
    manageProfile,
    ourInstruments,
    protocolNews,
    footerPage
  },
  data () {
    return {
      // sidebar: 'false'
    }
  },
  mounted () {
    var websiteModeTheme = localStorage.getItem('WebsiteIndexmode')
    console.log('websiteModeTheme', websiteModeTheme)
    if (websiteModeTheme === null) {
      this.$store.state.changeModeIndexWebsite = 'lightTheme'
    } else {
      this.$store.state.changeModeIndexWebsite = websiteModeTheme
      console.log('store changeModeIndexWebsite', this.changeModeIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
