<template>
	<div class="tabbar">
		<div class="tabbar-item" v-for="item in list" v-bind:key="item.path" @click="goto(item.path)">
			{{item.text}}
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[{text:'首页',path:"/pages/index/index"},{text:'我的',path:"/pages/mine/mine"}]
			}
		},
		methods:{
			goto(path){
				console.log('path=',path);
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
		display: flex;border-top:1px solid #ddd;position:fixed;left:0;bottom:0;right:0;
		.tabbar-item{
			flex:1;
			padding:15px;text-align: center;;
		}
	}
</style>
