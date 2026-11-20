class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const length = nums.length
        let result = 0
        let count = 0
        for(let i = 0; i < length; i++){
            if(nums[i] == 0){
                result = Math.max(result, count)
                count = 0
            }else{
                count++
            }

        }
        return Math.max(result, count)
    }
}