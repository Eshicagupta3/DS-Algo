//https://leetcode.com/problems/combination-sum-iv/
// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

//  

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.


function getSumCount(nums,sum,target,memo){
    if(target<sum){return 0;}
    if(target==sum){return 1;}
    if (memo.has(sum)) return memo.get(sum);
    let totalNo= 0;
    for(let itr=0;itr<nums.length;itr++){
       totalNo = totalNo + getSumCount(nums, sum+nums[itr],target,memo);
    }
    memo.set(sum, totalNo);
    return totalNo;
} 
var combinationSum4 = function(nums, target) {
    const memo = new Map();
    return getSumCount(nums,0,target,memo)
};