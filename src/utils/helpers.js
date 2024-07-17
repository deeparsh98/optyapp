export function getRowMapped(row, columns) {
  let obj = {};
  for (let i = 0; i < columns.length; i++) {
    obj[columns[i].name] = row.values[i];
  }
  return obj;
}

export function array_remove(arr, index) {
  if (index > -1) {
    // only splice array when item is found
    return arr.splice(index, 1); // 2nd parameter means remove one item only
  }
}
