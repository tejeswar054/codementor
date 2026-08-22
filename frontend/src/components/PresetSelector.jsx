import React from 'react';
import { PlayCircle } from 'lucide-react';

export const SAMPLE_PRESETS = [
  {
    id: 'twosum-js',
    title: 'JavaScript: TwoSum Self-Match Bug',
    language: 'javascript',
    problem: 'Find two distinct numbers in an array that add up to the target.',
    code: `function twoSum(nums, target) {
    // BUG: j starts at i instead of i + 1, matching the same element with itself!
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`
  },
  {
    id: 'offbyone-py',
    title: 'Python: Off-By-One Boundary Bug',
    language: 'python',
    problem: 'Calculate prefix sums of an array of numbers.',
    code: `def calculate_prefix_sums(numbers):
    # BUG: range stops at len(numbers)-1, missing the last element!
    prefix_sums = [0]
    for i in range(0, len(numbers) - 1):
        current_sum = prefix_sums[-1] + numbers[i]
        prefix_sums.append(current_sum)
    return prefix_sums[1:]`
  },
  {
    id: 'bounds-java',
    title: 'Java: Array Index Out of Bounds',
    language: 'java',
    problem: 'Find the maximum difference between any two adjacent elements in an array.',
    code: `public class Solution {
    public static int maxAdjacentDiff(int[] arr) {
        int maxDiff = 0;
        // BUG: arr.length instead of arr.length - 1 causing OutOfBounds on arr[i+1]
        for (int i = 0; i <= arr.length; i++) {
            int diff = Math.abs(arr[i] - arr[i + 1]);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
        return maxDiff;
    }
}`
  },
  {
    id: 'vector-cpp',
    title: 'C++: Vector Out-of-Bounds & Missing Base Case',
    language: 'cpp',
    problem: 'Find the binary search pivot index in a sorted integer vector.',
    code: `#include <vector>

int findPivot(const std::vector<int>& nums) {
    int low = 0;
    int high = nums.size(); // BUG: high should be nums.size() - 1

    while (low <= high) {
        int mid = low + (high - low) / 2;
        // BUG: potential out of bounds read when mid == nums.size()
        if (nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if (nums[mid] >= nums[low]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`
  }
];

export default function PresetSelector({ onSelectPreset }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <PlayCircle className="w-4 h-4 text-indigo-400" />
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Quick Demo Presets
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {SAMPLE_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onSelectPreset(preset)}
            className="text-left px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-indigo-950/40 border border-slate-700/60 hover:border-indigo-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all truncate"
            title={preset.title}
          >
            <div className="font-semibold text-indigo-300 text-[11px] truncate mb-0.5">
              {preset.language.toUpperCase()}
            </div>
            <div className="truncate text-slate-400">{preset.title.split(':')[1] || preset.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
