## app_Ninja ##
from random import randint

def gold_randomizer(building):
    '''
    Accepts the building value and applies random.randint to return a value of
    gold in the acceptable range for that building
    '''
    ranges = {
                'farm' : {'low' : 10, 'high' : 20},
                'cave' : {'low' : 5, 'high' : 10},
                'house' : {'low' : 2, 'high' : 5},
                'casino' : {'low' : -50, 'high' : 50},
    }

    return randint(ranges[building]['low'], ranges[building]['high'])


if __name__=='__main__':
    pass