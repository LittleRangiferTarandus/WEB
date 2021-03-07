//131. 分割回文串
//给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
//返回 s 所有可能的分割方案。
function partition( s){
    var res = []
    backtrack(s, res, [])
    return res
}
function backtrack( s, res, path){
    if (!s.length){
        res.push(path)
        return
    }
    for(let i=1;i<s.length+1;i++){
        
        if (judge(s,0,i)){
            
            path .push(s.slice(0,i))
            backtrack(s.slice(i,s.length), res, path.slice(0,path.length) )
            path.pop()
        }
    }
}

var judge=function(s,indexl,indexr){
    let add=(indexr-indexl)%2===0?1:0,
        j=0,
        indexm=(indexr+indexl-1)>>1
    while(indexm-j>=indexl){
        if(s[indexm-j]!==s[indexm+j+add]) {return false}
        j++
    }
    return true
}
//用回溯的方法，利用递归
