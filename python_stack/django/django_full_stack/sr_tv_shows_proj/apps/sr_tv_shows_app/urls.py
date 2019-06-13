from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^shows/?$', views.shows), # display all shows
    url(r'^shows/new$', views.shows_new), # form to create new show
    url(r'^shows/create$', views.shows_create), # route to create new show - redirect to display individual show (/shows/#)
    url(r'^shows/(?P<show_num>\d+)$', views.shows_show), # display individual show
    url(r'^shows/(?P<show_num>\d+)/edit$', views.shows_edit), # form to edit individual show
    url(r'^shows/(?P<show_num>\d+)/update$', views.shows_update), # route to update individual show
    url(r'^shows/(?P<show_num>\d+)/destroy$', views.shows_destroy), # route to destroy individual show
    url(r'^$', views.index), # display all shows
]