<template>
  <div>
    <p>this is by props get value from content component:  {{valueFromContent}}</p>

    <ul>
        <li v-for="(ls,index) in list" :key="index">
          {{ls}}
        </li>
    </ul>
    <button @click="addItem">addItem</button>
    <slot name='slot1'>1</slot>
    <button @click="emitMyEvent">emit</button>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    'value-from-content': [Number, String]
  },
  data () {
    return {
      list: ['aa', 'bb', 'cc'],
      i: 1
    }
  },
  watch: {
    list: function (newV, oldV) {
      console.log(newV, oldV)
    }
  },
  methods: {
    addItem () {
      this.list.push('dd')
      Vue.set(this.list, this.i++, '11')
    },
    emitMyEvent () {
      this.$emit('my-event', this.i)
    }
  }
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
