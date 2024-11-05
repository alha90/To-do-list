/* 
The module below gets a specific key entry (in our case an array) from localStorage
by passing in the key name

*/
export function getElements(data) {
  let arr = [];
  if (
    localStorage.length != 0 &&
    Array.isArray(JSON.parse(localStorage.getItem(data)))
  ) {
    JSON.parse(localStorage.getItem(data)).forEach((e) => {
      arr.push(e);
    });
  }
  return arr;
}

export function deleteElements() {
  
}