<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2">
        <h1 class="text-center text-primary display-1 mt-2 mb-5">Vuex</h1>
        <!-- <app-result :counter="counter"></app-result> -->
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <!-- <app-counter @updated="counter += $event"></app-counter> -->
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <!-- <input type="text" :value="value" @input="updateValue"> -->
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import AnotherCounter from "./components/AnotherCounter";
import Result from "./components/Result";
import AnotherResult from "./components/AnotherResult";

export default {
  name: "app",
  // data() {
  //   return {
  //     counter: 0
  //   };
  // },
  computed: {
    // value() {
    //   return this.$store.getters.value;
    // }
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
};
</script>
