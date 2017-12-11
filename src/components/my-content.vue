<template>
  <div>
    <p v-text="msg"></p>
    <input type="text" v-model.number="msg" v-focus>
    <todo-list @my-event="onMyEvent" :value-from-content="msg">
      <span slot="slot1">slot content</span>
    </todo-list>
    <!-- <keep-alive>
      <p :is="todoComponent"></p>
    </keep-alive> -->
     <button @click="toggleIsSHow()">点击切换圆的动画效果</button>
    <transition name="fade">
      <div class="circle" v-show="isCircleShow"></div>
    </transition>
  </div>
</template>

<script>
import todoList from './todo-list'
export default {
  name: 'my-content',
  components: {
    todoList
  },
  data () {
    return {
      msg: 'yqf is learning vue',
      todoComponent: 'todo-list',
      isCircleShow: true
    }
  },
  directives: {
    focus: {
      inserted: function (el, binding) {
        el.focus()
      }
    }
  },
  watch: {
    msg: function (newVal, oldVal) {
      console.log(newVal + '    ' + oldVal)
    }
  },
  methods: {
    onMyEvent (paramFromChild) {
      console.log('onMyEvent' + paramFromChild)
    },
    toggleIsSHow () {
      this.isCircleShow = !this.isCircleShow
    }
  }
}
</script>

<style>
.app  {
  margin: 100px; 
  text-align: center;
}
.circle {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50%;
  border: 1px solid #0dc2b3;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s ease-out
}
.fade-enter {
   transform: translateY(-300px) 
}
.fade-leave-to {
  opacity: 0
}
</style>
