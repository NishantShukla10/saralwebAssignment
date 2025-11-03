const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) {
    return [];
  }

  let ans = [];

  ranges.sort((a, b) => a[0] - b[0]);

  let currentStart = ranges[0][0];
  let currentEnd = ranges[0][1];

  for (let i = 1; i < ranges.length; i++) {
    const nextStart = ranges[i][0];
    const nextEnd = ranges[i][1];

    const gap = nextStart - currentEnd;

    if (gap <= threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      ans.push([currentStart, currentEnd]);
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  ans.push([currentStart, currentEnd]);

  return ans;
};

module.exports = {
  mergeTimeRanges
};
