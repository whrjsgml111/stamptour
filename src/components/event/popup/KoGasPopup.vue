<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[스탬프투어 잠정 중단]</b><br>
                  코로나19 확산과<br>
                  정부의 강화된 방역조치 시행에 따라<br>
                  ‘KOGAS와 즐기는 대구 스탬프투어’는<br>
                  잠정 중단됩니다.<br><br>
                  추후 재개 여부는<br>
                  한국가스공사 페이스북,<br>
                  블로그를 확인해주세요.<br>
                  감사합니다.<br>
                  <!-- 스탬프 찍고 영수증 인증하면<br>
                  매주 수요일 선물 추첨!<br><br>
                  <span class="tal">
                    <b>1.</b> 스탬프 찍기<br>
                    <b>2.</b> 이벤트 참여하기 클릭<br>
                    <b>3.</b> 구매영수증 인증
                  </span> -->
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="goKogasEvent">자세히 보기</button>
        </div>
    </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'KoGasPopup',
  data () {
    return {
      check: false
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      if (this.check) {
        this.$cookie.set('kogas_pop', 'Y', 9999)
      }
      this.$store.state.KoGasPopup = false
    },
    goKogasEvent () {
      if (this.check) {
        this.$cookie.set('kogas_pop', 'Y', 9999)
      }
      appEvent.kogasPage()
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
<style>
  .wonju3tit {
    display: inline-block;
    margin-bottom:5px;
    font-size: 1.1em;
  }
  .arrows {
    width:10px;
    position: relative;
    top: 2px;
    margin:0 5px;
  }
  .wonju {
    color:#000;
    font-size: 17px;
    font-family:inaviL;
    line-height:1.5;
    padding:0 5px;
    word-break: keep-all;
  }
</style>
