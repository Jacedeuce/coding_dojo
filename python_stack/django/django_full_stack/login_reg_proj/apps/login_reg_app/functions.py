from datetime import datetime

def subtract_years(input_date, years):
    try:
        input_date = input_date.replace(year=input_date.year-years)
    except ValueError:
        input_date = input_date.replace(year=input_date.year-years, day=input_date.day-1)
    return input_date

    ##https://stackoverflow.com/questions/5158160/python-get-datetime-for-3-years-ago-today

if __name__=="__main__":
    pass