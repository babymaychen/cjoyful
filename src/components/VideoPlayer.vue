<template>
<div class="scontent">
	<div class="player">
	    <div id="cjoyfulPlayer" class="cjoyful-player relative video-wrapper">
		    <div class="cjoyful-player-area">
    	        <div class="cjoyful-player-video-wrap">
    	        	<!-- 加载中 -->
    	        	<div class="cjoyful-player-video-panel" ref="loading">
    	        		<div class="cjoyful-player-video-panel-image">
    	        			<div class="cjoyful-player-video-panel-image-detail">
    	        				<div class="loading"><i></i><i></i><i></i><i></i></div>
    	        			</div>
    	        		</div>
    	        	</div>
    	        	<div class="cjoyful-player-video-danmaku"></div>
    		        <div class="cjoyful-player-video">
    		        	<video ref="video" class="centeredVideo" @timeupdate="handleTimeUpdate" @progress="handleProgress" @canplay="loadEnd"></video>
    	        	</div>

    	        	
        		</div>
        		<div class="cjf-gradient-bottom" v-bind:style="{ backgroundImage: 'url('+blackBg+')' }"></div>
        		<div class="cjf-bottom">
        			<!-- 控制条 -->
		        	<div class="cjf-contrl-video-slider" ref="slider" @click="videoSlideMove" @mousedown="videoMove">
	        	        <div class="cjf-contrl-video-inner" ref="sliderInner" :style="{ 'transform': `translate3d(${videoSlider.pos.current}px, 0, 0)`}"></div>
	        	        <div class="cjf-contrl-video-tail" :style="{ 'width': `${videoSlider.pos.current}px`}"></div>
	        	        <div class="cjf-contrl-video-rail">
	        	            <div class="cjf-contrl-video-rail-inner" :style="{ 'width': `${videoSlider.loaded}px`}"></div>
	        	        </div>
	        	    </div>

		        	<div class="cjf-controls">
		        		<!-- 左侧控制 -->
		        		<div class="cjf-left-controls">
		        			<!-- 前一个 -->
		        			<a class="cjf-prev-button cjf-button" title="上一集">
		        				<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		        					<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-9"></use>
		        					<path class="cjf-svg-fill" d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z" id="cjf-svg-9"></path>
		        				</svg>
		        			</a>
		        			<!-- 播放/暂停按钮 -->
				        	<button class="cjf-play-button cjf-button" v-on:click="changeVideoPlay" title="播放">
					        	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
					        	<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-26"></use>
					        	<path class="cjf-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="cjf-svg-26" v-if="isVideoPlay"></path>
					        	<path class="cjf-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="cjf-svg-26" v-else></path>
					        	</svg>
				        	</button>
				        	<a class="cjf-next-button cjf-button" title="下一集">
				        		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
				        			<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-11"></use>
				        			<path class="cjf-svg-fill" d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" id="cjf-svg-11"></path>
				        		</svg>
				        	</a>
				        	<!-- 声音 -->
				        	<div v-on:mouseover="setVolumePanelShow" v-on:mouseout="setVolumePanelHide" style="display:inline-block;">
		    		        	<button class="cjf-mute-button cjf-button" :title="[isMuteOrNot ? '取消静音' : '静音']" v-on:click="changeVolState">
		    			        	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		    			        	<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-13"></use>
		    			        	<path class="cjf-svg-fill cjf-svg-volume-animation-speaker" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="cjf-svg-13" v-if="!isMuteOrNot"></path>
		    			        	<path class="cjf-svg-fill cjf-svg-volume-animation-hider" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z" fill="#fff" id="cjf-svg-14" v-else></path>
		    			        	</svg>
		    		        	</button>
		    		        	<div :class="[panelShow && !isMuteOrNot ? 'volumeHover' : '', 'cjf-volume-panel']">
		    		        		<el-slider v-model="volNum"></el-slider>
		    		        	</div>
				        	</div>
					        <!-- 时间 -->
				        	<div class="cjf-time-display">
				        		<span class="cjf-time-current">{{currentTime}}</span>
				        		<span class="cjf-time-separator"> / </span>
				        		<span class="cjf-time-duration">{{duration}}</span>
				        	</div>
		        		</div>
		        		<!-- 右边控制 -->
		        		<div class="cjf-right-controls">
		        			<!-- 字幕 -->
		        			<button class="cjf-button" title="字幕">
		        				<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		        					<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-15"></use>
		        					<path d="M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 		L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 		L16,17 L25,17 L25,19 L25,19 Z" fill="#fff" id="cjf-svg-15"></path>
		        				</svg>
		        			</button>
		        			<!-- 设置 -->
		        			<button class="cjf-button cjf-settings-button" title="设置">
		        				<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		        					<use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-16"></use>
		        						<path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 	l 		-1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c 	-0.02,-0.19 -0.19,-0.33 		-0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l 	-1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l 		-1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 	-0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 		-0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 	c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 		.36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 	.93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 		-0.09,-0.51 l -1.68,-1.32 0,0 z m 	-5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 		-1.25,2.8 -2.8,2.8 l 0,0 z"	 fill="#fff" id="cjf-svg-16"></path>
		        				</svg>
		        			</button>
		        			<!-- 全屏 -->
				        	<button class="cjf-fullscreen-button cjf-button" title="全屏">
				        	    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
				        			<g class="cjf-fullscreen-button-corner-0">
				        			    <use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-21"></use>
				        			    <path class="cjf-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="cjf-svg-21"></path>
				        			</g>
				        			<g class="cjf-fullscreen-button-corner-1">
				        			    <use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-22"></use>
				        				<path class="cjf-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="cjf-svg-22"></path>
				        			</g>
				        			<g class="cjf-fullscreen-button-corner-2">
				        			    <use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-23"></use>
				        			    <path class="cjf-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="cjf-svg-23"></path>
				        			</g>
				        			<g class="cjf-fullscreen-button-corner-3">
				        			    <use class="cjf-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cjf-svg-24"></use>
				        			    <path class="cjf-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="cjf-svg-24"></path>
				        			</g>
				        	    </svg>
				        	</button>
		        		</div>
		        	</div>
		        </div>
	 		</div>
		</div>
    	<div class="cjoyful-player-right-area">
        	<div class="cjoyful-player-filter">
        		<el-tabs v-model="rightActiveTab" type="border-card" @tab-click="handleClick">
        		    <el-tab-pane label="选集" class="tabContent" name="episode">
        		    	<h3>选集</h3>
						<el-row v-for="i in 10" type="flex" justify="center">
						  <el-col :span="6" v-for="j in 4"><div class="grid-content bg-purple">{{(i-1)*4 + j}}</div></el-col>
						</el-row>
        		    </el-tab-pane>
        		    <el-tab-pane label="弹幕" name="bulletScreen">弹幕</el-tab-pane>
        		    <el-tab-pane label="推荐" name="recommend">推荐</el-tab-pane>
        		</el-tabs>
        	</div>
    	</div>
	</div>
</div>
</template>

<script>
  import flvjs from 'flv.js'
  import $ from 'jquery'
  import 'jquery-mousewheel'
  import 'malihu-custom-scrollbar-plugin'

  let flvPlayer = null
  const getMousePosition = function (e, type = 'x') {
      if (type === 'x') {
          return e.pageX
      }
      return e.pageY
  }
  const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val + ''
  }
  const timeParse = (sec) => {
    let min = 0
    min = Math.floor(sec / 60)
    sec = sec - min * 60
    return pad(min) + ':' + pad(sec)
  }

  export default {
  	data() {
  	    return {
  	    	blackBg: require('../assets/images/blackbg.png'),
  	    	panelShow: false,
  	    	volNum: 30,
  	    	isMuteOrNot: false,
  	    	isVideoPlay: false,
  	    	duration: timeParse(249),
  	    	currentTime: "00:00",
  	    	videoSlider: {
  	    	    len: 0,
  	    	    current: 0,
  	    	    loaded: 0,
  	    	    moving: false,
  	    	    pos: {
  	    	        start: 0,
  	    	        width: 0,
  	    	        innerWidth: 0,
  	    	        current: 0
  	    	    }
  	    	},
  	    	rightActiveTab: "episode"
  	    }
  	},
  	created() {
  	    
  	},
    beforeDestroy() {
        document.body.removeEventListener('mousemove', this.mouseMoveAction)
        document.body.removeEventListener('mouseup', this.mouseUpAction)
    },
  	methods: {
  		initVideo() {
  		    const $videoSlider = this.$refs.slider
  		    const $videoInner = this.$refs.sliderInner
  		    this.videoSlider.pos.start = $videoSlider.getBoundingClientRect().left
  		    this.videoSlider.pos.innerWidth = $videoInner.getBoundingClientRect().width
  		    this.videoSlider.pos.width = $videoSlider.getBoundingClientRect().width - this.videoSlider.pos.innerWidth
  		    this.videoSlider.len = this.$refs.video.duration
  		},
  		loadEnd() {
  			this.$refs.loading.style.display = "none"
  		},
  		mouseMoveAction (e) {
  		    if (this.videoSlider.moving) {
  		        this.videoSlideMove(e)
  		    }
  		},
  		mouseUpAction (e) {
            this.videoSlider.moving = false
        },
  	    setVolumePanelShow() {
  	    	this.panelShow = true
  	    },
  	    setVolumePanelHide() {
  	    	this.panelShow = false
  	    },
  	    changeVolState() {
  	    	if (this.isMuteOrNot) {
  	    		flvPlayer.muted = false
  	    		this.isMuteOrNot = false
  	    	} else {
  	    		flvPlayer.muted = true
  	    		this.isMuteOrNot = true
  	    	}
  	    },
  	    changeVideoPlay() {
  	    	if (this.isVideoPlay) {
  	    		this.isVideoPlay = false
  	    		flvPlayer.pause()
  	    	} else {
  	    		this.isVideoPlay = true
  	    		flvPlayer.play()
  	    	}
  	    },
  	    handleProgress() {
  	    	if (typeof(this.$refs.video) != 'undefined' && this.$refs.video.buffered.length > 0) {
  	    		this.videoSlider.loaded = (this.$refs.video.buffered.end(0) / this.$refs.video.duration) * this.videoSlider.pos.width
  	    	}
  	    },
  	    handleTimeUpdate() {
  	    	this.currentTime = timeParse(flvPlayer.currentTime)
  	    	this.timeline()
  	    },
  	    videoMove (e) {
  	        this.initVideo()
  	        this.videoSlider.moving = true
  	    },
  	    videoSlideMove (e) {
  	        const x = getMousePosition(e) - this.videoSlider.pos.start
  	        if (x > 0 && x < this.videoSlider.pos.width) {
  	            this.videoSlider.pos.current = x
  	            this.setVideoByTime(x / this.videoSlider.pos.width)
  	        }
  	    },
  	    setVideoByTime (percent) {
            this.$refs.video.currentTime = Math.floor(percent * this.videoSlider.len)
        },
        timeline() {
            const percent = flvPlayer.currentTime / flvPlayer.duration
            this.videoSlider.pos.current = (this.videoSlider.pos.width * percent).toFixed(3)
        },
        handleClick(tab, event) {
	        console.log(tab, event);
	    }
  	},
  	watch: {
		volNum: function(val, oldVal) {
			flvPlayer.volume = val / 100
		}
	},
  	computed: {

	},
	mounted() {
		this.initVideo()
		document.body.addEventListener('mousemove', this.mouseMoveAction, false)
		document.body.addEventListener('mouseup', this.mouseUpAction, false)
		if (flvjs.isSupported()) {
            let videoElement = this.$refs.video
            flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: '/flv',
            })
            flvPlayer.attachMediaElement(videoElement)
            flvPlayer.load()

        }

        $('.tabContent').mCustomScrollbar({
	        theme: 'light',
	        autoHideScrollbar: true,
	        setWidth: true,
	        setLeft: "5px",
	        scrollbarPosition: "inside",
	        callbacks: {
	          onTotalScroll: function () {
	            console.log('what')
	          }
	        }
	    })
	}
  }
</script>

<style scoped>
	@import "~malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
	.scontent {
		width: 1160px;
		margin: 0 auto 20px;
	    position: relative;
	    box-shadow: #ddd 0 0 5px;
	}
	.player {
		width: 1160px;
		height: 686px;
	}
	.loading{
	  width: 20px;
	  height: 20px;
	  transform-origin:center;
	  animation:loading-ani1 1s ease-in-out infinite;
	}
	.loading i,
	.loading i:before,
	.loading i:after{
	  content: '';
	  position:absolute;
	  width: 20px;
	  height: 20px;
	  display: inline-block;;
	  border-radius: 50%;
	}
	.loading i:before{
	  transform:translate(0,-20px) scale(0.75);

	}
	.loading i:after{
	  transform:translate(0,-35px) scale(0.5);
	}
	.loading i:nth-child(1){
	  transform:translate(0,50px);
	}
	.loading i:nth-child(1),
	.loading i:nth-child(1):before,
	.loading i:nth-child(1):after{
	  background: #ffb364;
	}
	.loading i:nth-child(2),
	.loading i:nth-child(2):before,
	.loading i:nth-child(2):after{
	  background: #00a892;
	}
	.loading i:nth-child(2){
	  transform:rotate(90deg) translate(0,50px);
	}
	.loading i:nth-child(3),
	.loading i:nth-child(3):before,
	.loading i:nth-child(3):after{
	  background: #1f4c59;
	}
	.loading i:nth-child(3){
	  transform:rotate(180deg) translate(0,50px);
	}
	.loading i:nth-child(4),
	.loading i:nth-child(4):before,
	.loading i:nth-child(4):after{
	  background: #ff5954;
	}
	.loading i:nth-child(4){
	  transform:rotate(270deg) translate(0,50px);
	}
	@keyframes loading-ani1{
	  80%,100%{
	    transform:rotate(360deg);
	  }
	}
	.cjoyful-player-video-wrap {
		height: 570px;
		position: relative;
		z-index: 6;
		width: 100%;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.relative {
		position: relative;
	}
	.video-wrapper {
		position: absolute;
		left: 0;
		width: 860px;
		height: 570px;
		margin: 0 auto;
		z-index: 3;
		margin-top: 10px;
		display: inline-block;
	}
	.cjoyful-player-area {
		width: 860px;
	    overflow: hidden;
	    position: relative;
	    display: inline-block;
	    height: 100%;
	    pointer-events: initial;
	}
	.cjoyful-player-video-panel {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 14;
	    background-color: #fff;
	    cursor: pointer;
	}
	.cjoyful-player-video-panel-image {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    text-align: center;
	    user-select: none;
	}
	.cjoyful-player-video-panel-image-detail {
	    display: inline-block;
	    position: relative;
	    margin-top: -50%;
	    margin-left: -50%;
	    width: 90px;
	    height: 90px;
	}
	.centeredVideo {
		width: 100%;
		height: 100%;
	    display: block;
	    width: 100%;
	    margin: 0 auto;
	}
	.cjoyful-player-video {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 10;
		box-sizing: border-box;
		padding: 2px 7px;
		background: #000;
		cursor: pointer;
	}
	.cjoyful-player-video-danmaku {
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	    z-index: 11;
	    cursor: pointer;
	    pointer-events: none;
	}
	.cjf-bottom {
	    -moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    bottom: 0;
	    height: 46px;
	    width: 100%;
	    z-index: 61;
	    padding-top: 3px;
	    text-align: left;
	    direction: ltr;
	    position: absolute;
	    text-shadow: 0 0 2px rgba(0,0,0,.5);
	}
	.cjf-controls {
		color: #fff;
	    height: 36px;
	    width: 100%;
	    line-height: 36px;
	    font-size: 109%;
	    text-align: left;
	    direction: ltr;
	    bottom: 0;
	    position: absolute;
	}
	.cjf-controls a {
	    color: inherit;
	    text-decoration: none;
	    -moz-transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    -webkit-transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    outline: 0;
	}
	.cjf-button, .cjf-controls .cjf-button {
	    opacity: .9;
	    display: inline-block;
	    width: 36px;
	    -moz-transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    overflow: hidden;
	}
	.cjf-left-controls {
	    float: left;
	    height: 100%;
	}
	.cjf-controls .cjf-button {
	    height: 100%;
	}
	.cjf-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]) {
	    cursor: pointer;
	}
	.cjf-controls .cjf-play-button {
	    width: 36px;
	}
	.cjf-controls .cjf-button {
	    height: 100%;
	}
	.cjf-button {
	    border: none;
	    background-color: transparent;
	    padding: 0;
	    color: inherit;
	    text-align: inherit;
	    font-size: 100%;
	    font-family: inherit;
	    cursor: default;
	    line-height: inherit;
	}
	.cjf-volume-panel {
	    display: inline-block;
	    width: 0;
	    height: 100%;
	    -moz-transition: margin .2s cubic-bezier(0.4,0.0,1,1),width .2s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: margin .2s cubic-bezier(0.4,0.0,1,1),width .2s cubic-bezier(0.4,0.0,1,1);
	    transition: margin .2s cubic-bezier(0.4,0.0,1,1),width .2s cubic-bezier(0.4,0.0,1,1);
	    cursor: pointer;
	    outline: 0;
	    visibility: hidden;
	}
	.volumeHover {
		width: 152px;
		margin-right: 3px;
		visibility: visible;
	}
	.cjf-time-display {
	    font-size: 13px;
	    display: inline-block;
	    vertical-align: top;
	    padding: 0 5px;
	    white-space: nowrap;
	    line-height: 36px;
	}
	.cjf-time-separator, .cjf-time-duration {
	    color: #ddd;
	}
	.cjf-fullscreen-button::after {
	    content: '';
	    display: block;
	    height: 100%;
	    width: 12px;
	    position: absolute;
	    top: 0;
	    left: 100%;
	}
	.cjf-play-button:not(.ytp-play-button-playlist)::before {
	    content: '';
	    display: block;
	    height: 100%;
	    width: 12px;
	    position: absolute;
	    top: 0;
	    left: -12px;
	}
	.cjf-right-controls {
	    float: right;
	    height: 100%;
	}
	.cjf-svg-fill {
	    fill: #fff;
	}
	.cjf-contrl-video-slider {
	    position: absolute;
	    cursor: pointer;
        width: 100%;
        height: 20px;
        top: 0;
        z-index: 28;
	    overflow: hidden;
	    transition: all .2s ease-in;
	}
	.cjf-contrl-video-inner {
	    position: absolute;
	    display: inline-block;
	    left: 0;
	    top: 50%;
	    background: #0aeae2;
	    width: .8rem;
	    height: .8rem;
	    border-radius: 50%;
	    margin-top: -.35rem;
	    z-index: 2;
	    cursor: pointer;
	    transition: all 16ms;
	}
	.cjf-contrl-video-rail {
	    position: absolute;
	    top: 50%;
	    width: 100%;
	    height: .3rem;
	    margin-top: -.05rem;
	    background: rgba(255,255,255,.4);
	    overflow: hidden;
	}
	.cjf-contrl-video-rail-inner {
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: .3rem;
	    background: #fff;
	    transition: transform .2s;
	}
	 .cjf-gradient-bottom {
	    height: 98px;
	    width: 100%;
	    position: absolute;
	    background-repeat: repeat-x;
	    -moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    pointer-events: none;
	    bottom: 0;
	    z-index: 20;
	    background-position: bottom;
	}
	.cjf-contrl-video-tail {
		background: #0aeae2;
		position: absolute;
		top: 50%;
		height: .3rem;
		margin-top: -.05rem;
		overflow: hidden;
		z-index: 100;
	}
	.cjoyful-player-right-area {
		position: absolute;
		right: 0;
		margin-top: 10px;
	    border-left: 1px solid #e2e2e2;
	    display: inline-block;
	    width: 300px;
	    overflow: hidden;
	    background-color: #fff;
	    box-sizing: border-box;
	    height: 570px;
	    vertical-align: top;
	}
	.cjoyful-player-right-area h3 {
		text-align: left;
	}
	.cjoyful-player-filter {
	    position: relative;
	    z-index: 2;
	    width: 100%;
	    zoom: 1;
	}
	.grid-content {
		border: 1px solid #0aeae2;
	    height: 48px;
	    line-height: 48px;
	    color: #0aeae2;
	    cursor: pointer;
	}
	.grid-content:hover {
		background: #eee;
		color: #000;
	}
	.tabContent {
		max-height: 500px;
	}
	.mCSB_scrollTools .mCSB_draggerRail {
	    width: 16px;
	    background-color: #edf2f9;
	}
	.mCSB_scrollTools {
	    width: 12px;
	}
</style>