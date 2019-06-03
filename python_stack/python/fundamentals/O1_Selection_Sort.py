numlist = [2,4,5,3,7,2,8,5,10,0]
numlist = [3,6,299,8,4,7,2,9,1]
def sel_sort(numlist):
    for i in range(len(numlist)):
        min = numlist[i]
        pos = i
        for j in range(i, len(numlist)):
            if numlist[j] < min:
                min = numlist[j]
                pos = j
        numlist[i], numlist[pos] = min, numlist[i]
        print(numlist)
    return numlist

print(sel_sort(numlist))
