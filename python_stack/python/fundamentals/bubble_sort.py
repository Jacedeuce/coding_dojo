numlist = [5,2,8,6,9,2,6,8,10,7]



def bubble(numlist):
    swaps = 0
    comps = 0
    loops = 0
    for i in range(len(numlist)):
        loops +=1
        for i in range(len(numlist)-1):
            comps+=1
            if numlist[i] > numlist[i+1]:
                numlist[i], numlist[i+1] = numlist[i+1], numlist[i]
                swaps+=1

    print(swaps, comps, loops)
    return numlist

print("bubble \n")
print(bubble(numlist))


# def bubble2(numlist):
#     for i in range()


def BubbleSort(A):
    end = len(A)-1
    swapped = True
    comps = 0
    swaps = 0
    loop = 0
    while swapped:
        swapped = False
        loop+=1
        for i in range(0, end):
            comps+=1
            if A[i] > A[i+1]:
                swaps+=1
                A[i], A[i+1] = A[i+1], A[i]
                swapped = True
        end -= 1
    print(swaps, comps, loop)
    return numlist

print("bubbleSort \n")
print(BubbleSort(numlist))