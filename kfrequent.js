var topKFrequent = function (nums, k) {
  if (!nums.length) return 0;
  if (nums.length == 1) return nums[0];

  //   nums.sort((a, b) => a - b);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  const frequent = [];
  let key = -1;
  let max = 0;
  for (let i = 0; i < k; i++) {
    max = 0;
    const mapKeys = Object.keys(map);
    for (let j = 0; j < mapKeys.length; j++) {
      const current_value = map[mapKeys[j]];
      if (current_value > max) {
        max = current_value;
        key = +mapKeys.filter((x) => map[x] == current_value)[0];
      }
    }
    delete map[key];
    frequent.push(key);
  }
  return frequent;
};

console.log(topKFrequent([2, 3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1], 4));
