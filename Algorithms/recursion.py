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