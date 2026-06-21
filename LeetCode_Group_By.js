//New Apporaches
//T(C(N)) and S(C(N))==O(N) as it requires dynamic memory alloc iteratively 
Array.prototype.groupBy = function(fn) {//  groupBy() function Declare
     return this.reduce((grouped, item) => {//Reducing the input function into Groped Set  Collection Constructor.
    const key = fn(item);//provided callback function's  Key's application
  
    if (!grouped[key]) {grouped[key] = []; }//Creating new Generated key to non-existed 1 
    grouped[key].push(item);//pushing Array's Current Item within new key
    return grouped;//Printing an updated next iterative grouped object in output
  }, {});};
//old Apporach
    // let s=new Set(fn);
    // for(let i=0;i<fn.length;i++){
    //     for(let j=i+1;j<fn.length-1;j++){
    //         if(fn.includes(i)>0){
    //             out=JSON.Stringify(
    //                 Array.forEach(fn=>s);
    //             );
    //         }
    //         else if(fn[i]===list[0]){
    //             out=JSON.Stringify(
    //                 Array.forEach(fn=>fn.add(list));
    //         }
    //         n=fn[i];
    //         else if(fn[i]===n){
    //             out=JSON.Stringify(
    //                 Array.forEach(fn=>fn.add("true",fn[i])));
    //         }
    //         else out=JSON.Stringify(
    //                 Array.forEach(fn=>fn.add("false",fn[j])));
    // }
    // }
    //  return out;
