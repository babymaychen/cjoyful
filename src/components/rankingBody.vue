<template>
	<div class="rankingBody">
		<el-row :gutter="5" v-for="rankingData in rankingDataArray">
		  <el-col :span="6" v-for="data in rankingData">
		  	<div style="display: block;">
	        <h2 class="title">
	        <a href="" target="_blank">{{data.title}}</a>
	        <a href="" class="more" target="_blank">更多</a>
	        </h2>
	        <ul v-if="searchType">
			  	<li :class="[index == 0 ? 'first' : '']" v-for="(item, index) in data.content">
			  	<h2>
			  	<i :class="[index <= 2 ? 'colred' : '', 'num']">{{ index+1 }}</i>
			  	<a :href="item.url" target="_blank" :title="item.name" class="ellipsis">{{item.name}}</a>
			  	<em :class="[item.trend == 'down' ? 'down' : 'up']" v-bind:style="{ backgroundImage: 'url('+icons+')' }"></em>
			  	</h2>
			  	<p class="expnum">播放指数：{{item.searchNum}}</p>
			  	<p :class="[index > 0 ? 'minimg' : '']"><a :href="item.url" :title="item.name" target="_blank" class="checked">
			  	<img class="quic" :src="item.img" :title="item.name" alt="item.name">
			  	</a></p>
			  	</li>
		  	 </ul>
  	         <ul v-else>
  	 		  	<li :class="[index == 0 ? 'first' : '']" v-for="(item, index) in data.content">
  	 		  	<h2>
  	 		  	<i :class="[index <= 2 ? 'colred' : '', 'num']">{{ index+1 }}</i>
  	 		  	<a :href="item.url" target="_blank" :title="item.name" class="ellipsis">{{item.name}}</a>
  	 		  	</h2>
  	 		  	<p class="expnum">评价分数：{{item.searchNum}}</p>
  	 		  	<p :class="[index > 0 ? 'minimg' : '']"><a :href="item.url" :title="item.name" target="_blank" class="checked">
  	 		  	<img class="quic" :src="item.img" :title="item.name" alt="item.name">
  	 		  	</a></p>
  	 		  	</li>
  	 	  	 </ul>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        icons: require('../assets/images/icons.png'),
      }
    },
    props: {
		rankingDataArray: {
			type: Array
		},
		searchType: {
			type: Boolean
		}
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
	p {
		margin: 0;
	}
	div.rankingBody {
		text-align: left;
	}
	div h2.title {
	    margin-bottom: 20px;
	    padding-bottom: 8px;
	    position: relative;
	    border-bottom: 1px solid silver;
	    letter-spacing: 8px;
	}
	h2.title a {
	    color: #888;
	    font-size: 24px;
	    font-weight: 200;
	    padding-left: 10px;
	    display: inherit;
	    text-align: left;
	}
	h2.title a:hover, h2.title a.more:hover {
	    color: #cf2b5f;
	}
	h2.title a.more {
	    color: #888;
	    font-size: 14px;
	    text-align: right;
	    position: absolute;
	    bottom: 6px;
	    right: 10px;
	}
	ul li.first {
	    height: 210px;
	    border-bottom: 0 none;
	}
	ul li {
		transition: .2s;
	    height: 50px;
	    padding: 10px 10px 0;
	    border-bottom: 1px dotted #eee;
	    position: relative;
	}
	ul li h2 {
	    font-size: 14px;
	    font-weight: 200;
	    position: relative;
	    margin: 0;
	    overflow: hidden;
	    zoom: 1;
	}
	ul li h2 i.colred {
	    color: #fff;
	    background: #cf2b5f;
	}
	ul li h2 i {
	    float: left;
	    display: block;
	    width: 20px;
	    height: 20px;
	    font-size: 14px;
	    color: #fff;
	    font-style: normal;
	    background: #b1b1b1;
	    text-align: center;
	    line-height: 20px;
	    margin-right: 10px;
	}
	ul li h2 a {
	    float: left;
	    width: 130px;
	    color: #444;
	}
	.ellipsis {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    -o-text-overflow: ellipsis;
	    -moz-text-overflow: ellipsis;
	    -webkit-text-overflow: ellipsis;
	}
	ul li h2 em.down {
		background-repeat: no-repeat;
		background-position: -283px -2202px;
	}
	ul li h2 em.up {
		background-repeat: no-repeat;
		background-position: -283px -2138px;
	}
	ul li h2 em {
	    float: right;
	    display: block;
	    width: 32px;
	    height: 20px;
	}
	ul li p.expnum {
		text-align: left;
	    font-size: 12px;
	    color: #888;
	    margin: 0;
	    padding: 0 0 3px 30px;
	    line-height: 26px;
	}
	ul li p.expnum a {
	    color: #888;
	}
	ul li.first p img {
	    width: 100%;
	    height: 100%;
	}
	ul li:hover {
		background: #fff;
		box-shadow: 0 3px 3px #e5e9ef;
	}
	ul li:hover p.minimg {
		display: block
	}
	ul li p.minimg {
	    position: absolute;
	    top: 10px;
	    margin: 0;
	    right: 10px;
	    display: none;
	}
	ul li p.minimg img {
	    width: 80px;
	    height: 40px;
	}
</style>