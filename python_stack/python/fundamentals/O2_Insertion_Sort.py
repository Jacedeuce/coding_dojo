def ins(numlist):
    counter = 0
    for i in range(1, len(numlist)):
        counter+=1
        for j in range(i, 0, -1):
            counter+=1
            if numlist[j] > numlist[j-1]:
                break
            if numlist[j] < numlist[j-1]:
                numlist[j-1], numlist[j] = numlist[j], numlist[j-1]
        print(numlist)
        counter+=1
    return counter, numlist

# numlist = [3,9,7,2,4,6,1,10,8,5]
# li = ins(numlist)
# print(li)    

def insertion(numlist):
    counter=0
    for i in range(1, len(numlist)):
        counter+=1
        if numlist[i] < numlist[0]:
            numlist.insert(0, numlist[i])
            numlist.pop(i+1)
        else:
            for j in range(i-1, -1, -1):
                counter+=1
                if numlist[i] >= numlist[j]:
                    numlist.insert(j+1, numlist[i])
                    numlist.pop(i+1)
                    break
                if j == 0:
                    numlist.insert(j+1, numlist[i])
                    numlist.pop(i+1)
        print(numlist)
    return counter, numlist

numlist = [3,9,7,2,4,6,1,10,8,5]
numlist1 = [343,43,2,11,234,5234,3,5]
numlist2 = [1,6,7,8,2,5]
nums = [numlist, numlist1, numlist2]

for num in nums:
    counter = 1
    print(f"List {counter}")
    counter+=1
    print("insertion")
    li = insertion(num)
    print("")
    print(li)
    print("")
    print("ins")
    l2 = ins(num)
    print("")
    print(l2)
    print("")