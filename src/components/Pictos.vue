<template>
  <div class="picto-container is-size-6 is-size-7-mobile" :class="{ 'has-text-right-tablet' : textAlignRight }">
    <span v-for="x in Number(marked)" class="picto marked" :key="x * .001" v-text="makeRandomPicto(gender)"></span>
    <span v-for="x in (Number(amount) - Number(marked))" class="picto" :key="x" v-text="makeRandomPicto(gender)"></span>
  </div>
</template>

<script>


export default {
  name: 'pictos',
  props: {
    amount: {
      default: 100,
      type: Number
    },
    marked: {
      default: 5,
      type: Number
    },
    textAlignRight: {
      default: false,
      type: Boolean
    },
    gender: {
      default: "all",
      type: String
    }
  },
  methods: {
    makeRandomPicto (gender) {

      var all = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var female = "abcdefghijklmnopkrst"
      var male = "tuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (gender == "female") {return female.charAt([Math.floor(Math.random() * female.length)])}
      else if (gender == "male") {return male.charAt([Math.floor(Math.random() * male.length)])}
      else { return all.charAt([Math.floor(Math.random() * all.length)]) }
    }
  }
}
</script>

<style lang="sass">

@import "colors.sass"
@import "weepeople.sass"

.picto-container
  word-wrap: break-word

.picto
  font-family: "WeePeople"
  color: hsl(0, 0%, 86%)

.marked
  color: $nkb-darkblue

</style>
