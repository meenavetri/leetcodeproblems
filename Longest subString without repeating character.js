var lengthOfLongestSubstring = function(s) {
    let maxlength=0
    let currentstring=[]
    for(let i=0;i<s.length;i++){
        currentindex = currentstring.indexOf(s[i])
        if(currentindex!=-1){
            currentstring.splice(0,currentindex+1)
        }
        currentstring.push(s[i])
        maxlength=Math.max(maxlength,currentstring.length)
    }
    return maxlength
};
