// vue-music js总结
// 1，补0
function pan(num, n = 2){
	var len = num.toString().length
	while(len < n) {
		num = '0' + num
		len ++
	}

	return num
}

 console.log(pan(1,4))

// 2，使用 | 0 ，来向下取整，取代 Math.floor(9.7)=9; Math.ceil(9.1)=10


// 3, 有三种播放状态 sequence 0 loop 1 random 2   点击切换播放模式按钮
	// function changeMode(){

	// 	const mode = (this.mode + 1) % 3
	// }

// 4， vue 
created(){
	this.$watch('query', (newQuery) => {
		this.$emit('query', newQuery)
	})
}
