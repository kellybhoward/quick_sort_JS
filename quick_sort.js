//Quick sort uses partitions and puts lower values on the left and higher values on the right of the pivot value
//This function uses a pivot picker method to choose the median value out of 3 possible values to reduce runtime

//calling wrapper sort function to return sorted array
function quickSort(array){
    qSort(array);
    return array;
}

//Quick sort function 
function qSort(array, start, end){
    var newPI = partition(array, start, end);
    if ( end - start == 1) {return;}
    qSort(array, 0, newPI);
    qSort(array, newPI + 1, array.length);
}

//The partition function is where the pivot is picked and the values are thrown on the right or left
function partition(arr, start, end){
    start = start || 0;
    end = end || arr.length;
    var pI = pickPivot(arr, start, end-1);
    var pivot = arr[pI];
    arr[pI] = arr[start];
    var lastLowI = start;
    for(var i = start + 1; i < end; i++)    {
        if(arr[i] < pivot){
            var temp = arr[i];
            arr[i] = arr[++lastLowI];
            arr[lastLowI] = temp;
        }
    }
    arr[start] = arr[lastLowI];
    arr[lastLowI] = pivot;
    return lastLowI;
}

//pivot picker function to get the median value between the start, end, and middle values
function pickPivot(arr, start, end){
    var a = arr[start];
    var c = arr[end];
    var bI = Math.floor((start+end))/2;
    b = arr[bI];
    return  (((a-b)*(b-c) >= 0) ? bI :
            (((a-c)*(c-b) >=0) ? end-1 :
            start));
}

//sample call to check pivot picker
var array1 = [7,2,5,4,3]; //should return index 2 (value 5)
console.log(pickPivot(array1, 0, array1.length-1));

//sample call to check the partition function
var array2 = [3,2,2,5,1];
console.log(partition(array2)); //returns the last low index (3) 

//run sort on a sample array
var array3 = [5,2,1]
console.log(quickSort(array3));
