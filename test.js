function attempt(available, allowed, preferred) {
  let filtered = [];
  let result = [];
  for (const allowedEl of allowed) {
    for (const availableEl of available) {
      if (allowedEl === availableEl) {
        filtered.push(allowedEl);
      }
      else if (allowedEl === 'any') {
        filtered = [...available]
      }
    }
  }
  for (const preferredEl of preferred) {
    if (preferredEl === 'any') {
      result = [...filtered];
    }
    else if (filtered.filter(num => num === preferredEl)[0] === preferredEl) {
      result.push(filtered.filter(num => num === preferredEl)[0]);
    } else if (filtered.length !== 0) {
      if (preferredEl < Math.max.apply(null, filtered)) {
        result.push(Math.max.apply(null, filtered))
      } else if (preferredEl >= Math.max.apply(null, filtered)) {
        const arr = filtered.filter(num => num !== preferredEl);
        result.push(arr[arr.length - 1])
      }
    }
  }
  return [...new Set(result)]
}
