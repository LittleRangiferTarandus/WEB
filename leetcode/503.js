////503. 下一个更大元素 II

//给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下
//一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的
//数。如果不存在，则输出 -1。

var nextGreaterElements = function(nums) {
    const n = nums.length;
    const ret = new Array(n).fill(-1);
    const stk = [];
    for (let i = 0; i < n * 2 - 1; i++) {
        while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
            ret[stk[stk.length - 1]] = nums[i % n];
            stk.pop();
        }
        stk.push(i % n);
    }
    return ret;
};
//返回值数组初始化为-1；
//使用单调栈的方法，遍历循环数组，栈为空或者新元素i小于等于栈顶元素则新元素的下标入栈，
//否则，清空栈中，小于i的元素，被清空元素相对应的下标，在返回值数组中，赋值为i
