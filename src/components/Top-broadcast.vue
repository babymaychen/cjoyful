<template>
	<el-row :gutter="10" class="topBroadcast">
	  <el-col :span="11">
	  	<carousel :carousel-data="carouselData"></carousel>
	  </el-col>
	  <el-col :span="13">
	  	<el-row :gutter="5" v-for="data in sBroadcastData">
	  		<el-col :span="8" v-for="item in data">
	  			<div class="sBImg">
	  				<a href="">
	  					<div class="mask"></div>
	  					<img :src="item.bgImg" alt="item.title">
	  					<div class="info">
	  					<div class="t">【FGO】轮到呆毛们来给你洗脑了</div>
	  						<p class="up">up主：青空彼方</p>
	  						<p class="play">播放：153051</p>
	  					</div>
	  				</a>
	  			</div>
	  		</el-col>
	  	</el-row>
	  </el-col>
	</el-row>
</template>

<script>
	import carousel from './Carousel.vue'
	export default {
		data() {
	      return {
	      	carouselData: [
	      		{
	      			bgImg: require('../assets/images/carousel1.jpg'),
	      			title: '<三生三世>墨渊即将苏醒 夜华吃醋壁咚强吻白浅'
	      		},
	      		{
	      			bgImg: require('../assets/images/carousel1.jpg'),
	      			title: '<三生三世>墨渊即将苏醒 夜华吃醋壁咚强吻白浅'
	      		},
	      		{
	      			bgImg: require('../assets/images/carousel1.jpg'),
	      			title: '<三生三世>墨渊即将苏醒 夜华吃醋壁咚强吻白浅'
	      		},
	      		{
	      			bgImg: require('../assets/images/carousel1.jpg'),
	      			title: '<三生三世>墨渊即将苏醒 夜华吃醋壁咚强吻白浅'
	      		}	
	      	],
	      	sBroadcastData: [
	      		[{
	      			bgImg: require('../assets/images/topBroadcast1.jpg'),
	      			title: '特朗普任命安全事务助理'
	      		},
	      		{
	      			bgImg: require('../assets/images/topBroadcast1.jpg'),
	      			title: '特朗普任命安全事务助理'
	      		},
	      		{
	      			bgImg: require('../assets/images/topBroadcast1.jpg'),
	      			title: '特朗普任命安全事务助理'
	      		}],
	      		[{
	      			bgImg: require('../assets/images/topBroadcast2.jpg'),
	      			title: '[最劲爆]宋茜闯荡"思密达"'
	      		},
	      		{
	      			bgImg: require('../assets/images/topBroadcast2.jpg'),
	      			title: '[最劲爆]宋茜闯荡"思密达"'
	      		},
	      		{
	      			bgImg: require('../assets/images/topBroadcast2.jpg'),
	      			title: '[最劲爆]宋茜闯荡"思密达"'
	      		}]
	      	]
	      };
	    },
	  	components: {
	      carousel
	    }
	}
</script>

<style scoped>
	.topBroadcast {
		margin-top: 15px;
	}
	.sBImg {
		position: relative;
		border-radius: 5px;
	}
	.sBImg a {
		width: 100%;
		height: 100%;
		z-index: 5;
		left: 0;
		top: 0;
		text-decoration: none;
		color: #FFF;
	}
	.sBImg img {
		width: 170px;
		height: 110px;
		margin: 0 auto;
		margin-bottom: 20px;
		display: block;
	}
	.sBImg .info {
		text-align: left;
		padding: 10px 0 3px;
		height: 18px;
		overflow: hidden;
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 1;
		background: #000;
		background: -webkit-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
		background: -o-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
		background: -moz-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
		background: linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
		border-radius: 0 0 4px 4px;
	}
	.sBImg .mask {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		visibility: hidden;
		top: 0;
		left: 0;
		background: #000;
		background: rgba(0,0,0,0.7);
		filter: alpha(opacity=70) \9;
		z-index: 1;
		transition: .3s all linear;
		border-radius: 4px;
	}
	.sBImg:hover .mask {
		visibility: visible;
		opacity: 1;
	}
	.sBImg:hover .info {
		height: 100%;
		padding: 0;
		background: 0
	}
	.sBImg:hover .info .t {
		height: 36px;
		margin-top: 10px
	}
	.sBImg:hover .info p {
		opacity: 1;
		transition: .3s all linear
	}
	.info .t {
		font-size: 12px;
		height: 18px;
		line-height: 18px;
		overflow: hidden;
		color: #fff;
		margin: 0 5px;
		word-break: break-all;
		word-wrap: break-word;
	}
	.info p.up {
		margin-top: 10px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.info p {
		font-size: 13px;
	    color: #99a2aa;
	    margin: 5px 5px 0;
	    opacity: 0;
	    transition: .2s all linear;
	}
</style>