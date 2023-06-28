class Solution {
    public int pivotIndex(int[] nums) {
        int sum=0;
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
        }
        int right=sum;
        int left=0;
        for(int i=0;i<nums.length;i++){
            right-=nums[i];
            if(right==left){
                return i;
            }
            left+=nums[i];
        }
        return -1;
    }
}
