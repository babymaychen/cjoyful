<template>
	<div class="cj-filter" id="filter">
        <div class="cj-filter-panel">
            <div class="item item-moreshow">
                <label>分类</label>
                <ul>
                	<template v-for="item in classify">
                		<li v-bind:class="[item.current ? currentClass : '']" >
                			<a href="item.url" target="_blank">{{ item.name }}</a>
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
        currentClass: 'current'
      }
    },
    props: {
		classify: {
			type: Array
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