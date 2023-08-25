// LEETCODE URL : https://leetcode.com/problems/interleaving-string/description/

//=========== Question ============
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m
// substrings
// respectively, such that:

//     s = s1 + s2 + ... + sn
//     t = t1 + t2 + ... + tm
//     |n - m| <= 1
//     The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
//== Example 1:==
// Note: a + b is the concatenation of strings a and b.
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
//== Example 2:==
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.


//=========== Complexity =============
//Time Complexity: O(m×n)
// The solution iterates over each possible (i,j)(i, j)(i,j) combination, leading to a time complexity of O(m×n)O(m \times n)O(m×n).
// Space Complexity: O(m×n)

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 let hash = {};
 function matchString(s1,s2,s3,s1Itr,s2Itr,s3Itr){
     if(s3.length<=s3Itr && s1Itr >= s1.length && s2Itr >= s2.length){
         return true;
     }
     if(s3.length<=s3Itr){
         return false;
     }
     if(s1Itr >= s1.length && s2Itr >= s2.length){
         return false;
     }
     if(hash[s1Itr] && s2Itr in hash[s1Itr]) {
         return hash[s1Itr][s2Itr];
     }
     let match = false;
     if(s1Itr < s1.length && s1[s1Itr]==s3[s3Itr]) {
         match = matchString(s1,s2,s3,s1Itr+1,s2Itr,s3Itr+1);
     }
     if(s2Itr < s2.length && s2[s2Itr]==s3[s3Itr]) {
         match = match || matchString(s1,s2,s3,s1Itr,s2Itr+1,s3Itr+1);
     }
     if(!hash[s1Itr]) {
         hash[s1Itr] = {};
     }
     hash[s1Itr][s2Itr] = match;
     return match;
 } 
 var isInterleave = function(s1, s2, s3) {
     hash = {};
     return matchString(s1,s2,s3,0,0,0);
 };