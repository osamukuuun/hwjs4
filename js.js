// 1
var i, a;
for(i = 1; i <= 10; i++){
    a = -25;
    var b = 25;
    if (a > b){
        var c = a;
        a = b;
        b - c;
    }
    a = Math.floor(Math.random()*(b-a+1)+a);
    if(a>=0){
        console.log(a);
    }
    else{
        console.log(String(a)+String("?"));
    }
}

// 2
var i;
window.alert("Початок");
for(i = 99;i >= 10; i--){
    if(i % 10 == 7){
        window.alert(i);
    }

}
window.alert("Завершенно");