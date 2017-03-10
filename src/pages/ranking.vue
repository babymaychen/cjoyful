<template>
	<div class="ranking">
		<t-nav></t-nav>
		<t-search></t-search>
    <div class="menu-bg">
		  <div class="menu-wrapper">
        <h2 class="alignL rank-Title">
          <a :class="[isSearchTopShow ? 'show' : '']" v-on:click="searchTopClick">搜索排行榜</a>
          <a :class="[isSearchTopShow ? '' : 'show']" v-on:click="rateTopClick">评分排行榜</a>
        </h2>
      </div>
    </div>
    <div class="menu-wrapper">
			<ranking-nav :classify="classify"></ranking-nav>
      <ranking-body :rankingDataArray="rankingDataArray" :searchType="isSearchTopShow"></ranking-body>
		</div>
		<to-top></to-top>
    <foot></foot>
  </div>
</template>

<script>
  import tNav from '../components/Top-navigation.vue'
  import tSearch from '../components/Top-search.vue'
  import rankingNav from '../components/rankingNav.vue'
  import rankingBody from '../components/rankingBody.vue'
  import toTop from '../components/ToTop.vue'
  import foot from '../components/Foot.vue'
  export default {
  	data() {
  	    return {
          isSearchTopShow: true,
  	    	classify: [
            {
              current: true,
              name: "全部",
              url: ""
            },
  	    		{
              current: false,
  	    			name: "剧集",
              url: ""
  	    		},
  	    		{
              current: false,
  	    			name: "综艺",
              url: ""
  	    		},
  	    		{
              current: false,
  	    			name: "电影",
              url: ""
  	    		},
  	    		{
              current: false,
  	    			name: "动漫",
              url: ""
  	    		},
  	    		{
              current: false,
  	    			name: "游戏",
              url: ""
  	    		},
  	    		{
              current: false,
  	    			name: "音乐",
              url: ""
  	    		}
  	    	],
          rankingDataArray: [
            [{
              title: "剧集",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'down',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "电影",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "综艺",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "动漫",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            }],
            [{
              title: "剧集",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "电影",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "综艺",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            },
            {
              title: "动漫",
              content: [
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                },
                {
                  url: '',
                  name: '三生三世十里桃花',
                  trend: 'up',
                  img: require('../assets/images/episodeRanking1.jpg'),
                  searchNum: 0
                }
              ]
            }]
          ],
          episodeRankingArray: [
            {
              name: "三生三世十里桃花",
              url: '',
              imgUrl: "",
              score: 0,
              playNum: 0,
              mainActors: [
                {
                  name: "杨幂",
                  url: ""
                },
                {
                  name: "赵又廷",
                  url: ""
                },
                {
                  name: "张智尧",
                  url: ""
                },
                {
                  name: "迪丽热巴",
                  url: ""
                },
                {
                  name: "连奕名",
                  url: ""
                },
                {
                  name: "高伟光",
                  url: ""
                }
              ]
            },
            {
              name: "热血长安 第一季",
              url: '',
              imgUrl: "",
              score: 0,
              playNum: 0,
              mainActors: [
                {
                  name: "徐海乔",
                  url: ""
                },
                {
                  name: "鞠婧祎",
                  url: ""
                },
                {
                  name: "李鹤",
                  url: ""
                },
                {
                  name: "张辛苑",
                  url: ""
                },
                {
                  name: "刘冠麟",
                  url: ""
                },
                {
                  name: "程小蒙",
                  url: ""
                }
              ]
            },
            {
              name: "热血长安 第一季",
              url: '',
              imgUrl: "",
              score: 0,
              playNum: 0,
              mainActors: [
                {
                  name: "徐海乔",
                  url: ""
                },
                {
                  name: "鞠婧祎",
                  url: ""
                },
                {
                  name: "李鹤",
                  url: ""
                },
                {
                  name: "张辛苑",
                  url: ""
                },
                {
                  name: "刘冠麟",
                  url: ""
                },
                {
                  name: "程小蒙",
                  url: ""
                }
              ]
            },
            {
              name: "热血长安 第一季",
              url: '',
              imgUrl: "",
              score: 0,
              playNum: 0,
              mainActors: [
                {
                  name: "徐海乔",
                  url: ""
                },
                {
                  name: "鞠婧祎",
                  url: ""
                },
                {
                  name: "李鹤",
                  url: ""
                },
                {
                  name: "张辛苑",
                  url: ""
                },
                {
                  name: "刘冠麟",
                  url: ""
                },
                {
                  name: "程小蒙",
                  url: ""
                }
              ]
            }
          ]
  	    }
  	},
    methods: {
      searchTopClick() {
        this.isSearchTopShow = true
      },
      rateTopClick() {
        this.isSearchTopShow = false
      }
    },
  	components: {
      tNav,
      tSearch,
      rankingNav,
      rankingBody,
      toTop,
      foot
    }
  }
</script>

<style scoped>
  .menu-bg {
    background: #fff;
    width: 100%;
  }
  .rank-Title {
    font-size: 20px;
    font-weight: 200;
    overflow: hidden;
    zoom: 1;
    cursor: pointer;
  }
  .rank-Title a {
    display: block;
    float: left;
    width: 134px;
    height: 35px;
    color: #444;
    text-align: center;
    line-height: 33px;
  }
  .rank-Title a:hover {
    color: #cf2b5f;
  }
  .rank-Title a.show {
      color: #fff;
      background: #16484a;
  }
  .alignL {
    text-align: left;
  }
	.menu-bg {
		background: #fff;
		width: 100%;
	}
	.menu-wrapper {
		position: relative;
		width: 1200px;
		margin: 0 auto;
		padding: 6px 0;
		z-index: 3;
		display: inline-block;
	}
</style>