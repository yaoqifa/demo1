<template>
<div class="app-wrap"> 
  <my-content></my-content>
  <router-link to="/cat">to cat</router-link>
  <router-link to="/dog">to dog</router-link>
  <router-view></router-view>

  <div class="vuex-demo">
    {{computeCount}}
  </div>
</div>
</template>

<script>
import MyContent from '@/components/my-content'
export default {
  components: {
    MyContent
  },
  computed: {
    computeCount () {
      return this.$store.getters.getCount2
    }
  }
}
</script>

<style>

</style>
