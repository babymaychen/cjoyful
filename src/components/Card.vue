<template>
	<el-card class="box-card" :id="id">
		<div class="clearfix header">
			<h2 class="title fLeft">
				<a class="titleText" target="_blank" href="//tv.youku.com/">{{ classifyData }}</a>
			</h2>
			<ul class="t_tab">
				<li :class="[current == index ? 'current' : '']" v-for="(data, index) in classify">
					<a :href="data.url" :rel="index" hidefocus="true" v-on:mouseover="mouseOver(index)">{{data.text}}</a>
				</li>
			</ul>
			<a class="tab-rank fr" href="http://top.youku.com/rank/detail/?m=97&amp;type=1" target="_blank">
	            <img :src="ranking">
	            剧集排行
	        </a>
	  	</div>
	  	<div class="body">
	  		<el-row :gutter="10" class="topBroadcast">
	  			<template v-for="eData in episodeData[current]" >
	  			    <el-col :span="11" v-if="eData.type == 'first'">
		  			  	<div class="bigImg clearfix">
			  				<a href="">
			  					<div class="mask"></div>
			  					<img :src="eData.content.bgImg" alt="eData.content.title">
			  					<ul class="p-info pos-bottom">
		  					        <li class="status hover-hide">
		  					            <span class="p-time hover-hide">
		  					                <i class="ibg"></i>
		  					                <span>{{eData.content.info}}</span>
		  					            </span>
		  					        </li>
		  					    </ul>
			  				</a>
			  			</div>
			  			<ul class="info-list">
		  			        <li class="title short-title">
		  			            <a :href="eData.content.url" :title="eData.content.title">{{ eData.content.title }}</a>
		  			        </li>
		  			        <li>
		  			            <span>{{ eData.content.desc }}</span>
		  			        </li>
		  			    </ul>
	  			    </el-col>
	  			    <el-col :span="13" v-else>
	  			  	    <el-row :gutter="2" v-for="data in eData">
	  			  		<el-col :span="8" v-for="item in data">
	  			  			<div class="sBImg">
	  			  				<a href="">
				  					<div class="mask"></div>
				  					<img :src="item.bgImg" alt="item.title">
				  					<ul class="p-info pos-bottom">
			  					        <li class="status hover-hide">
			  					            <span class="p-time hover-hide">
			  					                <i class="ibg"></i>
			  					                <span>{{item.info}}</span>
			  					            </span>
			  					        </li>
			  					    </ul>
				  				</a>
	  			  			</div>
  				  			<ul class="info-list">
  			  			        <li class="title short-title">
  			  			            <a :href="item.url" :title="item.title">{{ item.title }}</a>
  			  			        </li>
  			  			        <li>
  			  			            <span>{{ item.desc }}</span>
  			  			        </li>
  			  			    </ul>
	  			  		</el-col>
	  			  	</el-row>
	  			  </el-col>
	  			</template>
  			</el-row>
	  	</div>
	</el-card>
</template>

<script>
	export default {
		data() {
	    	return {
	    		current: 0,
	    		ranking: require('../assets/images/rankingList.png'),
	    		classify: [
	    			{
	    				url: '//tv.youku.com/',
	    				text: '最新'
	    			},
	    			{
	    				url: '//tv.youku.com/',
	    				text: '超级网剧'
	    			},
	    			{
	    				url: '//tv.youku.com/',
	    				text: '大陆剧'
	    			},
	    			{
	    				url: '//tv.youku.com/',
	    				text: '日韩剧'
	    			},
	    			{
	    				url: '//tv.youku.com/',
	    				text: '英美剧'
	    			},
	    			{
	    				url: '//tv.youku.com/',
	    				text: '港台剧'
	    			}
	    		],
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
	    		episodeData: [
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode_new1.jpg'),
			    				url: '',
			    				info: '更新至41集',
			    				title: '三生三世十里桃花',
			    				desc: '厉害了我们上神！白浅惩罚仙娥立威信'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode_new2.jpg'),
			    				url: '',
			    				info: '更新至36集',
			    				title: '校花前传之很纯很暧昧',
			    				desc: '杨明手术台上被揩油'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode_new2.jpg'),
			    				url: '',
			    				info: '更新至36集',
			    				title: '校花前传之很纯很暧昧',
			    				desc: '杨明手术台上被揩油'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode_new2.jpg'),
			    				url: '',
			    				info: '更新至36集',
			    				title: '校花前传之很纯很暧昧',
			    				desc: '杨明手术台上被揩油'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode_new3.jpg'),
			    				url: '',
			    				info: '更新至41集',
			    				title: '爱，来的刚好',
			    				desc: '韩栋江铠同欢喜冤家'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode_new3.jpg'),
			    				url: '',
			    				info: '更新至41集',
			    				title: '爱，来的刚好',
			    				desc: '韩栋江铠同欢喜冤家'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode_new3.jpg'),
			    				url: '',
			    				info: '更新至41集',
			    				title: '爱，来的刚好',
			    				desc: '韩栋江铠同欢喜冤家'
			    			}]
			    		}
			    	],
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode1.jpg'),
			    				url: '',
			    				info: '三集全',
			    				title: '神探夏洛克 第四季',
			    				desc: '福华组合回归迎战史上最黑暗Boss'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			}]
			    		}
			    	],
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode1.jpg'),
			    				url: '',
			    				info: '三集全',
			    				title: '神探夏洛克 第四季',
			    				desc: '福华组合回归迎战史上最黑暗Boss'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			}]
			    		}
			    	],
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode1.jpg'),
			    				url: '',
			    				info: '三集全',
			    				title: '神探夏洛克 第四季',
			    				desc: '福华组合回归迎战史上最黑暗Boss'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			}]
			    		}
			    	],
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode1.jpg'),
			    				url: '',
			    				info: '三集全',
			    				title: '神探夏洛克 第四季',
			    				desc: '福华组合回归迎战史上最黑暗Boss'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			}]
			    		}
			    	],
	    			[
	    				{
		    				type: "first",
		    				content: {
			    				bgImg: require('../assets/images/episode1.jpg'),
			    				url: '',
			    				info: '三集全',
			    				title: '神探夏洛克 第四季',
			    				desc: '福华组合回归迎战史上最黑暗Boss'
			    			}
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
				    		{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
				    		},
			    			{
			    				bgImg: require('../assets/images/episode2.jpg'),
			    				url: '',
			    				info: '更新至10',
			    				title: '黑色孤儿 第四季',
			    				desc: '克隆姐妹命运最终抉择'
			    			}]
		    			},
		    			{
		    				type: "",
		    				content: [{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			},
			    			{
			    				bgImg: require('../assets/images/episode3.jpg'),
			    				url: '',
			    				info: '10集全',
			    				title: '火枪手 第三季',
			    				desc: '火枪游侠用武力说话'
			    			}]
			    		}
			    	]
	    		]
	    	}
	    },
	    props: {
    		id: {
    			type: String
    		},
    		classifyData: {
    			type: String
    		}
    	},
	    methods: {
	        mouseOver: function(index) {
	        	this.current = index
	        }
	    }
	}
</script>

<style scoped>
	.el-card {
		margin: 10px 0;
	}
	a.tab-rank {
		font-size: 12px;
	    line-height: 13px;
	    margin-left: 18px;
	    margin-top: 5px;
	    color: rgb(85, 85, 85);
	}
	a.tab-rank:hover {
	    color: #0aeae2;
	}
	a.tab-rank img {
	    display: inline-block;
	    width: 13px;
	    height: 13px;
	    margin-right: 6px;
	    vertical-align: bottom;
	}
	.fr {
	    float: right;
	}
	
	.bigImg, .sBImg {
		position: relative;
	}
	.bigImg img, .sBImg img {
		width: 100%;
		height: 100%;
	}
	.bigImg .mask {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		visibility: hidden;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.7) url(../assets/images/play.png) 50% 50% no-repeat;
		filter: alpha(opacity=70) \9;
		z-index: 1;
		transition: .3s all linear;
		border-radius: 4px;
	}
	.sBImg .mask {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		visibility: hidden;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.7) url(../assets/images/play_46.png) 50% 50% no-repeat;
		filter: alpha(opacity=70) \9;
		z-index: 1;
		transition: .3s all linear;
		border-radius: 4px;
	}
	.info-list {
		text-align: left;
	    padding-bottom: 0;
	    margin-top: 3px;
	    padding: 5px 0 7px;
	}
	.info-list li span {
	    color: #999;
	    margin-right: 5px;
	    line-height: 14px;
	    font-size: 12px;
	}
	.info-list .title a {
	    font-size: 13px;
	    color: #555;
	}
	.info-list .title a:hover {
	    color: #0aeae2;
	}
	.p-list li {
	    margin-bottom: 4px;
	}
	.info-list .title {
		line-height: 18px;
		overflow: hidden;
	}
	.bigImg a, .sBImg a {
		width: 100%;
		height: 100%;
		z-index: 5;
		left: 0;
		top: 0;
		text-decoration: none;
		color: #FFF;
	}
	.bigImg:hover .mask, .sBImg:hover .mask {
		visibility: visible;
		opacity: 1;
	}
	.bigImg:hover .p-time, .sBImg:hover .p-time {
		visibility: hidden;
	}
	.t_tab .current a, .t_tab li:hover a {
	    background: 0;
	    color: #0aeae2;
	    border-bottom: 1px solid #0aeae2;
	    border-radius: 0;
	}
	.fLeft {
		float: left;
	}
	h2 {
		margin: 0;
		color: #555;
		line-height: 25px;
		font-weight: 400;
	}
	h2 a {
		color: rgb(85, 85, 85);
	}
	.title a.titleText {
		width: 30px;
		height: 27px;
	}
	.title a.titleText:before {
		content: "";
		display: inline-block;
		vertical-align: middle;
		height: 34px;
		width: 24px;
		background: url('../assets/images/icons.png') no-repeat -84px -1553px;
		margin-right: 18px;
	}
	.title a.titleText:after {
		content: "";
		display: inline-block;
		vertical-align: middle;
		height: 20px;
		width: 10px;
		background: url('../assets/images/icons.png') no-repeat -473px -1623px;
		margin-left: 18px;
	}
	.title:hover a.titleText {
		color: #14dcd4;
	}
	.title:hover a.titleText:after {
		background: url('../assets/images/icons.png') no-repeat -540px -1623px;
	}
	ul.t_tab {
		margin: -1px 0 0 20px;
		float: left;
		line-height: 27px;
	}
	ul.t_tab li {
		display: inline-block;
		list-style: none;
	}
	ul.t_tab li a {
		padding: 0;
	    margin: 0 10px;
	    height: 34px;
	    font-size: 14px;
	    display: inline-block;
	    line-height: 30px;
	    color: #555;
	    border-radius: 2px;
	}
	 .box-card .header {
		height: 20px;
		line-height: 20px;
		padding: 2px 0 13px;
		margin: 0 20px 20px 0;
		border-bottom: 1px solid #eee;
		font-size: 16px;
	}
	.bigImg .p-info {
		padding: 0;
	    width: 400px;
	    top: 250px;
	}
	.bigImg .pos-bottom {
	    height: 20px;
	    position: absolute;
	    bottom: 6px;
	    right: 2px;
	    margin: 0 10px;
	    color: #DEDEDE;
	}
	.sBImg .pos-bottom {
		bottom: 0;
		position: absolute;
		padding: 0;
		margin-bottom: 5px;
		margin: 0;
		left: 0;
	}
	.p-info .status {
	    margin-bottom: 6px;
	    overflow: visible;
	}
	.p-info li {
	    white-space: nowrap;
	    height: 20px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.p-time {
	    color: #FFF;
	    position: relative;
	    float: right!important;
	    margin-top: 2px;
	    height: 20px;
	    line-height: 18px;
	}
	.p-time .ibg {
	    border-radius: 2px;
	    position: absolute;
	    display: block;
	    top: auto;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: #000;
	    opacity: .5;
	    -ms-filter: alpha(opacity=50);
	    filter: alpha(opacity=50);
	    z-index: 0;
	}
	.p-time span {
		font-size: 10px;
	    position: relative;
	    display: inline-block;
	    padding: 0 5px;
	    height: 18px;
	    line-height: 18px;
	    z-index: 1;
	}
</style>