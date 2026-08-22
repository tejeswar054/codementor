/**
 * Data-driven Problem Library for CodeMentor AI
 * Contains 75 curated LeetCode-style / Blind 75 problems across Arrays, Strings, Stack, Searching, Linked List, Hashing, Sorting, Two Pointers, Sliding Window, Trees, Graphs, DP, and Bit Manipulation.
 */

export const PROBLEMS = [
  // ==========================================
  // ARRAY / STRING (15 Problems)
  // ==========================================
  {
    id: 'two-sum',
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'Easy',
    topics: ['Array', 'Hash Table'],
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].' }
    ],
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
    language: 'javascript',
    functionName: 'twoSum',
    starterCode: `function twoSum(nums, target) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n}`,
      python: `def twoSum(nums: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0,1]', type: 'normal' },
      { input: '[3,2,4], 6', expected: '[1,2]', type: 'normal' },
      { input: '[3,3], 6', expected: '[0,1]', type: 'edge' }
    ]
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    slug: 'best-time-to-buy-and-sell-stock',
    difficulty: 'Easy',
    topics: ['Array', 'Dynamic Programming'],
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i-th\` day. Maximize profit by choosing a single day to buy and a future day to sell.`,
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' }
    ],
    constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
    language: 'javascript',
    functionName: 'maxProfit',
    starterCode: `function maxProfit(prices) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}`,
      python: `def maxProfit(prices: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[7,1,5,3,6,4]', expected: '5', type: 'normal' },
      { input: '[7,6,4,3,1]', expected: '0', type: 'edge' }
    ]
  },
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    slug: 'contains-duplicate',
    difficulty: 'Easy',
    topics: ['Array', 'Hash Table'],
    description: `Given an integer array \`nums\`, return \`true\` if any value appears at least twice in the array, and return \`false\` if every element is distinct.`,
    examples: [{ input: 'nums = [1,2,3,1]', output: 'true' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'containsDuplicate',
    starterCode: `function containsDuplicate(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function containsDuplicate(nums) {\n  // Write your solution here\n}`,
      python: `def containsDuplicate(nums: list[int]) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,1]', expected: 'true', type: 'normal' },
      { input: '[1,2,3,4]', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    slug: 'product-of-array-except-self',
    difficulty: 'Medium',
    topics: ['Array', 'Prefix Sum'],
    description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.`,
    examples: [{ input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' }],
    constraints: ['2 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'productExceptSelf',
    starterCode: `function productExceptSelf(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}`,
      python: `def productExceptSelf(nums: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4]', expected: '[24,12,8,6]', type: 'normal' },
      { input: '[-1,1,0,-3,3]', expected: '[0,0,9,0,0]', type: 'edge' }
    ]
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    slug: 'maximum-subarray',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.`,
    examples: [{ input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'maxSubArray',
    starterCode: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
      python: `def maxSubArray(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expected: '6', type: 'normal' },
      { input: '[1]', expected: '1', type: 'boundary' }
    ]
  },
  {
    id: 'maximum-product-subarray',
    title: 'Maximum Product Subarray',
    slug: 'maximum-product-subarray',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    description: `Given an integer array \`nums\`, find a subarray that has the largest product, and return the product.`,
    examples: [{ input: 'nums = [2,3,-2,4]', output: '6' }],
    constraints: ['1 <= nums.length <= 2 * 10^4'],
    language: 'javascript',
    functionName: 'maxProduct',
    starterCode: `function maxProduct(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxProduct(nums) {\n  // Write your solution here\n}`,
      python: `def maxProduct(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxProduct(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[2,3,-2,4]', expected: '6', type: 'normal' },
      { input: '[-2,0,-1]', expected: '0', type: 'edge' }
    ]
  },
  {
    id: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    slug: 'find-minimum-in-rotated-sorted-array',
    difficulty: 'Medium',
    topics: ['Array', 'Binary Search'],
    description: `Given the rotated sorted array \`nums\` of unique elements, return the minimum element of this array in O(log n) time.`,
    examples: [{ input: 'nums = [3,4,5,1,2]', output: '1' }],
    constraints: ['1 <= nums.length <= 5000'],
    language: 'javascript',
    functionName: 'findMin',
    starterCode: `function findMin(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function findMin(nums) {\n  // Write your solution here\n}`,
      python: `def findMin(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int findMin(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[3,4,5,1,2]', expected: '1', type: 'normal' },
      { input: '[4,5,6,7,0,1,2]', expected: '0', type: 'normal' }
    ]
  },
  {
    id: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    slug: 'search-in-rotated-sorted-array',
    difficulty: 'Medium',
    topics: ['Array', 'Binary Search'],
    description: `Given the array \`nums\` after the possible rotation and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.`,
    examples: [{ input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' }],
    constraints: ['1 <= nums.length <= 5000'],
    language: 'javascript',
    functionName: 'searchRotated',
    starterCode: `function searchRotated(nums, target) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function searchRotated(nums, target) {\n  // Write your solution here\n}`,
      python: `def searchRotated(nums: list[int], target: int) -> int:\n    return -1`,
      java: `class Solution {\n    public int searchRotated(int[] nums, int target) {\n        return -1;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int searchRotated(vector<int>& nums, int target) {\n        return -1;\n    }\n};`
    },
    testCases: [
      { input: '[4,5,6,7,0,1,2], 0', expected: '4', type: 'normal' },
      { input: '[4,5,6,7,0,1,2], 3', expected: '-1', type: 'normal' }
    ]
  },
  {
    id: '3sum',
    title: '3Sum',
    slug: '3sum',
    difficulty: 'Medium',
    topics: ['Array', 'Two Pointers'],
    description: `Given an integer array nums, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.`,
    examples: [{ input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' }],
    constraints: ['3 <= nums.length <= 3000'],
    language: 'javascript',
    functionName: 'threeSum',
    starterCode: `function threeSum(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}`,
      python: `def threeSum(nums: list[int]) -> list[list[int]]:\n    return []`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[-1,0,1,2,-1,-4]', expected: '[[-1,-1,2],[-1,0,1]]', type: 'normal' },
      { input: '[0,1,1]', expected: '[]', type: 'edge' }
    ]
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    slug: 'container-with-most-water',
    difficulty: 'Medium',
    topics: ['Array', 'Two Pointers'],
    description: `You are given an integer array \`height\` of length \`n\`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum area.`,
    examples: [{ input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' }],
    constraints: ['2 <= n <= 10^5'],
    language: 'javascript',
    functionName: 'maxArea',
    starterCode: `function maxArea(height) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}`,
      python: `def maxArea(height: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxArea(int[] height) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,8,6,2,5,4,8,3,7]', expected: '49', type: 'normal' },
      { input: '[1,1]', expected: '1', type: 'boundary' }
    ]
  },
  {
    id: 'merge-strings-alternately',
    title: 'Merge Strings Alternately',
    slug: 'merge-strings-alternately',
    difficulty: 'Easy',
    topics: ['String', 'Two Pointers'],
    description: `You are given two strings \`word1\` and \`word2\`. Merge the strings by adding letters in alternating order, starting with \`word1\`. If a string is longer than the other, append the additional letters onto the end of the merged string.`,
    examples: [{ input: 'word1 = "abc", word2 = "pqr"', output: '"apbqcr"' }],
    constraints: ['1 <= word1.length, word2.length <= 100'],
    language: 'javascript',
    functionName: 'mergeAlternately',
    starterCode: `function mergeAlternately(word1, word2) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function mergeAlternately(word1, word2) {\n  // Write your solution here\n}`,
      python: `def mergeAlternately(word1: str, word2: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String mergeAlternately(String word1, String word2) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string mergeAlternately(string word1, string word2) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"abc", "pqr"', expected: '"apbqcr"', type: 'normal' },
      { input: '"ab", "pqrs"', expected: '"apbqrs"', type: 'edge' }
    ]
  },
  {
    id: 'greatest-common-divisor-of-strings',
    title: 'Greatest Common Divisor of Strings',
    slug: 'greatest-common-divisor-of-strings',
    difficulty: 'Easy',
    topics: ['String', 'Math'],
    description: `For two strings \`s\` and \`t\`, we say "\`t\` divides \`s\`" if and only if \`s = t + t + ... + t\`. Return the largest string \`x\` such that \`x\` divides both \`str1\` and \`str2\`.`,
    examples: [{ input: 'str1 = "ABCABC", str2 = "ABC"', output: '"ABC"' }],
    constraints: ['1 <= str1.length, str2.length <= 1000'],
    language: 'javascript',
    functionName: 'gcdOfStrings',
    starterCode: `function gcdOfStrings(str1, str2) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function gcdOfStrings(str1, str2) {\n  // Write your solution here\n}`,
      python: `def gcdOfStrings(str1: str, str2: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String gcdOfStrings(String str1, String str2) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string gcdOfStrings(string str1, string str2) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"ABCABC", "ABC"', expected: '"ABC"', type: 'normal' },
      { input: '"LEET", "CODE"', expected: '""', type: 'edge' }
    ]
  },
  {
    id: 'can-place-flowers',
    title: 'Can Place Flowers',
    slug: 'can-place-flowers',
    difficulty: 'Easy',
    topics: ['Array', 'Greedy'],
    description: `You have a long flowerbed in which some of the plots are planted, and some are not. Flowers cannot be planted in adjacent plots. Given an integer array \`flowerbed\` and an integer \`n\`, return \`true\` if \`n\` new flowers can be planted without violating the rule.`,
    examples: [{ input: 'flowerbed = [1,0,0,0,1], n = 1', output: 'true' }],
    constraints: ['1 <= flowerbed.length <= 2 * 10^4'],
    language: 'javascript',
    functionName: 'canPlaceFlowers',
    starterCode: `function canPlaceFlowers(flowerbed, n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function canPlaceFlowers(flowerbed, n) {\n  // Write your solution here\n}`,
      python: `def canPlaceFlowers(flowerbed: list[int], n: int) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean canPlaceFlowers(int[] flowerbed, int n) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canPlaceFlowers(vector<int>& flowerbed, int n) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[1,0,0,0,1], 1', expected: 'true', type: 'normal' },
      { input: '[1,0,0,0,1], 2', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'reverse-vowels-of-a-string',
    title: 'Reverse Vowels of a String',
    slug: 'reverse-vowels-of-a-string',
    difficulty: 'Easy',
    topics: ['String', 'Two Pointers'],
    description: `Given a string \`s\`, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases.`,
    examples: [{ input: 's = "hello"', output: '"holle"' }],
    constraints: ['1 <= s.length <= 3 * 10^5'],
    language: 'javascript',
    functionName: 'reverseVowels',
    starterCode: `function reverseVowels(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function reverseVowels(s) {\n  // Write your solution here\n}`,
      python: `def reverseVowels(s: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String reverseVowels(String s) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseVowels(string s) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"hello"', expected: '"holle"', type: 'normal' },
      { input: '"leetcode"', expected: '"leotcede"', type: 'normal' }
    ]
  },
  {
    id: 'reverse-words-in-a-string',
    title: 'Reverse Words in a String',
    slug: 'reverse-words-in-a-string',
    difficulty: 'Medium',
    topics: ['String', 'Two Pointers'],
    description: `Given an input string \`s\`, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in \`s\` will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.`,
    examples: [{ input: 's = "the sky is blue"', output: '"blue is sky the"' }],
    constraints: ['1 <= s.length <= 10^4'],
    language: 'javascript',
    functionName: 'reverseWords',
    starterCode: `function reverseWords(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function reverseWords(s) {\n  // Write your solution here\n}`,
      python: `def reverseWords(s: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String reverseWords(String s) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseWords(string s) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"the sky is blue"', expected: '"blue is sky the"', type: 'normal' },
      { input: '"  hello world  "', expected: '"world hello"', type: 'edge' }
    ]
  },

  // ==========================================
  // TWO POINTERS & SLIDING WINDOW (10 Problems)
  // ==========================================
  {
    id: 'move-zeroes',
    title: 'Move Zeroes',
    slug: 'move-zeroes',
    difficulty: 'Easy',
    topics: ['Two Pointers', 'Array'],
    description: `Given an integer array \`nums\`, move all \`0\`'s to the end of it while maintaining the relative order of the non-zero elements.`,
    examples: [{ input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]' }],
    constraints: ['1 <= nums.length <= 10^4'],
    language: 'javascript',
    functionName: 'moveZeroes',
    starterCode: `function moveZeroes(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function moveZeroes(nums) {\n  // Write your solution here\n}`,
      python: `def moveZeroes(nums: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] moveZeroes(int[] nums) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> moveZeroes(vector<int>& nums) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[0,1,0,3,12]', expected: '[1,3,12,0,0]', type: 'normal' },
      { input: '[0]', expected: '[0]', type: 'boundary' }
    ]
  },
  {
    id: 'is-subsequence',
    title: 'Is Subsequence',
    slug: 'is-subsequence',
    difficulty: 'Easy',
    topics: ['Two Pointers', 'String'],
    description: `Given two strings \`s\` and \`t\`, return \`true\` if \`s\` is a subsequence of \`t\`, or \`false\` otherwise.`,
    examples: [{ input: 's = "abc", t = "ahbgdc"', output: 'true' }],
    constraints: ['0 <= s.length <= 100', '0 <= t.length <= 10^4'],
    language: 'javascript',
    functionName: 'isSubsequence',
    starterCode: `function isSubsequence(s, t) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function isSubsequence(s, t) {\n  // Write your solution here\n}`,
      python: `def isSubsequence(s: str, t: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean isSubsequence(String s, String t) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"abc", "ahbgdc"', expected: 'true', type: 'normal' },
      { input: '"axc", "ahbgdc"', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    difficulty: 'Easy',
    topics: ['String', 'Two Pointers'],
    description: `A phrase is a palindrome if, after converting uppercase to lowercase and removing non-alphanumeric characters, it reads the same forward and backward.`,
    examples: [{ input: 's = "A man, a plan, a canal: Panama"', output: 'true' }],
    constraints: ['1 <= s.length <= 2 * 10^5'],
    language: 'javascript',
    functionName: 'isPalindrome',
    starterCode: `function isPalindrome(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function isPalindrome(s) {\n  // Write your solution here\n}`,
      python: `def isPalindrome(s: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean isPalindrome(String s) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'true', type: 'normal' },
      { input: '"race a car"', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'max-number-of-k-sum-pairs',
    title: 'Max Number of K-Sum Pairs',
    slug: 'max-number-of-k-sum-pairs',
    difficulty: 'Medium',
    topics: ['Two Pointers', 'Hash Table'],
    description: `You are given an integer array \`nums\` and an integer \`k\`. In one operation, you can pick two numbers from the array whose sum equals \`k\` and remove them from the array. Return the maximum number of operations you can perform.`,
    examples: [{ input: 'nums = [1,2,3,4], k = 5', output: '2' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'maxOperations',
    starterCode: `function maxOperations(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxOperations(nums, k) {\n  // Write your solution here\n}`,
      python: `def maxOperations(nums: list[int], k: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxOperations(int[] nums, int k) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxOperations(vector<int>& nums, int k) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4], 5', expected: '2', type: 'normal' },
      { input: '[3,1,3,4,3], 6', expected: '1', type: 'edge' }
    ]
  },
  {
    id: 'maximum-average-subarray-i',
    title: 'Maximum Average Subarray I',
    slug: 'maximum-average-subarray-i',
    difficulty: 'Easy',
    topics: ['Sliding Window', 'Array'],
    description: `You are given an integer array \`nums\` consisting of \`n\` elements, and an integer \`k\`. Find a contiguous subarray whose length is equal to \`k\` that has the maximum average value and return this value.`,
    examples: [{ input: 'nums = [1,12,-5,-6,50,3], k = 4', output: '12.75' }],
    constraints: ['1 <= k <= n <= 10^5'],
    language: 'javascript',
    functionName: 'findMaxAverage',
    starterCode: `function findMaxAverage(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function findMaxAverage(nums, k) {\n  // Write your solution here\n}`,
      python: `def findMaxAverage(nums: list[int], k: int) -> float:\n    return 0.0`,
      java: `class Solution {\n    public double findMaxAverage(int[] nums, int k) {\n        return 0.0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    double findMaxAverage(vector<int>& nums, int k) {\n        return 0.0;\n    }\n};`
    },
    testCases: [
      { input: '[1,12,-5,-6,50,3], 4', expected: '12.75', type: 'normal' },
      { input: '[5], 1', expected: '5', type: 'boundary' }
    ]
  },
  {
    id: 'maximum-number-of-vowels-in-a-substring-of-given-length',
    title: 'Maximum Number of Vowels in a Substring',
    slug: 'maximum-number-of-vowels-in-a-substring-of-given-length',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'String'],
    description: `Given a string \`s\` and an integer \`k\`, return the maximum number of vowel letters in any substring of \`s\` with length \`k\`.`,
    examples: [{ input: 's = "abciiidef", k = 3', output: '3' }],
    constraints: ['1 <= s.length <= 10^5'],
    language: 'javascript',
    functionName: 'maxVowels',
    starterCode: `function maxVowels(s, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxVowels(s, k) {\n  // Write your solution here\n}`,
      python: `def maxVowels(s: str, k: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxVowels(String s, int k) {\n        return 0;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxVowels(string s, int k) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '"abciiidef", 3', expected: '3', type: 'normal' },
      { input: '"aeiou", 2', expected: '2', type: 'normal' }
    ]
  },
  {
    id: 'max-consecutive-ones-iii',
    title: 'Max Consecutive Ones III',
    slug: 'max-consecutive-ones-iii',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'Array'],
    description: `Given a binary array \`nums\` and an integer \`k\`, return the maximum number of consecutive \`1\`'s in the array if you can flip at most \`k\` \`0\`'s.`,
    examples: [{ input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'longestOnes',
    starterCode: `function longestOnes(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function longestOnes(nums, k) {\n  // Write your solution here\n}`,
      python: `def longestOnes(nums: list[int], k: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int longestOnes(int[] nums, int k) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,1,1,0,0,0,1,1,1,1,0], 2', expected: '6', type: 'normal' }
    ]
  },
  {
    id: 'longest-subarray-of-1s-after-deleting-one-element',
    title: "Longest Subarray of 1's After Deleting One Element",
    slug: 'longest-subarray-of-1s-after-deleting-one-element',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'Array'],
    description: `Given a binary array \`nums\`, you should delete one element from it. Return the size of the longest non-empty subarray containing only \`1\`'s in the resulting array.`,
    examples: [{ input: 'nums = [1,1,0,1]', output: '3' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'longestSubarray',
    starterCode: `function longestSubarray(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function longestSubarray(nums) {\n  // Write your solution here\n}`,
      python: `def longestSubarray(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int longestSubarray(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int longestSubarray(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,1,0,1]', expected: '3', type: 'normal' },
      { input: '[0,1,1,1,0,1,1,0,1]', expected: '5', type: 'normal' }
    ]
  },
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'Hash Table', 'String'],
    description: `Given a string \`s\`, find the length of the longest substring without repeating characters.`,
    examples: [{ input: 's = "abcabcbb"', output: '3' }],
    constraints: ['0 <= s.length <= 5 * 10^4'],
    language: 'javascript',
    functionName: 'lengthOfLongestSubstring',
    starterCode: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:\n    return 0`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '"abcabcbb"', expected: '3', type: 'normal' },
      { input: '"bbbbb"', expected: '1', type: 'normal' }
    ]
  },
  {
    id: 'minimum-size-subarray-sum',
    title: 'Minimum Size Subarray Sum',
    slug: 'minimum-size-subarray-sum',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'Array'],
    description: `Given an array of positive integers \`nums\` and a positive integer \`target\`, return the minimal length of a subarray whose sum is greater than or equal to \`target\`. If there is no such subarray, return \`0\`.`,
    examples: [{ input: 'target = 7, nums = [2,3,1,2,4,3]', output: '2' }],
    constraints: ['1 <= target <= 10^9', '1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'minSubArrayLen',
    starterCode: `function minSubArrayLen(target, nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function minSubArrayLen(target, nums) {\n  // Write your solution here\n}`,
      python: `def minSubArrayLen(target: int, nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '7, [2,3,1,2,4,3]', expected: '2', type: 'normal' },
      { input: '4, [1,4,4]', expected: '1', type: 'normal' }
    ]
  },

  // ==========================================
  // HASH MAP / SET & PREFIX SUM (10 Problems)
  // ==========================================
  {
    id: 'find-the-highest-altitude',
    title: 'Find the Highest Altitude',
    slug: 'find-the-highest-altitude',
    difficulty: 'Easy',
    topics: ['Prefix Sum', 'Array'],
    description: `There is a biker going on a road trip. The road trip consists of \`n + 1\` points at different altitudes. You are given an integer array \`gain\` of length \`n\` where \`gain[i]\` is the net gain in altitude between points \`i\` and \`i + 1\`. Return the highest altitude of a point.`,
    examples: [{ input: 'gain = [-5,1,5,0,-7]', output: '1' }],
    constraints: ['1 <= gain.length <= 100'],
    language: 'javascript',
    functionName: 'largestAltitude',
    starterCode: `function largestAltitude(gain) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function largestAltitude(gain) {\n  // Write your solution here\n}`,
      python: `def largestAltitude(gain: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int largestAltitude(int[] gain) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int largestAltitude(vector<int>& gain) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[-5,1,5,0,-7]', expected: '1', type: 'normal' },
      { input: '[-4,-3,-2,-1,4,3,2]', expected: '0', type: 'edge' }
    ]
  },
  {
    id: 'find-pivot-index',
    title: 'Find Pivot Index',
    slug: 'find-pivot-index',
    difficulty: 'Easy',
    topics: ['Prefix Sum', 'Array'],
    description: `Given an array of integers \`nums\`, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.`,
    examples: [{ input: 'nums = [1,7,3,6,5,6]', output: '3' }],
    constraints: ['1 <= nums.length <= 10^4'],
    language: 'javascript',
    functionName: 'pivotIndex',
    starterCode: `function pivotIndex(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function pivotIndex(nums) {\n  // Write your solution here\n}`,
      python: `def pivotIndex(nums: list[int]) -> int:\n    return -1`,
      java: `class Solution {\n    public int pivotIndex(int[] nums) {\n        return -1;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int pivotIndex(vector<int>& nums) {\n        return -1;\n    }\n};`
    },
    testCases: [
      { input: '[1,7,3,6,5,6]', expected: '3', type: 'normal' },
      { input: '[1,2,3]', expected: '-1', type: 'normal' }
    ]
  },
  {
    id: 'find-the-difference-of-two-arrays',
    title: 'Find the Difference of Two Arrays',
    slug: 'find-the-difference-of-two-arrays',
    difficulty: 'Easy',
    topics: ['Hash Table', 'Array'],
    description: `Given two 0-indexed integer arrays \`nums1\` and \`nums2\`, return a list \`answer\` of size 2 where \`answer[0]\` is a list of all distinct integers in \`nums1\` which are not present in \`nums2\`, and \`answer[1]\` is a list of all distinct integers in \`nums2\` which are not present in \`nums1\`.`,
    examples: [{ input: 'nums1 = [1,2,3], nums2 = [2,4,6]', output: '[[1,3],[4,6]]' }],
    constraints: ['1 <= nums1.length, nums2.length <= 1000'],
    language: 'javascript',
    functionName: 'findDifference',
    starterCode: `function findDifference(nums1, nums2) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function findDifference(nums1, nums2) {\n  // Write your solution here\n}`,
      python: `def findDifference(nums1: list[int], nums2: list[int]) -> list[list[int]]:\n    return [[], []]`,
      java: `class Solution {\n    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {\n        return {{},{}};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3], [2,4,6]', expected: '[[1,3],[4,6]]', type: 'normal' }
    ]
  },
  {
    id: 'unique-number-of-occurrences',
    title: 'Unique Number of Occurrences',
    slug: 'unique-number-of-occurrences',
    difficulty: 'Easy',
    topics: ['Hash Table', 'Array'],
    description: `Given an array of integers \`arr\`, return \`true\` if the number of occurrences of each value in the array is unique, or \`false\` otherwise.`,
    examples: [{ input: 'arr = [1,2,2,1,1,3]', output: 'true' }],
    constraints: ['1 <= arr.length <= 1000'],
    language: 'javascript',
    functionName: 'uniqueOccurrences',
    starterCode: `function uniqueOccurrences(arr) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function uniqueOccurrences(arr) {\n  // Write your solution here\n}`,
      python: `def uniqueOccurrences(arr: list[int]) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean uniqueOccurrences(int[] arr) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool uniqueOccurrences(vector<int>& arr) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,2,1,1,3]', expected: 'true', type: 'normal' },
      { input: '[1,2]', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'determine-if-two-strings-are-close',
    title: 'Determine if Two Strings Are Close',
    slug: 'determine-if-two-strings-are-close',
    difficulty: 'Medium',
    topics: ['Hash Table', 'String'],
    description: `Two strings are considered close if you can attain one from the other using operation 1 (swap any two existing characters) or operation 2 (transform every occurrence of one existing character into another existing character).`,
    examples: [{ input: 'word1 = "abc", word2 = "bca"', output: 'true' }],
    constraints: ['1 <= word1.length, word2.length <= 10^5'],
    language: 'javascript',
    functionName: 'closeStrings',
    starterCode: `function closeStrings(word1, word2) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function closeStrings(word1, word2) {\n  // Write your solution here\n}`,
      python: `def closeStrings(word1: str, word2: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean closeStrings(String word1, String word2) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool closeStrings(string word1, string word2) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"abc", "bca"', expected: 'true', type: 'normal' },
      { input: '"a", "aa"', expected: 'false', type: 'edge' }
    ]
  },
  {
    id: 'equal-row-and-column-pairs',
    title: 'Equal Row and Column Pairs',
    slug: 'equal-row-and-column-pairs',
    difficulty: 'Medium',
    topics: ['Hash Table', 'Array'],
    description: `Given a 0-indexed n x n integer matrix \`grid\`, return the number of pairs (r_i, c_j) such that row r_i and column c_j are equal.`,
    examples: [{ input: 'grid = [[3,2,1],[1,7,6],[2,7,7]]', output: '1' }],
    constraints: ['n == grid.length == grid[i].length', '1 <= n <= 200'],
    language: 'javascript',
    functionName: 'equalPairs',
    starterCode: `function equalPairs(grid) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function equalPairs(grid) {\n  // Write your solution here\n}`,
      python: `def equalPairs(grid: list[list[int]]) -> int:\n    return 0`,
      java: `class Solution {\n    public int equalPairs(int[][] grid) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int equalPairs(vector<vector<int>>& grid) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[[3,2,1],[1,7,6],[2,7,7]]', expected: '1', type: 'normal' }
    ]
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    slug: 'group-anagrams',
    difficulty: 'Medium',
    topics: ['Hash Table', 'String'],
    description: `Given an array of strings \`strs\`, group the anagrams together. You can return the answer in any order.`,
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    constraints: ['1 <= strs.length <= 10^4'],
    language: 'javascript',
    functionName: 'groupAnagrams',
    starterCode: `function groupAnagrams(strs) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function groupAnagrams(strs) {\n  // Write your solution here\n}`,
      python: `def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    return []`,
      java: `class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '["eat","tea","tan","ate","nat","bat"]', expected: '[["eat","tea","ate"],["tan","nat"],["bat"]]', type: 'normal' }
    ]
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    slug: 'valid-anagram',
    difficulty: 'Easy',
    topics: ['String', 'Hash Table'],
    description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.`,
    examples: [{ input: 's = "anagram", t = "nagaram"', output: 'true' }],
    constraints: ['1 <= s.length, t.length <= 5 * 10^4'],
    language: 'javascript',
    functionName: 'isAnagram',
    starterCode: `function isAnagram(s, t) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function isAnagram(s, t) {\n  // Write your solution here\n}`,
      python: `def isAnagram(s: str, t: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"anagram", "nagaram"', expected: 'true', type: 'normal' },
      { input: '"rat", "car"', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'majority-element',
    title: 'Majority Element',
    slug: 'majority-element',
    difficulty: 'Easy',
    topics: ['Hashing', 'Counting'],
    description: `Given an array \`nums\` of size \`n\`, return the majority element (appears more than ⌊n / 2⌋ times).`,
    examples: [{ input: 'nums = [3,2,3]', output: '3' }],
    constraints: ['1 <= n <= 5 * 10^4'],
    language: 'javascript',
    functionName: 'majorityElement',
    starterCode: `function majorityElement(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function majorityElement(nums) {\n  // Write your solution here\n}`,
      python: `def majorityElement(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int majorityElement(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[3,2,3]', expected: '3', type: 'normal' },
      { input: '[2,2,1,1,1,2,2]', expected: '2', type: 'normal' }
    ]
  },
  {
    id: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    slug: 'subarray-sum-equals-k',
    difficulty: 'Medium',
    topics: ['Hash Table', 'Prefix Sum'],
    description: `Given an array of integers \`nums\` and an integer \`k\`, return the total number of subarrays whose sum equals to \`k\`.`,
    examples: [{ input: 'nums = [1,1,1], k = 2', output: '2' }],
    constraints: ['1 <= nums.length <= 2 * 10^4'],
    language: 'javascript',
    functionName: 'subarraySum',
    starterCode: `function subarraySum(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function subarraySum(nums, k) {\n  // Write your solution here\n}`,
      python: `def subarraySum(nums: list[int], k: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int subarraySum(int[] nums, int k) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,1,1], 2', expected: '2', type: 'normal' },
      { input: '[1,2,3], 3', expected: '2', type: 'normal' }
    ]
  },

  // ==========================================
  // STACK & QUEUE (6 Problems)
  // ==========================================
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    difficulty: 'Easy',
    topics: ['Stack', 'String'],
    description: `Given a string \`s\` containing just parentheses, determine if the input string is valid.`,
    examples: [{ input: 's = "()"', output: 'true' }],
    constraints: ['1 <= s.length <= 10^4'],
    language: 'javascript',
    functionName: 'isValid',
    starterCode: `function isValid(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}`,
      python: `def isValid(s: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isValid(string s) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"()"', expected: 'true', type: 'normal' },
      { input: '"()[]{}"', expected: 'true', type: 'normal' },
      { input: '"(]"', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'removing-stars-from-a-string',
    title: 'Removing Stars From a String',
    slug: 'removing-stars-from-a-string',
    difficulty: 'Medium',
    topics: ['Stack', 'String'],
    description: `You are given a string \`s\`, which contains stars \`*\`. In one operation, you can choose a star in \`s\` and remove the closest non-star character to its left, as well as remove the star itself. Return the string after all stars have been removed.`,
    examples: [{ input: 's = "leet**cod*e"', output: '"lecoe"' }],
    constraints: ['1 <= s.length <= 10^5'],
    language: 'javascript',
    functionName: 'removeStars',
    starterCode: `function removeStars(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function removeStars(s) {\n  // Write your solution here\n}`,
      python: `def removeStars(s: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String removeStars(String s) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string removeStars(string s) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"leet**cod*e"', expected: '"lecoe"', type: 'normal' },
      { input: '"erase*****"', expected: '""', type: 'edge' }
    ]
  },
  {
    id: 'asteroid-collision',
    title: 'Asteroid Collision',
    slug: 'asteroid-collision',
    difficulty: 'Medium',
    topics: ['Stack', 'Array'],
    description: `We are given an array \`asteroids\` of integers representing asteroids in a row. Find out the state of the asteroids after all collisions.`,
    examples: [{ input: 'asteroids = [5,10,-5]', output: '[5,10]' }],
    constraints: ['2 <= asteroids.length <= 10^4'],
    language: 'javascript',
    functionName: 'asteroidCollision',
    starterCode: `function asteroidCollision(asteroids) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function asteroidCollision(asteroids) {\n  // Write your solution here\n}`,
      python: `def asteroidCollision(asteroids: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] asteroidCollision(int[] asteroids) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> asteroidCollision(vector<int>& asteroids) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[5,10,-5]', expected: '[5,10]', type: 'normal' },
      { input: '[8,-8]', expected: '[]', type: 'edge' }
    ]
  },
  {
    id: 'decode-string',
    title: 'Decode String',
    slug: 'decode-string',
    difficulty: 'Medium',
    topics: ['Stack', 'String'],
    description: `Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.`,
    examples: [{ input: 's = "3[a]2[bc]"', output: '"aaabcbc"' }],
    constraints: ['1 <= s.length <= 30'],
    language: 'javascript',
    functionName: 'decodeString',
    starterCode: `function decodeString(s) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function decodeString(s) {\n  // Write your solution here\n}`,
      python: `def decodeString(s: str) -> str:\n    return ""`,
      java: `class Solution {\n    public String decodeString(String s) {\n        return "";\n    }\n}`,
      cpp: `#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string decodeString(string s) {\n        return "";\n    }\n};`
    },
    testCases: [
      { input: '"3[a]2[bc]"', expected: '"aaabcbc"', type: 'normal' },
      { input: '"3[a2[c]]"', expected: '"accaccacc"', type: 'edge' }
    ]
  },
  {
    id: 'number-of-recent-calls',
    title: 'Number of Recent Calls',
    slug: 'number-of-recent-calls',
    difficulty: 'Easy',
    topics: ['Queue', 'Design'],
    description: `You have a \`RecentCounter\` class which counts the number of recent requests within a certain time frame (past 3000ms).`,
    examples: [{ input: 'requests = [1, 100, 3001, 3002]', output: '[1, 2, 3, 3]' }],
    constraints: ['1 <= t <= 10^9'],
    language: 'javascript',
    functionName: 'pingSequence',
    starterCode: `function pingSequence(requests) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function pingSequence(requests) {\n  // Write your solution here\n}`,
      python: `def pingSequence(requests: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] pingSequence(int[] requests) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> pingSequence(vector<int>& requests) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1, 100, 3001, 3002]', expected: '[1,2,3,3]', type: 'normal' }
    ]
  },
  {
    id: 'daily-temperatures',
    title: 'Daily Temperatures',
    slug: 'daily-temperatures',
    difficulty: 'Medium',
    topics: ['Stack', 'Array'],
    description: `Given an array of integers \`temperatures\` represents the daily temperatures, return an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after the i-th day to get a warmer temperature.`,
    examples: [{ input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' }],
    constraints: ['1 <= temperatures.length <= 10^5'],
    language: 'javascript',
    functionName: 'dailyTemperatures',
    starterCode: `function dailyTemperatures(temperatures) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function dailyTemperatures(temperatures) {\n  // Write your solution here\n}`,
      python: `def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[73,74,75,71,69,72,76,73]', expected: '[1,1,4,2,1,1,0,0]', type: 'normal' }
    ]
  },

  // ==========================================
  // LINKED LIST (6 Problems)
  // ==========================================
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    slug: 'reverse-linked-list',
    difficulty: 'Easy',
    topics: ['Linked List', 'Two Pointers'],
    description: `Given the head of a singly linked list (represented here as an array of values), reverse the list and return the reversed list.`,
    examples: [{ input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' }],
    constraints: ['0 <= length <= 5000'],
    language: 'javascript',
    functionName: 'reverseList',
    starterCode: `function reverseList(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function reverseList(head) {\n  // Write your solution here\n}`,
      python: `def reverseList(head: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] reverseList(int[] head) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> reverseList(vector<int>& head) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4,5]', expected: '[5,4,3,2,1]', type: 'normal' },
      { input: '[1,2]', expected: '[2,1]', type: 'normal' }
    ]
  },
  {
    id: 'delete-the-middle-node-of-a-linked-list',
    title: 'Delete the Middle Node of a Linked List',
    slug: 'delete-the-middle-node-of-a-linked-list',
    difficulty: 'Medium',
    topics: ['Linked List', 'Two Pointers'],
    description: `You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.`,
    examples: [{ input: 'head = [1,3,4,7,1,2,6]', output: '[1,3,4,1,2,6]' }],
    constraints: ['1 <= length <= 10^5'],
    language: 'javascript',
    functionName: 'deleteMiddle',
    starterCode: `function deleteMiddle(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function deleteMiddle(head) {\n  // Write your solution here\n}`,
      python: `def deleteMiddle(head: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] deleteMiddle(int[] head) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> deleteMiddle(vector<int>& head) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,3,4,7,1,2,6]', expected: '[1,3,4,1,2,6]', type: 'normal' }
    ]
  },
  {
    id: 'odd-even-linked-list',
    title: 'Odd Even Linked List',
    slug: 'odd-even-linked-list',
    difficulty: 'Medium',
    topics: ['Linked List'],
    description: `Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.`,
    examples: [{ input: 'head = [1,2,3,4,5]', output: '[1,3,5,2,4]' }],
    constraints: ['0 <= length <= 10^4'],
    language: 'javascript',
    functionName: 'oddEvenList',
    starterCode: `function oddEvenList(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function oddEvenList(head) {\n  // Write your solution here\n}`,
      python: `def oddEvenList(head: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] oddEvenList(int[] head) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> oddEvenList(vector<int>& head) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4,5]', expected: '[1,3,5,2,4]', type: 'normal' }
    ]
  },
  {
    id: 'maximum-twin-sum-of-a-linked-list',
    title: 'Maximum Twin Sum of a Linked List',
    slug: 'maximum-twin-sum-of-a-linked-list',
    difficulty: 'Medium',
    topics: ['Linked List', 'Two Pointers'],
    description: `In a linked list of size n, the i-th node and (n-1-i)-th node are twins. Return the maximum twin sum of the linked list.`,
    examples: [{ input: 'head = [5,4,2,1]', output: '6' }],
    constraints: ['2 <= n <= 10^5'],
    language: 'javascript',
    functionName: 'pairSum',
    starterCode: `function pairSum(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function pairSum(head) {\n  // Write your solution here\n}`,
      python: `def pairSum(head: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int pairSum(int[] head) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int pairSum(vector<int>& head) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[5,4,2,1]', expected: '6', type: 'normal' }
    ]
  },
  {
    id: 'merge-two-sorted-lists',
    title: 'Merge Two Sorted Lists',
    slug: 'merge-two-sorted-lists',
    difficulty: 'Easy',
    topics: ['Linked List'],
    description: `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.`,
    examples: [{ input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' }],
    constraints: ['0 <= length <= 50'],
    language: 'javascript',
    functionName: 'mergeTwoLists',
    starterCode: `function mergeTwoLists(list1, list2) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function mergeTwoLists(list1, list2) {\n  // Write your solution here\n}`,
      python: `def mergeTwoLists(list1: list[int], list2: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] mergeTwoLists(int[] list1, int[] list2) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> mergeTwoLists(vector<int>& list1, vector<int>& list2) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,4], [1,3,4]', expected: '[1,1,2,3,4,4]', type: 'normal' }
    ]
  },
  {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    slug: 'linked-list-cycle',
    difficulty: 'Easy',
    topics: ['Linked List', 'Two Pointers'],
    description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.`,
    examples: [{ input: 'head = [3,2,0,-4], pos = 1', output: 'true' }],
    constraints: ['0 <= length <= 10^4'],
    language: 'javascript',
    functionName: 'hasCycle',
    starterCode: `function hasCycle(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function hasCycle(head) {\n  // Write your solution here\n}`,
      python: `def hasCycle(head: list[int]) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean hasCycle(int[] head) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool hasCycle(vector<int>& head) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[3,2,0,-4]', expected: 'true', type: 'normal' },
      { input: '[1]', expected: 'false', type: 'boundary' }
    ]
  },

  // ==========================================
  // BINARY SEARCH & HEAP (6 Problems)
  // ==========================================
  {
    id: 'binary-search',
    title: 'Binary Search',
    slug: 'binary-search',
    difficulty: 'Easy',
    topics: ['Searching', 'Binary Search'],
    description: `Given an array of integers nums which is sorted in ascending order, and an integer target, search target in nums. Return index or -1.`,
    examples: [{ input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' }],
    constraints: ['1 <= nums.length <= 10^4'],
    language: 'javascript',
    functionName: 'search',
    starterCode: `function search(nums, target) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}`,
      python: `def search(nums: list[int], target: int) -> int:\n    return -1`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        return -1;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        return -1;\n    }\n};`
    },
    testCases: [
      { input: '[-1,0,3,5,9,12], 9', expected: '4', type: 'normal' },
      { input: '[-1,0,3,5,9,12], 2', expected: '-1', type: 'normal' }
    ]
  },
  {
    id: 'guess-number-higher-or-lower',
    title: 'Guess Number Higher or Lower',
    slug: 'guess-number-higher-or-lower',
    difficulty: 'Easy',
    topics: ['Binary Search'],
    description: `We are playing the Guess Game. The game will pick a secret number from 1 to n. Return the picked number.`,
    examples: [{ input: 'n = 10, pick = 6', output: '6' }],
    constraints: ['1 <= n <= 2^31 - 1'],
    language: 'javascript',
    functionName: 'guessNumber',
    starterCode: `function guessNumber(n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function guessNumber(n) {\n  // Write your solution here\n}`,
      python: `def guessNumber(n: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int guessNumber(int n) {\n        return 0;\n    }\n}`,
      cpp: `class Solution {\npublic:\n    int guessNumber(int n) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '10', expected: '6', type: 'normal' }
    ]
  },
  {
    id: 'successful-pairs-of-spells-and-potions',
    title: 'Successful Pairs of Spells and Potions',
    slug: 'successful-pairs-of-spells-and-potions',
    difficulty: 'Medium',
    topics: ['Binary Search', 'Sorting'],
    description: `You are given two positive integer arrays spells and potions. A spell and potion pair is considered successful if their product is at least success. Return an array pairs of length n.`,
    examples: [{ input: 'spells = [5,1,3], potions = [1,2,3,4,5], success = 7', output: '[4,0,3]' }],
    constraints: ['1 <= spells.length, potions.length <= 10^5'],
    language: 'javascript',
    functionName: 'successfulPairs',
    starterCode: `function successfulPairs(spells, potions, success) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function successfulPairs(spells, potions, success) {\n  // Write your solution here\n}`,
      python: `def successfulPairs(spells: list[int], potions: list[int], success: int) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] successfulPairs(int[] spells, int[] potions, long success) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[5,1,3], [1,2,3,4,5], 7', expected: '[4,0,3]', type: 'normal' }
    ]
  },
  {
    id: 'find-peak-element',
    title: 'Find Peak Element',
    slug: 'find-peak-element',
    difficulty: 'Medium',
    topics: ['Binary Search', 'Array'],
    description: `A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index in O(log n) time.`,
    examples: [{ input: 'nums = [1,2,3,1]', output: '2' }],
    constraints: ['1 <= nums.length <= 1000'],
    language: 'javascript',
    functionName: 'findPeakElement',
    starterCode: `function findPeakElement(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function findPeakElement(nums) {\n  // Write your solution here\n}`,
      python: `def findPeakElement(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int findPeakElement(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,1]', expected: '2', type: 'normal' }
    ]
  },
  {
    id: 'kth-largest-element-in-an-array',
    title: 'Kth Largest Element in an Array',
    slug: 'kth-largest-element-in-an-array',
    difficulty: 'Medium',
    topics: ['Sorting', 'Heap'],
    description: `Given an integer array nums and an integer k, return the kth largest element in the array.`,
    examples: [{ input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' }],
    constraints: ['1 <= k <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'findKthLargest',
    starterCode: `function findKthLargest(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function findKthLargest(nums, k) {\n  // Write your solution here\n}`,
      python: `def findKthLargest(nums: list[int], k: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[3,2,1,5,6,4], 2', expected: '5', type: 'normal' }
    ]
  },
  {
    id: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    slug: 'top-k-frequent-elements',
    difficulty: 'Medium',
    topics: ['Hash Table', 'Heap'],
    description: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.`,
    examples: [{ input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' }],
    constraints: ['1 <= nums.length <= 10^5'],
    language: 'javascript',
    functionName: 'topKFrequent',
    starterCode: `function topKFrequent(nums, k) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function topKFrequent(nums, k) {\n  // Write your solution here\n}`,
      python: `def topKFrequent(nums: list[int], k: int) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,1,1,2,2,3], 2', expected: '[1,2]', type: 'normal' }
    ]
  },

  // ==========================================
  // DYNAMIC PROGRAMMING & BIT MANIPULATION (6 Problems)
  // ==========================================
  {
    id: 'nth-tribonacci-number',
    title: 'N-th Tribonacci Number',
    slug: 'nth-tribonacci-number',
    difficulty: 'Easy',
    topics: ['Dynamic Programming', 'Math'],
    description: `The Tribonacci sequence Tn is defined as: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn.`,
    examples: [{ input: 'n = 4', output: '4' }],
    constraints: ['0 <= n <= 37'],
    language: 'javascript',
    functionName: 'tribonacci',
    starterCode: `function tribonacci(n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function tribonacci(n) {\n  // Write your solution here\n}`,
      python: `def tribonacci(n: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int tribonacci(int n) {\n        return 0;\n    }\n}`,
      cpp: `class Solution {\npublic:\n    int tribonacci(int n) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '4', expected: '4', type: 'normal' },
      { input: '25', expected: '1389537', type: 'normal' }
    ]
  },
  {
    id: 'min-cost-climbing-stairs',
    title: 'Min Cost Climbing Stairs',
    slug: 'min-cost-climbing-stairs',
    difficulty: 'Easy',
    topics: ['Dynamic Programming', 'Array'],
    description: `You are given an integer array cost where cost[i] is the cost of i-th step on a staircase. Once you pay the cost, you can either climb one or two steps. Return the minimum cost to reach the top of the floor.`,
    examples: [{ input: 'cost = [10,15,20]', output: '15' }],
    constraints: ['2 <= cost.length <= 1000'],
    language: 'javascript',
    functionName: 'minCostClimbingStairs',
    starterCode: `function minCostClimbingStairs(cost) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function minCostClimbingStairs(cost) {\n  // Write your solution here\n}`,
      python: `def minCostClimbingStairs(cost: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int minCostClimbingStairs(int[] cost) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int minCostClimbingStairs(vector<int>& cost) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[10,15,20]', expected: '15', type: 'normal' },
      { input: '[1,100,1,1,1,100,1,1,100,1]', expected: '6', type: 'normal' }
    ]
  },
  {
    id: 'house-robber',
    title: 'House Robber',
    slug: 'house-robber',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Array'],
    description: `You are a professional robber planning to rob houses along a street. Adjacent houses have security systems connected. Return the maximum amount of money you can rob tonight without alerting the police.`,
    examples: [{ input: 'nums = [1,2,3,1]', output: '4' }],
    constraints: ['1 <= nums.length <= 100'],
    language: 'javascript',
    functionName: 'rob',
    starterCode: `function rob(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function rob(nums) {\n  // Write your solution here\n}`,
      python: `def rob(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int rob(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,1]', expected: '4', type: 'normal' },
      { input: '[2,7,9,3,1]', expected: '12', type: 'normal' }
    ]
  },
  {
    id: 'single-number',
    title: 'Single Number',
    slug: 'single-number',
    difficulty: 'Easy',
    topics: ['Bit Manipulation', 'Array'],
    description: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one in O(n) time and O(1) space.`,
    examples: [{ input: 'nums = [2,2,1]', output: '1' }],
    constraints: ['1 <= nums.length <= 3 * 10^4'],
    language: 'javascript',
    functionName: 'singleNumber',
    starterCode: `function singleNumber(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function singleNumber(nums) {\n  // Write your solution here\n}`,
      python: `def singleNumber(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[2,2,1]', expected: '1', type: 'normal' },
      { input: '[4,1,2,1,2]', expected: '4', type: 'normal' }
    ]
  },
  {
    id: 'counting-bits',
    title: 'Counting Bits',
    slug: 'counting-bits',
    difficulty: 'Easy',
    topics: ['Bit Manipulation', 'Dynamic Programming'],
    description: `Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.`,
    examples: [{ input: 'n = 2', output: '[0,1,1]' }],
    constraints: ['0 <= n <= 10^5'],
    language: 'javascript',
    functionName: 'countBits',
    starterCode: `function countBits(n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function countBits(n) {\n  // Write your solution here\n}`,
      python: `def countBits(n: int) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] countBits(int n) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> countBits(int n) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '2', expected: '[0,1,1]', type: 'normal' },
      { input: '5', expected: '[0,1,1,2,1,2]', type: 'normal' }
    ]
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    slug: 'climbing-stairs',
    difficulty: 'Easy',
    topics: ['Dynamic Programming', 'Math'],
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    examples: [{ input: 'n = 3', output: '3' }],
    constraints: ['1 <= n <= 45'],
    language: 'javascript',
    functionName: 'climbStairs',
    starterCode: `function climbStairs(n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
      python: `def climbStairs(n: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}`,
      cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '2', expected: '2', type: 'normal' },
      { input: '3', expected: '3', type: 'normal' }
    ]
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    slug: 'coin-change',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Array'],
    description: `You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins that you need to make up that amount.`,
    examples: [{ input: 'coins = [1,2,5], amount = 11', output: '3' }],
    constraints: ['1 <= coins.length <= 12', '1 <= amount <= 10^4'],
    language: 'javascript',
    functionName: 'coinChange',
    starterCode: `function coinChange(coins, amount) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}`,
      python: `def coinChange(coins: list[int], amount: int) -> int:\n    return -1`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        return -1;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        return -1;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,5], 11', expected: '3', type: 'normal' },
      { input: '[2], 3', expected: '-1', type: 'edge' }
    ]
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    slug: 'longest-increasing-subsequence',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Binary Search'],
    description: `Given an integer array nums, return the length of the longest strictly increasing subsequence.`,
    examples: [{ input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' }],
    constraints: ['1 <= nums.length <= 2500'],
    language: 'javascript',
    functionName: 'lengthOfLIS',
    starterCode: `function lengthOfLIS(nums) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function lengthOfLIS(nums) {\n  // Write your solution here\n}`,
      python: `def lengthOfLIS(nums: list[int]) -> int:\n    return 0`,
      java: `class Solution {\n    public int lengthOfLIS(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[10,9,2,5,3,7,101,18]', expected: '4', type: 'normal' }
    ]
  },
  {
    id: 'word-break',
    title: 'Word Break',
    slug: 'word-break',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Hash Table'],
    description: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.`,
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' }],
    constraints: ['1 <= s.length <= 300'],
    language: 'javascript',
    functionName: 'wordBreak',
    starterCode: `function wordBreak(s, wordDict) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your solution here\n}`,
      python: `def wordBreak(s: str, wordDict: list[str]) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        return false;\n    }\n}`,
      cpp: `#include <string>\n#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '"leetcode", ["leet","code"]', expected: 'true', type: 'normal' }
    ]
  },
  {
    id: 'combination-sum',
    title: 'Combination Sum',
    slug: 'combination-sum',
    difficulty: 'Medium',
    topics: ['Backtracking', 'Array'],
    description: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.`,
    examples: [{ input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' }],
    constraints: ['1 <= candidates.length <= 30'],
    language: 'javascript',
    functionName: 'combinationSum',
    starterCode: `function combinationSum(candidates, target) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your solution here\n}`,
      python: `def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    return []`,
      java: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[2,3,6,7], 7', expected: '[[2,2,3],[7]]', type: 'normal' }
    ]
  },
  {
    id: 'letter-combinations-of-a-phone-number',
    title: 'Letter Combinations of a Phone Number',
    slug: 'letter-combinations-of-a-phone-number',
    difficulty: 'Medium',
    topics: ['Backtracking', 'String'],
    description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.`,
    examples: [{ input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' }],
    constraints: ['0 <= digits.length <= 4'],
    language: 'javascript',
    functionName: 'letterCombinations',
    starterCode: `function letterCombinations(digits) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function letterCombinations(digits) {\n  // Write your solution here\n}`,
      python: `def letterCombinations(digits: str) -> list[str]:\n    return []`,
      java: `class Solution {\n    public List<String> letterCombinations(String digits) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '"23"', expected: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', type: 'normal' }
    ]
  },
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    slug: 'number-of-islands',
    difficulty: 'Medium',
    topics: ['Graphs', 'Matrix'],
    description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.`,
    examples: [{ input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' }],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 300'],
    language: 'javascript',
    functionName: 'numIslands',
    starterCode: `function numIslands(grid) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function numIslands(grid) {\n  // Write your solution here\n}`,
      python: `def numIslands(grid: list[list[str]]) -> int:\n    return 0`,
      java: `class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expected: '1', type: 'normal' }
    ]
  },
  {
    id: 'course-schedule',
    title: 'Course Schedule',
    slug: 'course-schedule',
    difficulty: 'Medium',
    topics: ['Graphs', 'Topological Sort'],
    description: `There are a total of numCourses courses you have to take. Some courses have prerequisites. Return true if you can finish all courses.`,
    examples: [{ input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' }],
    constraints: ['1 <= numCourses <= 2000'],
    language: 'javascript',
    functionName: 'canFinish',
    starterCode: `function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n}`,
      python: `def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '2, [[1,0]]', expected: 'true', type: 'normal' },
      { input: '2, [[1,0],[0,1]]', expected: 'false', type: 'normal' }
    ]
  },
  {
    id: 'clone-graph',
    title: 'Clone Graph',
    slug: 'clone-graph',
    difficulty: 'Medium',
    topics: ['Graphs', 'Hash Table'],
    description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.`,
    examples: [{ input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]' }],
    constraints: ['0 <= nodes <= 100'],
    language: 'javascript',
    functionName: 'cloneGraph',
    starterCode: `function cloneGraph(adjList) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function cloneGraph(adjList) {\n  // Write your solution here\n}`,
      python: `def cloneGraph(adjList: list[list[int]]) -> list[list[int]]:\n    return []`,
      java: `class Solution {\n    public List<List<Integer>> cloneGraph(List<List<Integer>> adjList) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> cloneGraph(vector<vector<int>>& adjList) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[[2,4],[1,3],[2,4],[1,3]]', expected: '[[2,4],[1,3],[2,4],[1,3]]', type: 'normal' }
    ]
  },
  {
    id: 'reorder-list',
    title: 'Reorder List',
    slug: 'reorder-list',
    difficulty: 'Medium',
    topics: ['Linked List', 'Two Pointers'],
    description: `You are given the head of a singly linked list. Reorder the list to be on the form: L0 → Ln → L1 → Ln-1 → L2 → Ln-2...`,
    examples: [{ input: 'head = [1,2,3,4]', output: '[1,4,2,3]' }],
    constraints: ['1 <= length <= 5 * 10^4'],
    language: 'javascript',
    functionName: 'reorderList',
    starterCode: `function reorderList(head) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function reorderList(head) {\n  // Write your solution here\n}`,
      python: `def reorderList(head: list[int]) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] reorderList(int[] head) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> reorderList(vector<int>& head) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4]', expected: '[1,4,2,3]', type: 'normal' }
    ]
  },
  {
    id: 'remove-nth-node-from-end-of-list',
    title: 'Remove Nth Node From End of List',
    slug: 'remove-nth-node-from-end-of-list',
    difficulty: 'Medium',
    topics: ['Linked List', 'Two Pointers'],
    description: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
    examples: [{ input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' }],
    constraints: ['1 <= length <= 30'],
    language: 'javascript',
    functionName: 'removeNthFromEnd',
    starterCode: `function removeNthFromEnd(head, n) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function removeNthFromEnd(head, n) {\n  // Write your solution here\n}`,
      python: `def removeNthFromEnd(head: list[int], n: int) -> list[int]:\n    return []`,
      java: `class Solution {\n    public int[] removeNthFromEnd(int[] head, int n) {\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> removeNthFromEnd(vector<int>& head, int n) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3,4,5], 2', expected: '[1,2,3,5]', type: 'normal' }
    ]
  },
  {
    id: 'maximum-depth-of-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    slug: 'maximum-depth-of-binary-tree',
    difficulty: 'Easy',
    topics: ['Trees', 'Binary Tree'],
    description: `Given the root of a binary tree (represented as array), return its maximum depth.`,
    examples: [{ input: 'root = [3,9,20,null,null,15,7]', output: '3' }],
    constraints: ['0 <= nodes <= 10^4'],
    language: 'javascript',
    functionName: 'maxDepth',
    starterCode: `function maxDepth(root) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxDepth(root) {\n  // Write your solution here\n}`,
      python: `def maxDepth(root: list) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxDepth(Integer[] root) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxDepth(vector<int>& root) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[3,9,20,null,null,15,7]', expected: '3', type: 'normal' }
    ]
  },
  {
    id: 'same-tree',
    title: 'Same Tree',
    slug: 'same-tree',
    difficulty: 'Easy',
    topics: ['Trees', 'Binary Tree'],
    description: `Given the roots of two binary trees p and q, write a function to check if they are the same or not.`,
    examples: [{ input: 'p = [1,2,3], q = [1,2,3]', output: 'true' }],
    constraints: ['0 <= nodes <= 100'],
    language: 'javascript',
    functionName: 'isSameTree',
    starterCode: `function isSameTree(p, q) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function isSameTree(p, q) {\n  // Write your solution here\n}`,
      python: `def isSameTree(p: list, q: list) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean isSameTree(Integer[] p, Integer[] q) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isSameTree(vector<int>& p, vector<int>& q) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3], [1,2,3]', expected: 'true', type: 'normal' }
    ]
  },
  {
    id: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    slug: 'invert-binary-tree',
    difficulty: 'Easy',
    topics: ['Trees', 'Binary Tree'],
    description: `Given the root of a binary tree, invert the tree, and return its root.`,
    examples: [{ input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' }],
    constraints: ['0 <= nodes <= 100'],
    language: 'javascript',
    functionName: 'invertTree',
    starterCode: `function invertTree(root) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function invertTree(root) {\n  // Write your solution here\n}`,
      python: `def invertTree(root: list) -> list:\n    return []`,
      java: `class Solution {\n    public Integer[] invertTree(Integer[] root) {\n        return new Integer[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> invertTree(vector<int>& root) {\n        return {};\n    }\n};`
    },
    testCases: [
      { input: '[4,2,7,1,3,6,9]', expected: '[4,7,2,9,6,3,1]', type: 'normal' }
    ]
  },
  {
    id: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    slug: 'binary-tree-maximum-path-sum',
    difficulty: 'Hard',
    topics: ['Trees', 'Dynamic Programming'],
    description: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Return the maximum path sum of any non-empty path.`,
    examples: [{ input: 'root = [1,2,3]', output: '6' }],
    constraints: ['1 <= nodes <= 3 * 10^4'],
    language: 'javascript',
    functionName: 'maxPathSum',
    starterCode: `function maxPathSum(root) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function maxPathSum(root) {\n  // Write your solution here\n}`,
      python: `def maxPathSum(root: list) -> int:\n    return 0`,
      java: `class Solution {\n    public int maxPathSum(Integer[] root) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxPathSum(vector<int>& root) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[1,2,3]', expected: '6', type: 'normal' },
      { input: '[-10,9,20,null,null,15,7]', expected: '42', type: 'normal' }
    ]
  },
  {
    id: 'lowest-common-ancestor-of-a-binary-tree',
    title: 'Lowest Common Ancestor of a Binary Tree',
    slug: 'lowest-common-ancestor-of-a-binary-tree',
    difficulty: 'Medium',
    topics: ['Trees', 'Binary Tree'],
    description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.`,
    examples: [{ input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', output: '3' }],
    constraints: ['2 <= nodes <= 10^5'],
    language: 'javascript',
    functionName: 'lowestCommonAncestor',
    starterCode: `function lowestCommonAncestor(root, p, q) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function lowestCommonAncestor(root, p, q) {\n  // Write your solution here\n}`,
      python: `def lowestCommonAncestor(root: list, p: int, q: int) -> int:\n    return 0`,
      java: `class Solution {\n    public int lowestCommonAncestor(Integer[] root, int p, int q) {\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lowestCommonAncestor(vector<int>& root, int p, int q) {\n        return 0;\n    }\n};`
    },
    testCases: [
      { input: '[3,5,1,6,2,0,8,null,null,7,4], 5, 1', expected: '3', type: 'normal' }
    ]
  },
  {
    id: 'word-search',
    title: 'Word Search',
    slug: 'word-search',
    difficulty: 'Medium',
    topics: ['Backtracking', 'Matrix'],
    description: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.`,
    examples: [{ input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }],
    constraints: ['m == board.length', 'n == board[i].length', '1 <= m, n <= 6'],
    language: 'javascript',
    functionName: 'exist',
    starterCode: `function exist(board, word) {\n  // Write your solution here\n}`,
    starterCodes: {
      javascript: `function exist(board, word) {\n  // Write your solution here\n}`,
      python: `def exist(board: list[list[str]], word: str) -> bool:\n    return False`,
      java: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        return false;\n    }\n}`,
      cpp: `#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        return false;\n    }\n};`
    },
    testCases: [
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"', expected: 'true', type: 'normal' }
    ]
  }
];

export const TOPICS_LIST = [
  'All Topics',
  'Array',
  'String',
  'Hash Table',
  'Dynamic Programming',
  'Stack',
  'Searching',
  'Binary Search',
  'Linked List',
  'Hashing',
  'Sorting',
  'Two Pointers',
  'Sliding Window',
  'Prefix Sum',
  'Queue',
  'Greedy',
  'Heap',
  'Bit Manipulation',
  'Math',
  'Backtracking',
  'Graphs',
  'Topological Sort',
  'Matrix',
  'Trees',
  'Binary Tree'
];
