<template>
    <div >
        <form v-on:submit.prevent>
            <input type="text" v-bind:value="text" v-on:keyup.enter="submit" >
           
        </form>   
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    text: String
  },
  methods: {
    submit: function(e) {
      console.log(e.target.value);
      this.$emit("textInput", e.target.value);
    }
  }
};
</script>