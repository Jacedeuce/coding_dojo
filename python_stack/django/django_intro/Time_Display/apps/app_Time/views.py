## app_Time ##
from django.shortcuts import render, HttpResponse
from datetime import datetime

# Create your views here.
def index(request):
    context = {
        "time": str(datetime.now().strftime("%A %B %d, %Y - %H:%M %p"))
    }
    return render(request, 'app_Time/index.html', context)