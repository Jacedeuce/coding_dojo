from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^books/?$', views.books),
    url(r'^books/(?P<booknum>\d+)$', views.book_view),
    url(r'^add_book/?$', views.add_book),
    url(r'^add_favorite/(?P<booknum>\d+)$', views.add_favorite),
    url(r'^delete_book/(?P<booknum>\d+)$', views.delete_book),
    url(r'^remove_favorite/(?P<booknum>\d+)$', views.remove_favorite),
    url(r'^update_book/(?P<booknum>\d+)$', views.update_book),
]