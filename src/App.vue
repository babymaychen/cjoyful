<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
[v-cloak]{
  display:none;
}
li {
    list-style: none;
}
ul {
  padding: 0;
}
body {
  margin: 0;
  background-color: #f1f2f3;
}
a {
  text-decoration: none;
}
.clearfix:after {
  content:".";display:block;height:0;clear:both;visibility:hidden
}
.clearfix {
  *+height:1%;
}
#app {
  font-family: "Microsoft YaHei",Arial,Helvetica,sans-serifsans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.player .el-tabs__item {
    width: 33%;
}
</style>
