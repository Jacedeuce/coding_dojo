import random
def randInt(min= 0  , max= 100  ):
    if min < max:    
        num = round(random.random() * (max-min) + min)
        return num
    else:
        print("specify a minimum value that is less than the maximum value that you specified (or the default of 100) \n \
            or a maximum value that is greater than the minimum you specified (or the default of 0)") 
        return False
#print(randInt()) 		    # should print a random integer between 0 to 100
#print(randInt(max=50)) 	    # should print a random integer between 0 to 50
#print(randInt(min=50)) 	    # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500
