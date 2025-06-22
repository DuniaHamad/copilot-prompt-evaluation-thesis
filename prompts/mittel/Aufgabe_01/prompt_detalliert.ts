// Du erhältst zwei nicht-leere verknüpfte Listen, die jeweils eine nicht-negative ganze Zahl repräsentieren.
// Jede Ziffer ist in umgekehrter Reihenfolge gespeichert, z.B. [2,4,3] für 342.
// Addiere die beiden Zahlen, berücksichtige Überträge, und gib das Ergebnis ebenfalls als verknüpfte Liste in umgekehrter Reihenfolge zurück.
// Beispiel: Input: l1 = [2,4,3], l2 = [5,6,4] → Output: [7,0,8], da 342 + 465 = 807.

import { ListNode } from "./ListNode";
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next!;
}
