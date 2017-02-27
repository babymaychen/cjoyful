<template>
	<div class="home">
		<t-nav></t-nav>
		<t-search></t-search>
		<div class="menu-bg">
			<div class="menu-wrapper">
				<t-sub-nav></t-sub-nav>
				<t-broadcast></t-broadcast>
			</div>	
		</div>
		<div class="menu-wrapper">
			<template v-for="(item, index) in classify">
				<card :id="'section' + index" :classifyData="item.name"></card>
			</template>
		</div>
		<rightNav :options="options" ref="rightNav" v-on:toggleMode="toggleModeEmit"></rightNav>
		<foot></foot>
		<div class="wnd-mask" v-if="isMaskShow"></div>
	</div>
</template>

<script>
  import tNav from '../components/Top-navigation.vue'
  import tSearch from '../components/Top-search.vue'
  import tSubNav from '../components/Top-sub-nav.vue'
  import tBroadcast from '../components/Top-broadcast.vue'
  import card from '../components/Card.vue'
  import rightNav from '../components/Right-navigater.vue'
  import foot from '../components/Foot.vue'
  export default {
  	data() {
  	    return {
  	    	classify: [
  	    		{
  	    			number: 0,
  	    			name: "剧集"
  	    		},
  	    		{
  	    			number: 1,
  	    			name: "综艺"
  	    		},
  	    		{
  	    			number: 2,
  	    			name: "电影"
  	    		},
  	    		{
  	    			number: 3,
  	    			name: "动漫"
  	    		},
  	    		{
  	    			number: 4,
  	    			name: "少儿"
  	    		},
  	    		{
  	    			number: 5,
  	    			name: "娱乐"
  	    		},
  	    		{
  	    			number: 6,
  	    			name: "搞笑"
  	    		},
  	    		{
  	    			number: 7,
  	    			name: "音乐"
  	    		}
  	    	],
  	    	isMaskShow: false
  	    }
  	},
  	methods: {
  	    toggleModeEmit: function () {
  	   	  var mode = this.$refs.rightNav.mode
  	   	  if ("sortable" == mode) {
  	   		  this.isMaskShow = true
  	   	  } else {
  	   		  this.isMaskShow = false
  	   	  }
  	    }
  	},
  	watch: {
		classify: function(arr) {
			let cache = Array.from(arr, (obj) => obj.number)
			window.localStorage['nav'] = JSON.stringify(cache)
		}
	},
  	computed: {
		options: function() {
			let options = {
				offset: 140,
				bindData: this.classify,
				backToTop: 0
			}
			options.data = this.classify.map((obj, i) => {
				return {
					name: obj.name,
					target: `section${i}`
				}
			})
			return options
		}
	},
	mounted() {
		let cache = window.localStorage['nav']
		if (cache) {
			cache = JSON.parse(cache)
			let arr = []
			Array.from(cache, (number) => {
				arr.push(this.classify[number])
			})
			this.classify = arr
		}
	},
  	components: {
      tNav,
      tSearch,
      tSubNav,
      tBroadcast,
      card,
      rightNav,
      foot
    }
  }
</script>

<style scoped>
	.menu-bg {
		background: #fff;
		width: 100%;
	}
	.menu-wrapper {
		position: relative;
		width: 980px;
		margin: 0 auto;
		padding: 6px 0;
		z-index: 3;
		display: inline-block;
	}
	.wnd-mask {
	    position: fixed;
	    width: 100%;
	    height: 150%;
	    background-color: #000;
	    opacity: .5!important;
	    filter: alpha(opacity=50)!important;
	    z-index: 6;
	    top: 0;
	    left: 0;
	}
</style>