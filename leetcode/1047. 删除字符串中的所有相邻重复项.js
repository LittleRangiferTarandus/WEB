//1047. 删除字符串中的所有相邻重复项
//给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
//在 S 上反复执行重复项删除操作，直到无法继续删除。
//在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
var removeDuplicates = function(S) {
    let len=S.length
    let s=S.split('')
    if (S<2) return;
    for(let i=1;i<len;i++){
        if(s[i]===s[i-1]){
            s.splice(i-1,2)
            i-=2
            len-=2
        }
    }
    return s.join('')
};
