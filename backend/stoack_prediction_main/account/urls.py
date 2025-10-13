from django.urls import path, include
from . import views


urlpatterns = [
    path("api/",views.Registerview.as_view())
]