<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<div class="box">
			<h1>HTML测试</h1>
		</div>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar.vue'
	
	export default {
		data() {
			return {
				title: 'Hello Xiaoxie'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			tabbar
		}
	}
</script>

<style>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #58bc58;
	}
	h1{font-size:30px;font-weight:bold;color:#f00;}
</style>
