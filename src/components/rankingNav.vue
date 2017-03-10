<template>
	<div class="cj-filter" id="filter">
        <div class="cj-filter-panel">
            <div class="item item-moreshow">
                <label>分类</label>
                <ul>
                	<template v-for="(item, index) in classify">
                		<li v-bind:class="[item.current ? currentClass : '']" >
                			<a v-on:click="mainClassifyClick(index, item.name)">{{ item.name }}</a>
                		</li>
                	</template>
                </ul>
            </div>
            <div class="item" v-if="area.length > 0">
                <label>地区</label>
                <ul>
                	<template v-for="item in area">
                		<li v-bind:class="[item.current ? currentClass : '']" >
                			<a>{{ item.text }}</a>
                		</li>
                	</template>
                </ul>
            </div>
            <div class="item" v-if="type.length > 0">
                <label>分类</label>
                <ul>
                	<template v-for="item in type">
                		<li v-bind:class="[item.current ? currentClass : '']" >
                			<a>{{ item.text }}</a>
                		</li>
                	</template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      	mainClassifyCurrentIndex: 0,
        currentClass: 'current',
        area: [],
        type: [],
        subClassify: {
        	episode: {
        		area: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '大陆'
        			},
        			{
        				current: false,
        				text: '港台'
        			},
        			{
        				current: false,
        				text: '日韩'
        			},
        			{
        				current: false,
        				text: '欧美'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '言情'
        			},
        			{
        				current: false,
        				text: '古装'
        			},
        			{
        				current: false,
        				text: '都市'
        			},
        			{
        				current: false,
        				text: '家庭'
        			},
        			{
        				current: false,
        				text: '偶像'
        			},
        			{
        				current: false,
        				text: '历史'
        			},
        			{
        				current: false,
        				text: '警匪'
        			},
        			{
        				current: false,
        				text: '搞笑'
        			},
        			{
        				current: false,
        				text: '军事'
        			},
        			{
        				current: false,
        				text: '武侠'
        			},
        			{
        				current: false,
        				text: '科幻'
        			},
        			{
        				current: false,
        				text: '儿童'
        			}
        		]
        	},
        	movie: {
        		area: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '华语'
        			},
        			{
        				current: false,
        				text: '日韩'
        			},
        			{
        				current: false,
        				text: '欧美'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '剧情'
        			},
        			{
        				current: false,
        				text: '喜剧'
        			},
        			{
        				current: false,
        				text: '动作'
        			},
        			{
        				current: false,
        				text: '爱情'
        			},
        			{
        				current: false,
        				text: '恐怖'
        			},
        			{
        				current: false,
        				text: '犯罪'
        			},
        			{
        				current: false,
        				text: '冒险'
        			},
        			{
        				current: false,
        				text: '奇幻'
        			},
        			{
        				current: false,
        				text: '科幻'
        			},
        			{
        				current: false,
        				text: '动画'
        			},
        			{
        				current: false,
        				text: '历史'
        			},
        			{
        				current: false,
        				text: '歌舞'
        			},
        			{
        				current: false,
        				text: '西部'
        			}
        		]
        	},
        	variety: {
        		area: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '大陆'
        			},
        			{
        				current: false,
        				text: '港台'
        			},
        			{
        				current: false,
        				text: '日韩'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '热门综艺'
        			},
        			{
        				current: false,
        				text: '真人秀'
        			},
        			{
        				current: false,
        				text: '访谈'
        			},
        			{
        				current: false,
        				text: '情感'
        			},
        			{
        				current: false,
        				text: '音乐'
        			},
        			{
        				current: false,
        				text: '美食'
        			},
        			{
        				current: false,
        				text: '选秀'
        			},
        			{
        				current: false,
        				text: '娱乐'
        			},
        			{
        				current: false,
        				text: '晚会'
        			},
        			{
        				current: false,
        				text: '舞蹈'
        			},
        			{
        				current: false,
        				text: '体育'
        			},
        			{
        				current: false,
        				text: '益智'
        			},
        			{
        				current: false,
        				text: '脱口秀'
        			}
        		]
        	},
        	cartoon: {
        		area: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '大陆'
        			},
        			{
        				current: false,
        				text: '港台'
        			},
        			{
        				current: false,
        				text: '日韩'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '热血格斗'
        			},
        			{
        				current: false,
        				text: '校园运动'
        			},
        			{
        				current: false,
        				text: '恋爱美少女'
        			},
        			{
        				current: false,
        				text: '科幻'
        			},
        			{
        				current: false,
        				text: '亲子益智'
        			},
        			{
        				current: false,
        				text: '搞笑'
        			},
        			{
        				current: false,
        				text: '神魔'
        			},
        			{
        				current: false,
        				text: '童话'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		]
        	},
        	music: {
        		area: [],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '华语'
        			},
        			{
        				current: false,
        				text: '日韩'
        			},
        			{
        				current: false,
        				text: '欧美'
        			},
        			{
        				current: false,
        				text: '男歌手'
        			},
        			{
        				current: false,
        				text: '女歌手'
        			},
        			{
        				current: false,
        				text: '乐队组合'
        			},
        			{
        				current: false,
        				text: '演唱会'
        			},
        			{
        				current: false,
        				text: '流行'
        			},
        			{
        				current: false,
        				text: '其他'
        			}
        		]
        	},
        	game: {
        		area: [],
        		type: [
        			{
        				current: true,
        				text: '不限'
        			},
        			{
        				current: false,
        				text: '游戏资讯'
        			},
        			{
        				current: false,
        				text: '网络游戏'
        			},
        			{
        				current: false,
        				text: '游戏音乐'
        			},
        			{
        				current: false,
        				text: '电子竞技'
        			},
        			{
        				current: false,
        				text: '单机游戏'
        			},
        			{
        				current: false,
        				text: '魔兽世界'
        			},
        			{
        				current: false,
        				text: '地下城与勇士'
        			},
        			{
        				current: false,
        				text: '手机游戏'
        			}
        		]
        	}
        }
      }
    },
    props: {
		classify: {
			type: Array
		}
	},
    methods: {
      mainClassifyClick(index, name) {
        if (name == "剧集") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.episode.area
        	this.type = this.subClassify.episode.type
        } else if (name == "电影") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.movie.area
        	this.type = this.subClassify.movie.type
        } else if (name == "综艺") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.variety.area
        	this.type = this.subClassify.variety.type
        } else if (name == "动漫") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.cartoon.area
        	this.type = this.subClassify.cartoon.type
        } else if (name == "音乐") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.music.area
        	this.type = this.subClassify.music.type
        } else if (name == "游戏") {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = index
        	this.classify[index].current = true
        	this.area = this.subClassify.game.area
        	this.type = this.subClassify.game.type
        } else {
        	this.classify[this.mainClassifyCurrentIndex].current = false
        	this.mainClassifyCurrentIndex = 0
        	this.classify[0].current = true
        	this.area = []
        	this.type = []
        }
      }
    }
  }
</script>

<style scoped>
	.cj-filter {
		font-size: 15px;
	    margin: 20px 0 0;
	    border-top: 0 none;
	    border-bottom: 0 none;
	    overflow: hidden;
	    zoom: 1;
	}
	.cj-filter .cj-filter-panel .item {
	    zoom: 1;
	    overflow: hidden;
	    position: relative;
	    height: 50px;
	    padding: 0 0 0 60px;
	    background: #fff;
	    margin-bottom: 4px;
	    border-bottom: 1px solid #ddd;
	}
	.cj-filter .cj-filter-panel .item label {
	    position: absolute;
	    top: 15px;
	    left: 0;
	    width: 47px;
	    color: #909090;
	}
	.cj-filter .cj-filter-panel .item li {
	    float: left;
	    margin: 0 0 4px;
	}
	.cj-filter .cj-filter-panel .item label, .yk-filter .cj-filter-panel .item a, .cj-filter .cj-filter-panel .item span {
	    display: block;
	    white-space: nowrap;
	    font-size: 14px;
	}
	.cj-filter .cj-filter-panel .item .current a, .cj-filter .cj-filter-panel .item .current span {
	    cursor: default;
	    background: #0aeae2;
	    color: #fff;
	}
	.cj-filter .cj-filter-panel .item .current a:hover {
	    cursor: default;
	    background: #0aeae2;
	    color: #fff;
	}
	.cj-filter .cj-filter-panel .item a:hover {
		color: #cf2b5f;
	}
	.cj-filter .cj-filter-panel .item a, .cj-filter .cj-filter-panel .item span {
	    padding: 10px;
	    color: #444;
	}
	.cj-filter .cj-filter-panel .item ul:after {
	    clear: both;
	}
	.cj-filter .cj-filter-panel .item ul:before, .cj-filter .cj-filter-panel .item ul:after {
	    display: table;
	    content: "";
	    line-height: 0;
	}
</style>