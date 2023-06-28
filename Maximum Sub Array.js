var maxSubArray = function(nums) {
    let maxsum= -Infinity
    let currsum = 0
    for(let i =0;i<nums.length;i++){
        currsum = Math.max(currsum+nums[i],nums[i])
        maxsum =  Math.max(currsum,maxsum)
    }
    return maxsum
};
