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
// o sum of both integers in form of list node
// i two separate list nodes that are in reverse order
// c no negatives, 0-9/node val, will not have leading 0s 00925
// e 0, if sum of both nodes is >9, if one list is longer than the other


let carry = 0;

let addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2 && carry === 0) {
        return null;
    }

    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;

    let sum = x + y + carry;

    carry = Math.floor(sum/10);
    sum = sum % 10;

    return {
        val: sum,
        next: addTwoNumbers(nextL1, nextL2)
    };
};