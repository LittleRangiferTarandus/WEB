//给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。
//示例 1:

//输入: [[1,1],2,[1,1]]输出: [1,1,2,1,1]
//解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
//来源：力扣（LeetCode）
//链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
//著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
//使用深度优先搜索的方法，显而易见，列表是一个树形结构，子叶节点是数字，而非子叶节点是列表。首先我们把嵌套列表转化为数组，使用深度优先搜索的方法，而后使用hasnext和next进行迭代
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    var list=[]
    function toList (nestedList){
        for(let i=0;i<nestedList.length;i++){
            if(nestedList[i].isInteger()) list.push(nestedList[i].getInteger());
            else toList(nestedList[i].getList())
        }
    }
    toList (nestedList)
    this.list=list
    this.index=0
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return !(this.list[this.index]===undefined)
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    this.index++
    return this.list[this.index-1]
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
