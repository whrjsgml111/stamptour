<template>
    <div class="search_bar">
        <input v-model="searchInput" type="text" placeholder="검색어를 입력해 주세요.">
        <button type="button" @click="getSearchInputResult(searchInput)">검색</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapState(['searchWord', 'searchInfo'])
  },
  watch: {
    searchWord () {
      this.searchInput = this.$store.state.searchWord
    }
  },
  methods: {
    getSearchInputResult (searchWord) {
      if (searchWord === '' || searchWord === null) {
        this.$store.state.searchBool = false
        this.$store.state.searchWord = ''
        this.$router.push('/search').catch(() => {})
      } else {
        this.$store.state.searchBool = true
        this.$store.state.searchWord = searchWord
        this.$router.push(`/search?result=${searchWord}`).catch(() => {})
      }
    }
  }
}
</script>
