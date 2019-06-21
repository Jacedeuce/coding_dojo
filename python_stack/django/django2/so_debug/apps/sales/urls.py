from django.urls import path
from . import views

urlpatterns = [
    path('presales', views.presales, name='sales'),
    path('presales_total', views.presales_total),
]