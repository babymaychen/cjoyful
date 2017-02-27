<template>
  <el-carousel indicator-position="inside" interval="5000">
  	<a href="http://v.youku.com/v_show/id_XMjUyMzE0NDU0MA==.html?spm=a2hww.20023042.m_223465.5~5~5~5~5~5~A" title="<三生三世>墨渊即将苏醒 夜华吃醋壁咚强吻白浅" data-from="1-1" target="video" data-spm-anchor-id="a2hww.20023042.m_223465.5~5~5~5~5~5~A"></a>
    <el-carousel-item v-for="item in carouselData" v-bind:style="{ background: 'url('+item.bgImg+')' }">
      <h3>{{ item.title }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
	export default {
	    props: {
	      carouselData: {
	        type: Array
	      }
	    }
	}
</script>
<style>
  .el-carousel__container a {
  	position: absolute;
  	width: 100%;
  	height: 100%;
  	z-index: 5;
  	left: 0;
  	top: 0;
  	text-decoration: none;
  	color: #FFF;
  }
  .el-carousel__indicators {
  	z-index: 10;
  }
  .el-carousel__container {
  	height: 240px;
  }
  .el-carousel__item h3 {
    color: #fff;
    font-size: 16px;
    line-height: 420px;
    margin: 0;
  }
</style>