<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{msg}}</div>
    <Formulario text="Nel" v-on:textInput="showText"/>
    <div v-for="todo in listaTareas"
      :key="todo.id"
			:todo="todo">
        <ListaTareas v-bind:id="todo.id"  v-bind:todo="todo.todo"  v-on:deleteTodo="sendDelete"/>
    </div>
  </div>
</template>

<script>
import Formulario from "./components/FormularioTareas.vue";
import ListaTareas from "./components/ListaTareas.vue";
var id = 0;
export default {
  components: {
    Formulario,
    ListaTareas
  },
  name: "app",
  data() {
    return {
      msg: "Admiren el poder de vue jaja",
      listaTareas: []
    };
  },
  methods: {
    showText: function(e) {
      id++;
      this.listaTareas.push({ id, todo: e });
    },
    sendDelete: function(idToRemove) {
      this.listaTareas = this.listaTareas.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
