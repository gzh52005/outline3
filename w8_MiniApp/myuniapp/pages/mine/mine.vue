<template>
	<view class="content">
		<img src="/static/logo.png" />
		<h1>{{title}}</h1>
		<button @click="changeTitle">修改标题</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的'
			}
		},
		onLoad() {

		},
		methods: {
			changeTitle(){
				this.title = '我的mine'
			}
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
