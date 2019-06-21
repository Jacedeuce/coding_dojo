def sigma(num):
    if num ==1:
        return num
    return num + sigma(num-1)

def fact(num):
    if num==1:
        return num
    return num * fact(num-1)

print(sigma(8))
print(fact(8))

def recursive_fibonacci(num):
    if num <= 0:
        print("Supply a positive integer")
        return None
    elif num==1:
        return 0
    elif num==2:
        return 1
    else:
        fib = recursive_fibonacci(num-1) + recursive_fibonacci(num-2)
        return fib


print(recursive_fibonacci(6))



num = 5
def prog(num):
    num+=1
    print(num)

prog(num)
print(num)

def is_palindrome(string):
    start = 0
    end = len(string)-1

    def pal_helper(string, start, end):
        if string[start] != string[end]:
            return False
        if start >= end:
            return True
        else:
            return pal_helper(string, start+1, end-1)

    return pal_helper(string, start, end)


print(is_palindrome('able wass I ere I saw elba'))