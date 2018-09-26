<template>
  <p>Counter is : {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";

export default {
  // props: ["counter"],
  // computed: {
  //   counter() {
  //     // return this.$store.state.counter * 2;
  //     return this.$store.getters.doubleCounter;
  //   }
  // }
  computed: {
    // ...mapGetters(["doubleCounter", "stringCounter"]),
    ...mapGetters({
      counter: types.DOUBLE_COUNTER
    })
  }
};
</script>

