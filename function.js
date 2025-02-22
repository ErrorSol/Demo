function get_cheese(callback){
    setTimeout(()=>{
        const cheese= "cheese";
        console.log("Got the cheese",cheese);
        callback();
    },2000)
}

function make_dough(cheese,callback){
    setTimeout(()=>{
        const dough="dough";
        console.log("Got the Dough",dough);
        callback();
    },2000)
}

function make_pizza(dough,callback){
    setTimeout(() => {
        const pizza="pizza";
        console.log("Got the Pizza");
        callback();
    }, 2000);
}

get_cheese(()=>{
    make_dough(get_cheese,()=>{
        make_pizza(make_dough,()=>{
            console.log("The Pizza is ready");
        })
    })
    
});