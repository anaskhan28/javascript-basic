function palindrome(str){
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg, "");
    console.log(smallStr);

    var reversed = str.split("").reverse().join("");
    if(reversed === str){ 
        console.log(true);
    }else{
    console.log(false);
    }
}
palindrome("@racecar@")


