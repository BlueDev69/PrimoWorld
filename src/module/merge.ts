//import { IMergeParameter } from "./merge.interface";

// let collection_1:Array<number>;
// let collection_2:Array<number>;

// const swap = (indexSwap:number, indexPivot:number) => {
//     let t:number = collection_1[indexSwap];
//     collection_1[indexSwap] = collection_2[indexPivot];
//     collection_2[indexPivot] = t;
// }

//col1: 1,3,5
//col2: 2,4,6
//result: 1,2,3,4,5,6
const merge = (collection_1:Array<number>, collection_2:Array<number>) => {
    const result:Array<number> = collection_1.concat(collection_2); //[1,3,5,2,4,6]
    if(collection_1.length == 0 && collection_2.length == 0) return "all collection is null, Please input value"
    return qSort(result);
}

//quick sort
const qSort = (data:Array<number>) => {

    console.log("data", data);
    if (data.length == 0) return [];

    let left:Array<number> = [], right:Array<number> = [], pivot:number = data[0];

    for (let i = 1; i < data.length; i++) {
        console.log("data[i]:", data[i], "pivot:", pivot);
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }

    console.log("l", left, "r:",right, "p:", pivot);
    return qSort(left).concat(pivot, qSort(right));

}
export default merge;