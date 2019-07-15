const fs=require("fs");
let data1=fs.readFileSync("./mock.txt");
try {
console.log(data1.toString());
console.log('输出完毕！');

let data2=fs.readFile("./mock.txt",(err,data3)=>{
    console.log("data3 ++++");
    console.log(data3.toString());
});
} catch (error) {

}
try {
    console.log(data2);
} catch (error) {
    
}

function my_async_function(name,fn){
    setTimeout(()=>{
        fn(null,"-"+name+"-");
    },3000);
}

my_async_function("Hello Node.js",(err,name)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(name);
});

// class Evente{
//     constructor(){
//         this.map={};
//     }
//     add(name,fn){
//         if(this.map[name]){
//             this.map[name].push(fn);
//             return;
//         }
//     }
//     emit(name,...args){
//         this.map[name].forEach(fn=>{
//             fn(...args);
//         });
//     }
// }
// let e=new Evente();
// e.add("hello",(err,name)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(name);
// })

// e.emit("hello","发生了错误");
// e.emit("hello",null,"hello Nodejs");