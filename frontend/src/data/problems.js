/**
 * Data-driven Problem Library for CodeMentor AI
 * Contains 16 curated LeetCode-style problems across Arrays, Strings, Stack, Searching, Linked List, Hashing, Sorting, Two Pointers, and Sliding Window.
 * Supports JavaScript, Python, Java, and C++ starter code templates.
 */

export const PROBLEMS = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'Easy',
    topics: ['Array', 'Hash Table'],
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    language: 'javascript',
    functionName: 'twoSum',
    starterCode: `function twoSum(nums, target) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}`,
      python: `def twoSum(nums: list[int], target: int) -> list[int]:
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};`
    },
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0,1]', type: 'normal' },
      { input: '[3,2,4], 6', expected: '[1,2]', type: 'normal' },
      { input: '[3,3], 6', expected: '[0,1]', type: 'edge' },
      { input: '[-1,-3,-4,5,8], 4', expected: '[0,3]', type: 'boundary' }
    ]
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    slug: 'best-time-to-buy-and-sell-stock',
    difficulty: 'Easy',
    topics: ['Array', 'Dynamic Programming'],
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i-th\` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.'
      },
      {
        input: 'prices = [7,6,4,3,1]',
        output: '0',
        explanation: 'In this case, no transactions are done and max profit = 0.'
      }
    ],
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4'
    ],
    language: 'javascript',
    functionName: 'maxProfit',
    starterCode: `function maxProfit(prices) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}`,
      python: `def maxProfit(prices: list[int]) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '[7,1,5,3,6,4]', expected: '5', type: 'normal' },
      { input: '[7,6,4,3,1]', expected: '0', type: 'edge' },
      { input: '[2,4,1]', expected: '2', type: 'normal' },
      { input: '[5]', expected: '0', type: 'boundary' }
    ]
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    slug: 'maximum-subarray',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return *its sum*.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
      },
      {
        input: 'nums = [1]',
        output: '1',
        explanation: 'The subarray [1] has the largest sum 1.'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    language: 'javascript',
    functionName: 'maxSubArray',
    starterCode: `function maxSubArray(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
}`,
      python: `def maxSubArray(nums: list[int]) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expected: '6', type: 'normal' },
      { input: '[1]', expected: '1', type: 'boundary' },
      { input: '[5,4,-1,7,8]', expected: '23', type: 'normal' },
      { input: '[-5,-2,-3,-1]', expected: '-1', type: 'edge' }
    ]
  },
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    slug: 'contains-duplicate',
    difficulty: 'Easy',
    topics: ['Array', 'Hash Table'],
    description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.`,
    examples: [
      {
        input: 'nums = [1,2,3,1]',
        output: 'true'
      },
      {
        input: 'nums = [1,2,3,4]',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9'
    ],
    language: 'javascript',
    functionName: 'containsDuplicate',
    starterCode: `function containsDuplicate(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}`,
      python: `def containsDuplicate(nums: list[int]) -> bool:
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your solution here
        return false;
    }
};`
    },
    testCases: [
      { input: '[1,2,3,1]', expected: 'true', type: 'normal' },
      { input: '[1,2,3,4]', expected: 'false', type: 'normal' },
      { input: '[1,1,1,3,3,4,3,2,4,2]', expected: 'true', type: 'edge' },
      { input: '[42]', expected: 'false', type: 'boundary' }
    ]
  },
  {
    id: 'find-maximum-element',
    title: 'Find Maximum Element',
    slug: 'find-maximum-element',
    difficulty: 'Easy',
    topics: ['Array'],
    description: `Given an array of numbers \`nums\`, find and return the maximum value in the array.`,
    examples: [
      {
        input: 'nums = [3, 7, 2, 9, 5]',
        output: '9'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^6 <= nums[i] <= 10^6'
    ],
    language: 'javascript',
    functionName: 'findMax',
    starterCode: `function findMax(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function findMax(nums) {
  // Write your solution here
}`,
      python: `def findMax(nums: list[int]) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int findMax(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int findMax(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '[3,7,2,9,5]', expected: '9', type: 'normal' },
      { input: '[-10,-5,-2,-50]', expected: '-2', type: 'edge' },
      { input: '[100]', expected: '100', type: 'boundary' }
    ]
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram',
    slug: 'valid-anagram',
    difficulty: 'Easy',
    topics: ['String', 'Hash Table'],
    description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: 'true'
      },
      {
        input: 's = "rat", t = "car"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters.'
    ],
    language: 'javascript',
    functionName: 'isAnagram',
    starterCode: `function isAnagram(s, t) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
}`,
      python: `def isAnagram(s: str, t: str) -> bool:
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your solution here
        return false;
    }
};`
    },
    testCases: [
      { input: '"anagram", "nagaram"', expected: 'true', type: 'normal' },
      { input: '"rat", "car"', expected: 'false', type: 'normal' },
      { input: '"a", "ab"', expected: 'false', type: 'edge' },
      { input: '"listen", "silent"', expected: 'true', type: 'normal' }
    ]
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    difficulty: 'Easy',
    topics: ['String', 'Two Pointers'],
    description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.`,
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      },
      {
        input: 's = "race a car"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.'
    ],
    language: 'javascript',
    functionName: 'isPalindrome',
    starterCode: `function isPalindrome(s) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
}`,
      python: `def isPalindrome(s: str) -> bool:
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        return false;
    }
};`
    },
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'true', type: 'normal' },
      { input: '"race a car"', expected: 'false', type: 'normal' },
      { input: '" "', expected: 'true', type: 'boundary' },
      { input: '"0P"', expected: 'false', type: 'edge' }
    ]
  },
  {
    id: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    slug: 'longest-common-prefix',
    difficulty: 'Easy',
    topics: ['String'],
    description: `Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string \`""\`.`,
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"'
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: 'There is no common prefix among the input strings.'
      }
    ],
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'strs[i] consists of only lowercase English letters.'
    ],
    language: 'javascript',
    functionName: 'longestCommonPrefix',
    starterCode: `function longestCommonPrefix(strs) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
}`,
      python: `def longestCommonPrefix(strs: list[str]) -> str:
    # Write your solution here
    return ""`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }
}`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        // Write your solution here
        return "";
    }
};`
    },
    testCases: [
      { input: '["flower","flow","flight"]', expected: '"fl"', type: 'normal' },
      { input: '["dog","racecar","car"]', expected: '""', type: 'normal' },
      { input: '["a"]', expected: '"a"', type: 'boundary' },
      { input: '["cir","car"]', expected: '"c"', type: 'edge' }
    ]
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    difficulty: 'Easy',
    topics: ['Stack', 'String'],
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\'.'
    ],
    language: 'javascript',
    functionName: 'isValid',
    starterCode: `function isValid(s) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function isValid(s) {
  // Write your solution here
}`,
      python: `def isValid(s: str) -> bool:
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        return false;
    }
};`
    },
    testCases: [
      { input: '"()"', expected: 'true', type: 'normal' },
      { input: '"()[]{}"', expected: 'true', type: 'normal' },
      { input: '"(]"', expected: 'false', type: 'normal' },
      { input: '"([)]"', expected: 'false', type: 'edge' },
      { input: '"{[]}"', expected: 'true', type: 'normal' },
      { input: '"("', expected: 'false', type: 'boundary' }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    slug: 'binary-search',
    difficulty: 'Easy',
    topics: ['Searching', 'Binary Search'],
    description: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, then return its index. Otherwise, return \`-1\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
    examples: [
      {
        input: 'nums = [-1,0,3,5,9,12], target = 9',
        output: '4',
        explanation: '9 exists in nums and its index is 4'
      },
      {
        input: 'nums = [-1,0,3,5,9,12], target = 2',
        output: '-1',
        explanation: '2 does not exist in nums so return -1'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 < nums[i], target < 10^4',
      'All elements in nums are unique.',
      'nums is sorted in ascending order.'
    ],
    language: 'javascript',
    functionName: 'search',
    starterCode: `function search(nums, target) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function search(nums, target) {
  // Write your solution here
}`,
      python: `def search(nums: list[int], target: int) -> int:
    # Write your solution here
    return -1`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your solution here
        return -1;
    }
};`
    },
    testCases: [
      { input: '[-1,0,3,5,9,12], 9', expected: '4', type: 'normal' },
      { input: '[-1,0,3,5,9,12], 2', expected: '-1', type: 'normal' },
      { input: '[5], 5', expected: '0', type: 'boundary' },
      { input: '[5], 2', expected: '-1', type: 'boundary' }
    ]
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List (Array Rep)',
    slug: 'reverse-linked-list',
    difficulty: 'Easy',
    topics: ['Linked List', 'Two Pointers'],
    description: `Given the head of a singly linked list (represented here as an array of values), reverse the list and return *the reversed list*.`,
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]'
      },
      {
        input: 'head = [1,2]',
        output: '[2,1]'
      }
    ],
    constraints: [
      '0 <= length <= 5000',
      '-5000 <= val <= 5000'
    ],
    language: 'javascript',
    functionName: 'reverseList',
    starterCode: `function reverseList(head) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function reverseList(head) {
  // Write your solution here
}`,
      python: `def reverseList(head: list[int]) -> list[int]:
    # Write your solution here
    return []`,
      java: `class Solution {
    public int[] reverseList(int[] head) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> reverseList(vector<int>& head) {
        // Write your solution here
        return {};
    }
};`
    },
    testCases: [
      { input: '[1,2,3,4,5]', expected: '[5,4,3,2,1]', type: 'normal' },
      { input: '[1,2]', expected: '[2,1]', type: 'normal' },
      { input: '[]', expected: '[]', type: 'boundary' }
    ]
  },
  {
    id: 'majority-element',
    title: 'Majority Element',
    slug: 'majority-element',
    difficulty: 'Easy',
    topics: ['Hashing', 'Counting'],
    description: `Given an array \`nums\` of size \`n\`, return *the majority element*.

The majority element is the element that appears more than \`⌊n / 2⌋\` times. You may assume that the majority element always exists in the array.`,
    examples: [
      {
        input: 'nums = [3,2,3]',
        output: '3'
      },
      {
        input: 'nums = [2,2,1,1,1,2,2]',
        output: '2'
      }
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 5 * 10^4',
      '-10^9 <= nums[i] <= 10^9'
    ],
    language: 'javascript',
    functionName: 'majorityElement',
    starterCode: `function majorityElement(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
}`,
      python: `def majorityElement(nums: list[int]) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '[3,2,3]', expected: '3', type: 'normal' },
      { input: '[2,2,1,1,1,2,2]', expected: '2', type: 'normal' },
      { input: '[6,5,5]', expected: '5', type: 'edge' }
    ]
  },
  {
    id: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    slug: 'merge-sorted-array',
    difficulty: 'Easy',
    topics: ['Sorting', 'Two Pointers'],
    description: `Given two sorted integer arrays \`nums1\` and \`nums2\`, merge \`nums2\` into \`nums1\` as one sorted array and return the sorted array.`,
    examples: [
      {
        input: 'nums1 = [1,2,3], nums2 = [2,5,6]',
        output: '[1,2,2,3,5,6]'
      }
    ],
    constraints: [
      '1 <= nums1.length, nums2.length <= 200'
    ],
    language: 'javascript',
    functionName: 'mergeSortedArrays',
    starterCode: `function mergeSortedArrays(nums1, nums2) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function mergeSortedArrays(nums1, nums2) {
  // Write your solution here
}`,
      python: `def mergeSortedArrays(nums1: list[int], nums2: list[int]) -> list[int]:
    # Write your solution here
    return []`,
      java: `class Solution {
    public int[] mergeSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> mergeSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Write your solution here
        return {};
    }
};`
    },
    testCases: [
      { input: '[1,2,3], [2,5,6]', expected: '[1,2,2,3,5,6]', type: 'normal' },
      { input: '[], [1]', expected: '[1]', type: 'boundary' },
      { input: '[0], [0]', expected: '[0,0]', type: 'edge' }
    ]
  },
  {
    id: 'move-zeroes',
    title: 'Move Zeroes',
    slug: 'move-zeroes',
    difficulty: 'Easy',
    topics: ['Two Pointers', 'Array'],
    description: `Given an integer array \`nums\`, move all \`0\`'s to the end of it while maintaining the relative order of the non-zero elements.

Return the modified array.`,
    examples: [
      {
        input: 'nums = [0,1,0,3,12]',
        output: '[1,3,12,0,0]'
      },
      {
        input: 'nums = [0]',
        output: '[0]'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-2^31 <= nums[i] <= 2^31 - 1'
    ],
    language: 'javascript',
    functionName: 'moveZeroes',
    starterCode: `function moveZeroes(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
}`,
      python: `def moveZeroes(nums: list[int]) -> list[int]:
    # Write your solution here
    return []`,
      java: `class Solution {
    public int[] moveZeroes(int[] nums) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> moveZeroes(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`
    },
    testCases: [
      { input: '[0,1,0,3,12]', expected: '[1,3,12,0,0]', type: 'normal' },
      { input: '[0]', expected: '[0]', type: 'boundary' },
      { input: '[1,2,3]', expected: '[1,2,3]', type: 'edge' }
    ]
  },
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium',
    topics: ['Sliding Window', 'Hash Table', 'String'],
    description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3.'
      }
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.'
    ],
    language: 'javascript',
    functionName: 'lengthOfLongestSubstring',
    starterCode: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '"abcabcbb"', expected: '3', type: 'normal' },
      { input: '"bbbbb"', expected: '1', type: 'normal' },
      { input: '"pwwkew"', expected: '3', type: 'normal' },
      { input: '""', expected: '0', type: 'boundary' },
      { input: '"au"', expected: '2', type: 'edge' }
    ]
  },
  {
    id: 'single-number',
    title: 'Single Number',
    slug: 'single-number',
    difficulty: 'Easy',
    topics: ['Array', 'Bit Manipulation'],
    description: `Given a non-empty array of integers \`nums\`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,
    examples: [
      {
        input: 'nums = [2,2,1]',
        output: '1'
      },
      {
        input: 'nums = [4,1,2,1,2]',
        output: '4'
      }
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-3 * 10^4 <= nums[i] <= 3 * 10^4',
      'Each element in the array appears twice except for one element which appears only once.'
    ],
    language: 'javascript',
    functionName: 'singleNumber',
    starterCode: `function singleNumber(nums) {
  // Write your solution here
}`,
    starterCodes: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def singleNumber(nums: list[int]) -> int:
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`
    },
    testCases: [
      { input: '[2,2,1]', expected: '1', type: 'normal' },
      { input: '[4,1,2,1,2]', expected: '4', type: 'normal' },
      { input: '[1]', expected: '1', type: 'boundary' }
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
  'Bit Manipulation'
];
