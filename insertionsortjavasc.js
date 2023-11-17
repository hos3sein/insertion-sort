const x_list = [8,5,7,9,2,4,6,3]


const fn = (listt){
	const sorted_list=[];
	sorted_list.append(listt[0]);
	for (var i = 1; i < listt.length() ; i++) {
		const sorting = listt[i]
		for (var j = 0; j < sorted_list.length(); j++) {
			if (sorting < sorted_list[j]){
				sorted_list.splice(sorted_list[j] , 0 , sorting)
				break
			}
			else if(j == (sorted_list.length()-1){
				sorted_list.push(sorting)
			}
			
		}
	}
     
}

