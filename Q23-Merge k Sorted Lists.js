var mergeKLists = function(lists) {
    if (!lists.length) return null;
    for (let i = 1; i < lists.length; i++) {
        lists[0] = mergeTwoLists(lists[0], lists[i])
    }
    return lists[0]
};


var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};