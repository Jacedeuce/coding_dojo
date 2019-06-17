from django.conf.urls import url
from . import views

urlpatterns = [
    url('^add_message/?$', views.add_message),
    url('^add_comment/?$', views.add_comment),
    url('^del_message/(?P<message_id>\d+)/$', views.del_message),
    url('^$', views.the_wall),
]