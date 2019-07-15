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

