## example_app ##
from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):

    context = {
    	"name": "Noelle",
    	"favorite_color": "turquoise",
    	"pets": ["Bruce", "Fitz", "Georgie"]
    }
    return render(request, "example_app/index.html", context)
