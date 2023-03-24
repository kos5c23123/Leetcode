/**
 * As Example, we have intervals = [[1,3],[2,6],[8,10],[15,18]],
 * after sorting, it will be [[1,3],[2,6],[8,10],[15,18]].
 * Then we have prev = [1,3], curr = [2,6], since 2 <= 3, we know they can be merged.
 * So we use Math.max(prev[1], curr[1]) to compare the end of these two intervals,
 * since 6 > 3, so prev = [1,6] now.
 * Then we have prev = [1,6], curr = [8,10], since 8 > 6, we know they cannot be merged.
 * So we push curr into res, and update prev.
 * Then we have prev = [8,10], curr = [15,18], since 15 > 10, we know they cannot be merged.
 * So we push curr into res, and update prev.
 * Finally we have the result [[1,6],[8,10],[15,18]].
 */
var merge = function(intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
      if (curr[0] <= prev[1]) {
        prev[1] = Math.max(prev[1], curr[1])
      } else {
        res.push(curr)
        prev = curr
      }
    }
    return res
  };