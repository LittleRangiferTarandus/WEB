//给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
//注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
//来源：力扣（LeetCode）
//链接：https://leetcode-cn.com/problems/largest-number
//著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//把数字转为字符串，然后按照两个字符串连接起来的大小进行排序

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const numStr=[];
    if(Math.max(...nums)===0) return '0';
    for(let i of nums){
        numStr.push(i.toString())
    }
    numStr.sort((a,b)=>{
        return ((a+b)<(b+a))-1
    })
    return numStr.join('')
};
