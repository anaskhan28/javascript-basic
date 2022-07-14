function palindrome(str){
    var reversed = str.split("").reverse().join("");
    if(reversed === str){ 
        console.log(true);
    }else{
    console.log(false);
    }

}
palindrome("racecar")