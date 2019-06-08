from random import randint

def gold_calculator(val):
    building_dict = {}
    building_dict['farm'] = {'low':10,"high":20}
    building_dict['cave'] = {'low':5,"high":10}
    building_dict['house'] = {'low':2,"high":5}
    building_dict['casino'] = {'low':-50,"high":50}

    gold = randint(building_dict[val]['low'], building_dict[val]['high'])

    return gold

if __name__=="__main__":
    pass
