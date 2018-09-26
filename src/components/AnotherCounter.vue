<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment By Another</button>
    <!-- <button class="btn btn-primary" @click="increment">Increment By Another</button> -->
    <button class="btn btn-primary" @click="decrement(50)">Decrement By Another</button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    ...mapActions(["increment", "decrement"])
    // Created by mapActions
    // increment(by) {
    //   this.$store.dispatch("increment", by);
    // }
    // increment() {
    //   // this.$emit("updated", 1);
    //   // this.$store.state.counter++;
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   // this.$emit("updated", -1);
    //   // this.$store.state.counter--;
    //   this.$store.commit("decrement");
    // }
  }
};
</script>
