<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='gift' title="스탬프 교환 상품" />
    <div class="tour_sub_wrap">
        <GiftPoint />
        <GiftList />
        <GiftGuide />
        <PopupGiftReceive  v-if="popupGift.open"/>
        <PopupSns />
        <PopupImpression :title='introData.mingle_title' />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import GiftPoint from '@/components/GiftPoint.vue'
import GiftList from '@/components/GiftList.vue'
import GiftGuide from '@/components/GiftGuide.vue'
import PopupGiftReceive from '@/components/popup/PopupGiftReceive.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
import PopupImpression from '@/components/popup/PopupImpression.vue'
export default {
  name: 'Gift',
  components: {
    Head,
    GiftPoint,
    GiftList,
    GiftGuide,
    PopupGiftReceive,
    PopupSns,
    PopupImpression
  },
  computed: {
    ...mapState(['mingleCode', 'token', 'popupGift', 'introData'])
  },
  watch: {
    mingleCode () {
      this.$store.dispatch('loadGiftDataNew')
      this.$store.dispatch('loadTotalData')
    }
  },
  beforeCreate () {
    if (this.$route.query.mingleCode) {
      this.$store.state.mingleCode = this.$route.query.mingleCode.replace(/ /gi, '+')
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
      this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
      this.$store.dispatch('setGiftRoute', false)
    }
  },
  mounted () {
    if (this.mingleCode) {
      this.$store.dispatch('loadGiftDataNew')
      this.$store.dispatch('loadTotalData')
    }
    this.$store.dispatch('loadDurunubiCheck', this.token)
  }
}
</script>
