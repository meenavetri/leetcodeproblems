var isAnagram = function(s, t) {
    let map1 = new Map()
    if(s.length != t.length)
        return false
    for(let i=0;i<s.length;i++){
        if(map1[s[i]])
          map1[s[i]]++
        else
        map1[s[i]]=1
    }  
    for(let i=0;i<t.length;i++){
        if(map1[t[i]])
          map1[t[i]]--
        else
         return false
    }
    return true
};
