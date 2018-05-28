<template>
<div>
  <ul>
    <li>{{id}}</li>
    <li>{{todo}}</li>
    <li>
      <button v-on:click="sendDelete">Borrar</button>
    </li>
  </ul>
</div>
    
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendDelete: function() {
      this.$emit("deleteTodo", this.id);
    }
  },
  props: {
    id: Number,
    todo: String
  }
};
</script>
