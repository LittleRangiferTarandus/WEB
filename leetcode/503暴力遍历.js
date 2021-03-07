var nextGreaterElements = function(nums) {
    let n = nums.length,list=[]
    for(let i=0;i<n;i++){
        list[i]=-1
        j=i+1
        while(j!=i){
            if(i==0&&j==n){break}
            if(j==n){j=0}
            if(nums[j]>nums[i]){
                list[i]=(nums[j])
                break
            }
            j++
            
        }
    }
    return list
};
