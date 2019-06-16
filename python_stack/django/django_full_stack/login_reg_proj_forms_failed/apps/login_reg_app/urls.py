## login_reg_app ##
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^register/?$', views.register),
    url(r'^login/?$', views.login),
    url(r'^$', views.loginReg),
    # url(r'^admin/', admin.site.urls),
]