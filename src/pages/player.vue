<template>
	<div class="home">
		<t-nav></t-nav>
		<t-search></t-search>
		<div class="menu-bg">
			<div class="menu-wrapper">
				<t-sub-nav></t-sub-nav>
				<div>
					<h2>
						心灵的声音 : 第55话 面包啊面包
					</h2>
					<breadcrumb></breadcrumb>
					<div class="v-title-info">
		                <div class="v-title-line">
		                    <i class="b-icon b-icon-a b-icon-play" title="播放"></i>
		                    <span id="dianji">546.7万</span>
		                </div>
		                <div class="v-title-line">
		                    <i class="b-icon b-icon-a b-icon-danmaku" title="弹幕"></i>
		                    <span id="dm_count">4.3万</span>
		                </div>
        				<time itemprop="startDate">
                            <i>2017-03-02 06:00</i>
                        </time>
		            </div>
				</div>
			</div>
		</div>
		<video-player></video-player>
		<foot></foot>
	</div>
</template>

<script>
  import tNav from '../components/Top-navigation.vue'
  import tSubNav from '../components/Top-sub-nav.vue'
  import tSearch from '../components/Top-search.vue'
  import breadcrumb from '../components/Breadcrumb.vue'
  import videoPlayer from '../components/VideoPlayer.vue'
  import foot from '../components/Foot.vue'

  export default {
  	data() {
  	    return {
  	    	
  	    }
  	},
  	methods: {
  	    
  	},
  	watch: {
		
	},
  	computed: {

	},
	mounted() {
		
	},
  	components: {
      tNav,
      tSearch,
      tSubNav,
      breadcrumb,
      videoPlayer,
      foot
    }
  }
</script>

<style scoped>
	h2 {
		text-align: left;
	}
	time i {
	    color: #99a2aa;
	    font-weight: normal;
	}
	.relative {
		position: relative;
	}
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
	.video-wrapper {
		position: relative;
		width: 980px;
		margin: 0 auto;
		z-index: 3;
		margin-top: 10px;
		display: inline-block;
	}
	.v-title-info {
		font-size: 13px;
	    height: 28px;
	    line-height: 28px;
	    margin: 10px 0;
	    zoom: 1;
	}
	.v-title-info .v-title-line {
	    width: auto;
	    padding-right: 25px;
	    display: inline-block;
	    width: auto;
	    vertical-align: middle;
	    float: left;
	    white-space: nowrap;
	    height: 28px;
	    line-height: 28px;
	}
	.b-icon.b-icon-a, .v-title-line {
	    line-height: 28px;
	    display: inline-block;
	    float: left;
	}
	.b-icon.b-icon-a {
	    width: 28px;
	    height: 28px;
	}
	.b-icon.b-icon-a.b-icon-play {
	    background-position: -659px -210px;
	}
	.b-icon.b-icon-a.b-icon-danmaku {
	    background-position: -659px -275px;
	}
	.b-icon.b-icon-a {
	    background: url(//static.hdslb.com/images/base/icons.png) top left no-repeat;
	}
	.v-title-info .v-title-line span {
	    position: relative;
	    padding: 0 5px;
	}
    .centeredVideo {
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
    }

    .ytp-chrome-bottom {
        -moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        bottom: 0;
        height: 36px;
        width: 100%;
        z-index: 61;
        padding-top: 3px;
        text-align: left;
        direction: ltr;
        position: absolute;
        text-shadow: 0 0 2px rgba(0,0,0,.5);
    }

	.ytp-progress-bar-container {
		display: block;
		position: absolute;
		width: 100%;
		bottom: 35px;
		height: 5px
	}
	.ytp-progress-bar {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 31;
	    outline: none;
	}
	.ytp-progress-bar-padding {
	    position: absolute;
	    width: 100%;
	    height: 16px;
	    bottom: 0;
	    z-index: 28;
	}
	.ytp-progress-list {
	    z-index: 39;
	    background: rgba(255,255,255,.2);
	    height: 100%;
	    -moz-transform: scaleY(0.6);
	    -ms-transform: scaleY(0.6);
	    -webkit-transform: scaleY(0.6);
	    transform: scaleY(0.6);
	    -moz-transition: -moz-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: -webkit-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -ms-transition: -ms-transform .1s cubic-bezier(0.4,0.0,1,1);
	    transition: transform .1s cubic-bezier(0.4,0.0,1,1);
	    position: relative;
	}
	.ytp-play-progress.ytp-swatch-background-color {
	    background: #0aeae2;
	}
	.ytp-load-progress {
	    z-index: 33;
	    background: rgba(255,255,255,.4);
	}
	.ytp-hover-progress {
	    z-index: 35;
	    background: rgba(230, 30, 30, 0.125);
	    opacity: 0;
	    -moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	    transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
	}
	.ytp-clip-start-exclude, .ytp-clip-end-exclude {
	    display: none;
	    z-index: 37;
	    background-color: rgba(255,255,255,0);
	    -moz-transition: background-color .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: background-color .1s cubic-bezier(0.4,0.0,1,1);
	    transition: background-color .1s cubic-bezier(0.4,0.0,1,1);
	}
	.ytp-chapter-marker, .ytp-time-marker, .ytp-hover-progress, .ytp-clip-start-exclude, .ytp-clip-end-exclude {
		position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 100%;
	    -moz-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	}
	.ytp-scrubber-container {
	    position: absolute;
	    top: -4px;
	    left: -6.5px;
	    z-index: 43;
	}
	.ytp-scrubber-button.ytp-swatch-background-color {
	    background-color: #0aeae2;
	}
	.ytp-scrubber-button {
	    height: 13px;
	    width: 13px;
	    border-radius: 6.5px;
	    -moz-transition: -moz-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: -webkit-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -ms-transition: -ms-transform .1s cubic-bezier(0.4,0.0,1,1);
	    transition: transform .1s cubic-bezier(0.4,0.0,1,1);
	    -moz-transform: scale(0);
	    -ms-transform: scale(0);
	    -webkit-transform: scale(0);
	    transform: scale(0);
	}
	.ytp-swatch-background-color, .ytp-swatch-background-color-secondary {
	    background-color: #f12b24;
	}
	.ytp-bound-time-left, .ytp-bound-time-right {
	    position: absolute;
	    display: none;
	    top: -29px;
	    z-index: 29;
	    background-color: rgba(28,28,28,0.9);
	    text-align: center;
	    color: #e3e3e3;
	    padding: 5px 9px;
	    opacity: 0;
	    -moz-transition: opacity .1s ease-in;
	    -webkit-transition: opacity .1s ease-in;
	    transition: opacity .1s ease-in;
	}
	.ytp-bound-time-right {
	    right: 0;
	}
	.ytp-bound-time-left, .ytp-bound-time-right {
	    position: absolute;
	    display: none;
	    top: -29px;
	    z-index: 29;
	    background-color: rgba(28,28,28,0.9);
	    text-align: center;
	    color: #e3e3e3;
	    padding: 5px 9px;
	    opacity: 0;
	    -moz-transition: opacity .1s ease-in;
	    -webkit-transition: opacity .1s ease-in;
	    transition: opacity .1s ease-in;
	}
	.ytp-clip-start, .ytp-clip-end {
	    display: none;
	    position: absolute;
	    width: 14px;
	    height: 14px;
	    bottom: -4.5px;
	    margin-left: -7px;
	    z-index: 44;
	    -moz-transform: scaleY(0.21428571428);
	    -ms-transform: scaleY(0.21428571428);
	    -webkit-transform: scaleY(0.21428571428);
	    transform: scaleY(0.21428571428);
	    -moz-transition: -moz-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: -webkit-transform .1s cubic-bezier(0.4,0.0,1,1);
	    -ms-transition: -ms-transform .1s cubic-bezier(0.4,0.0,1,1);
	    transition: transform .1s cubic-bezier(0.4,0.0,1,1);
	}
	.html5-video-player svg {
	    pointer-events: none;
	}
	.ytp-clip-start svg, .ytp-clip-end svg {
	    display: block;
	}
	.ytp-svg-shadow {
	    stroke: #000;
	    stroke-opacity: .15;
	    stroke-width: 2px;
	    fill: none;
	}
	.ytp-chrome-controls {
		color: #fff;
	    height: 36px;
	    line-height: 36px;
	    font-size: 109%;
	    text-align: left;
	    direction: ltr;
	}
	.ytp-left-controls {
	    float: left;
	    height: 100%;
	}
	.ytp-chrome-controls .ytp-button {
	    height: 100%;
	}
	.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]) {
	    cursor: pointer;
	}
	.ytp-chrome-controls .ytp-play-button {
	    width: 46px;
	}
	.ytp-chrome-controls .ytp-button {
	    height: 100%;
	}
	.ytp-play-button:not(.ytp-play-button-playlist)::before {
	    content: '';
	    display: block;
	    height: 100%;
	    width: 12px;
	    position: absolute;
	    top: 0;
	    left: -12px;
	}
	.ytp-playlist-menu-button-icon, .ytp-chrome-top .ytp-button:not(.ytp-playlist-menu-button), .ytp-chrome-controls .ytp-button, .ytp-replay-button {
	    opacity: .9;
	    display: inline-block;
	    width: 36px;
	    -moz-transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    transition: opacity .1s cubic-bezier(0.4,0.0,1,1);
	    overflow: hidden;
	}
	.html5-video-player a {
	    color: inherit;
	    text-decoration: none;
	    -moz-transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    -webkit-transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    transition: color .1s cubic-bezier(0.0,0.0,0.2,1);
	    outline: 0;
	}
	.ytp-button {
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
	.ytp-volume-panel {
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
	.ytp-time-display {
	    font-size: 13px;
	    display: inline-block;
	    vertical-align: top;
	    padding: 0 5px;
	    white-space: nowrap;
	    line-height: 35px;
	}
	.ytp-time-separator, .ytp-time-duration {
	    color: #ddd;
	}
	.ytp-chrome-controls .ytp-live-badge, .ytp-big-mode .ytp-chrome-controls .ytp-live-badge {
	    display: none;
	    width: auto;
	    text-transform: uppercase;
	}
	.ytp-chrome-controls {
	    height: 36px;
	    line-height: 36px;
	    font-size: 109%;
	    text-align: left;
	    direction: ltr;
	}
	.ytp-chrome-controls .ytp-button[aria-pressed]:after {
	    content: '';
	    display: block;
	    position: absolute;
	    height: 2px;
	    border-radius: 2px;
	    width: 0;
	    left: 18px;
	    bottom: 6px;
	    background-color: #f12b24;
	    -moz-transition: left .1s cubic-bezier(0.4,0.0,1,1),width .1s cubic-bezier(0.4,0.0,1,1);
	    -webkit-transition: left .1s cubic-bezier(0.4,0.0,1,1),width .1s cubic-bezier(0.4,0.0,1,1);
	    transition: left .1s cubic-bezier(0.4,0.0,1,1),width .1s cubic-bezier(0.4,0.0,1,1);
	}
	.ytp-fullscreen-button::after {
	    content: '';
	    display: block;
	    height: 100%;
	    width: 12px;
	    position: absolute;
	    top: 0;
	    left: 100%;
	}
	.ytp-play-button:not(.ytp-play-button-playlist)::before {
	    content: '';
	    display: block;
	    height: 100%;
	    width: 12px;
	    position: absolute;
	    top: 0;
	    left: -12px;
	}
	.ytp-right-controls {
	    float: right;
	    height: 100%;
	}
	.ytp-load-progress, .ytp-play-progress, .ytp-hover-progress {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 100%;
	    -moz-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	}
	.html5-video-player {
	    position: relative;
	    width: 100%;
	    height: 100%;
	    background-color: #000;
	    overflow: hidden;
	    outline: 0;
	    font-family: Roboto,Arial,Helvetica,sans-serif;
	    color: #eee;
	    text-align: left;
	    direction: ltr;
	    font-size: 11px;
	    line-height: 1.3;
	    -webkit-font-smoothing: antialiased;
	    -webkit-tap-highlight-color: rgba(0,0,0,0);
	    touch-action: manipulation;
	    contain: strict;
	}
	.ytp-gradient-bottom {
	    bottom: 0;
	    z-index: 20;
	    background-position: bottom;
	}
	.ytp-gradient-bottom {
	    height: 98px;
        width: 100%;
        position: absolute;
        background-repeat: repeat-x;
        -moz-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        -webkit-transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        transition: opacity .25s cubic-bezier(0.0,0.0,0.2,1);
        pointer-events: none;
	}
	.ytp-svg-fill {
	    fill: #fff;
	}
</style>