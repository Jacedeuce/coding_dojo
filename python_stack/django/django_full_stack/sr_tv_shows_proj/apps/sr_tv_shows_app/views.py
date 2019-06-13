from django.shortcuts import render, redirect, HttpResponse
from apps.sr_tv_shows_app.models import Show

# Create your views here.
def shows(request):
    shows = Show.objects.all()
    context = {
        "shows" : shows,
    }
    return render(request, "sr_tv_shows_app/shows.html", context) 

def shows_new(request):
    return render(request, "sr_tv_shows_app/shows_new.html")

def shows_create(request):
    if request.method == 'POST':
        Show.objects.create(title=request.POST['form_title'],
                            network=request.POST['form_network'],
                            release_date=request.POST['form_date'],
                            desc=request.POST['form_description'])
        show = Show.objects.last()
    return redirect("/shows/" + str(show.id) )

def shows_show(request, show_num):
    show = Show.objects.get(id = show_num)
    context = {
        "title" : show.title,
        "id" : show.id,
        "network" : show.network,
        "release_date" : show.release_date.strftime("%b %d, %Y"),
        "desc" : show.desc,
        "updated_at" : show.updated_at.strftime("%B %d, %Y %I:%d %p")
    }
    return render(request, "sr_tv_shows_app/shows_show.html", context)

def shows_edit(request, show_num):
    show = Show.objects.get(id = show_num)
    context = {
        "title" : show.title,
        "id" : show.id,
        "network" : show.network,
        "release_date" : str(show.release_date),
        "desc" : show.desc,
    }
    return render(request, "sr_tv_shows_app/shows_edit.html", context)

def shows_update(request, show_num):
    if request.method == 'POST':
        show = Show.objects.get(id=show_num)
        show.title=request.POST['form_title']
        show.network=request.POST['form_network']
        show.release_date=request.POST['form_date']
        show.desc=request.POST['form_description']
        show.save()
    return redirect("/shows/" + str(show_num))

def shows_destroy(request, show_num):
    show = Show.objects.get(id=show_num)
    show.delete()
    return redirect("/shows")

def index(request):
    return redirect("/shows")