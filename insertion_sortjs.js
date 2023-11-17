
const x_list = [5,8,6,7,9,2,4];

const f = (x_list)=>{
	const sorted_list=[];
	while true{
		sorted_list.append(Math.min(x_list));
		x_list.remove(Math.min(x_list));
		if ( x_list.length() == 1 ){
			sorted_list.append(x_list[0]);
			break;
		}
	}
	return (sorted_list)
}




const answer = f(x_list)

console.log(answer)

