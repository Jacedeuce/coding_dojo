from django.shortcuts import render, redirect

def presales(request):
    # my_opportunities = cwObj.get_opportunities()
    # context = {'my_opportunities': my_opportunities}
    return render(request, 'sales/presales.html')

def presales_total(request):
    if request.method=='POST':

        hours = request.POST['hours']
        engineer_level = request.POST['selected_engineer_level']
        if engineer_level == 'PM':
            wage = 225
        elif engineer_level == 'Solutions Technician':
            wage = 175
        elif engineer_level == 'Solutions Engineer':
            wage = 225
        elif engineer_level == 'Senior Solutions Engineer':
            wage = 275
        elif engineer_level == 'Solutions Architect':
            wage = 275
        total = wage * int(hours)

        request.session['total'] = total
        return redirect('/sales/presales')