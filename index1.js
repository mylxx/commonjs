function pan(num, n = 2){
	var len = num.toString().length
	while(len < n) {
		num = '0' + num
		len ++
	}

	return num
}

 console.log(pan(1,4))