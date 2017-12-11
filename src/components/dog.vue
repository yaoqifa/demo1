<template>
  <div>
    <p> i am dog router</p>
    <button @click="addFive">addFive</button>
    <button @click="minusFive">minusFive</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prise: 5
    }
  },
  methods: {
    addFive () {
      this.$store.dispatch('actIncrement', this.prise)
    },
    minusFive () {
      this.$store.dispatch('actDecrement', this.prise)
    }
  }
}
</script>

<style>

</style>
