def binary_search(list_to_search, val):
    print("list length:", len(list_to_search))
    half = int(len(list_to_search)/2)
    value = list_to_search[half]
    print("value:", value)
    if value == val:
        return True

    if len(list_to_search) == 1:
        return False
    elif val > value:
        newlist = list_to_search[half:]
        return binary_search(newlist, val)
    elif val < value:
        newlist = list_to_search[:half]
        return binary_search(newlist, val)


def binarySearch(arr, num):
    mid = int(len(arr)/2)
    start, end = 0, len(arr)-1
    while start <= end:
        print("indexed value:", arr[mid])
        print("start:", start)
        print("end:", end)
        if arr[mid]==num:
            return True
        elif arr[mid]>num:
            end=mid-1
            mid=int(round((start+end)/2,0))
        elif arr[mid]<num:
            start=mid+1
            mid=int((start+end)/2)
    
    if arr[mid]==num:
        return True
    return False

mylist = [1,3,5,7,9, 11]
myval= 3

print(binarySearch(mylist, myval))