## books_authors_app ##
from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.books),
    url(r'^books/(?P<url_num>\d+)$', views.booknum),
    url(r'^authors/(?P<url_num>\d+)$', views.authornum),
    url(r'^authors', views.authors),
    url(r'^addbook$', views.addbook),
    url(r'^addauthor$', views.addauthor),
    url(r'^author2book$', views.author2book),
    url(r'^book2author$', views.book2author),
    url(r'^books$', views.books),
]