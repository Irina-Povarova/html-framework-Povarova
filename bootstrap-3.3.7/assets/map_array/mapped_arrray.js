let count=0;
let n=5;
var start_array=[];
//start array initialization
while(count < n){
	start_array.push(count);
    console.log(start_array[count]);
	count++;};
//mapped array creation
var mapped_array=[];
var mcount=0;
while(mcount < n){
	mapped_array.push(Math.pow(2,start_array[mcount]));
	console.log(start_array[mcount], mapped_array[mcount]);
	mcount++;
	};
//check mapping
var arraymap=[];
arraymap=start_array.map(function(x) {
	return(Math.pow(2,start_array));
}); 
console.log(arraymap);					