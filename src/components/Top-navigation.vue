<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">主站</el-menu-item>
	  <el-menu-item index="2">直播</el-menu-item>
	  <el-menu-item index="3">周边</el-menu-item>
	  <el-menu-item index="4" class="login">登陆</el-menu-item>
	  <i class="s-line"></i>
	  <el-menu-item index="5" class="regist">注册</el-menu-item>
	</el-menu>
</template>

<script>
  export default {
  	data() {
      return {
      	bg: require('../assets/images/search-bg.png')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
	.el-menu--horizontal.el-menu--dark {
		position: absolute;
    	right: 0;
    	top: 0;
    	width: 100%;
    	opacity: 0.9;
    	z-index: 50;
	}
	.el-menu--horizontal .el-menu-item {
		height: 40px;
		line-height: 40px;
	}
	.el-menu--dark .el-menu-item {
		color: #fff;
	}
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
		color: #0aeae2;
	}
	.el-menu--dark .login {
		position: absolute;
		right: 60px;
		padding: 0 5px;
	}
	.s-line {
		right: 53px;
		position: absolute;
    	border-color: #fff;
    	display: inline-block;
    	border-left: 1px solid #fff;
    	height: 16px;
    	margin-top: 12px;
    	vertical-align: top;
	}
	
	.el-menu--dark .regist {
		position: absolute;
		right: 10px;
		padding: 0 5px;
	}

</style>