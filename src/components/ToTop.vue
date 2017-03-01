<template>
	<div class="index-nav sub" id="index_nav" ref="nav" v-show="isToTopShow">
	    <div class="nav-list">
	      <div class="pointer-block"></div>
	    </div>
	    <div class="n-i gotop sub">
	      <div class="s-line"></div>
	      <div class="btn_gotop" title="返回顶部" v-bind:style="{ backgroundImage: 'url('+icons+')' }" @click="scrollToTop(time)"></div>
	    </div>
	</div>
</template>

<script>
	import scrollMixin from './smooth-scroll.js'

	export default {
	  data() {
	    return {
	      icons: require('../assets/images/icons.png'),
	      time: 800,
	      wraperWidth: 1200,
	      showTop: 200,
	      isToTopShow: false,
	      _screenHeight: 0,
	      scrollTop: 0,
	      bottom: 50
	    }
	  },
	  methods: {
	  	init() {
	  		this.bindEvent()
	  		this.resize()
	  	},
	  	scroll(e) {
	  		this.scrollTop = window.pageYOffset || (document.documentElement.scrollTop + document.body.scrollTop)
	  		if (this.scrollTop > this.showTop) {
	  			this.isToTopShow = true
	  		} else {
	  			this.isToTopShow = false
	  		}
	  	},
	  	resize(e) {
	  		this._screenWidth = document.body.clientWidth
	  		this.$refs.nav.style.bottom = this.bottom + 'px'
	  		if (this._screenWidth > this.wraperWidth) {
  				this.$refs.nav.style.right = (this._screenWidth - this.wraperWidth) / 4 + 'px'
  			} else {
  				this.$refs.nav.style.right = 0 + 'px'
  			}
	  	},
	  	bindEvent() {
	  		document.addEventListener('scroll', this.scroll, false)
	  		document.addEventListener('resize', this.resize, false)
	  	},
	  	/*  解除绑定事件  */
	  	unbindEvent() {
	  		document.removeEventListener('scroll', this.scroll, false)
	  		document.removeEventListener('resize', this.resize, false)
	  	},
	  },
	  mounted() {
	  	this.init()
	  },
	  beforeDestroy() {
	  	this.unbindEvent()
	  },
	  mixins: [scrollMixin]
	}
</script>

<style scoped>
	.index-nav {
	    position: fixed;
	    width: 48px;
	    z-index: 90;
	    text-align: center;
	    -webkit-touch-callout: none;
	    -webkit-user-select: none;
	    -khtml-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.index-nav .nav-list {
	    position: relative;
	    z-index: 233;
	    background-color: #f6f9fa;
	    overflow: hidden;
	    border-radius: 4px;
	}
	.index-nav .pointer-block {
	    position: absolute;
	    width: 48px;
	    height: 32px;
	    margin-left: -1px;
	    background: #00a1d6;
	    z-index: -1;
	    transition: .1s all linear;
	    display: none;
	}
	.index-nav .n-i {
		cursor: pointer;
	}
	.index-nav .n-i.gotop {
	    border: 0;
	    position: relative;
	    z-index: 50;
	}
	.index-nav .n-i.gotop .btn_gotop {
	    height: 48px;
	    border: 1px solid #f6f9fa;
	    overflow: hidden;
	    background-color: #fff;
	    background-position: -648px -72px;
	    background-repeat:  no-repeat;
	    border-radius: 4px;
	}
	.index-nav .n-i.gotop .btn_gotop:hover {
		background-color: #0aeae2;
		background-position: -714px -72px;
		border-color: #0aeae2;
	}
</style>