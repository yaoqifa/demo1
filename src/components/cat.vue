<template>
<div>
  <p> is cat router</p>
  <button @click="addOne">addOne</button>
  <button @click="minusOne">minusOne</button>  
</div>
</template>

<script>
export default {
  data () {
    return {
      price: 1,
      msg: 'cat'
    }
  },
  methods: {
    addOne () {
      this.$store.dispatch('actIncrement', this.price)
    },
    minusOne () {
      this.$store.dispatch('actDecrement', this.price)
    }
  }
}
</script>

<style>

</style>
