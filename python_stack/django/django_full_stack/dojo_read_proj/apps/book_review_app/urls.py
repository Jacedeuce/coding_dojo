## book_review_app views ##
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^review_delete/(?P<review_id>\d+)$', views.review_delete),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^(?P<booknum>\d+)$', views.show),
    # url(r'^(?P<booknum>\d+)/edit$', views.edit),
    url(r'^(?P<booknum>\d+)/new_review$', views.new_review),  ## add a review
    # url(r'^(?P<booknum>\d+)/delete$', views.delete),
    url(r'^$', views.index),
]