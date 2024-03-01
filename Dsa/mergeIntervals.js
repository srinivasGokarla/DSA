var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
     intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let currInterval = intervals[i];
        let lastMergedInterval = merged[merged.length - 1];
        
        if (currInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currInterval[1]);
        } else {
            merged.push(currInterval);
        }
    }
    
    return merged;
};