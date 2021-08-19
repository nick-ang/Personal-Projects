/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //create return array
  const returnArray = [];
  //loop through l1 and push into array
  l1.forEach(element => {
    returnArray.push(element);
  });
  //loop through l2 and push into array
  l2.forEach((element) => {
    returnArray.push(element);
  });
  //sort final array
  return returnArray.sort()
};


l1 = [1,2,4];
l2 = [1,3,4];
console.log(mergeTwoLists(l1,l2));
