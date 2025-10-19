from django.urls import path, include
from .views import protected_view,Registerview


urlpatterns = [
    path("api/",Registerview.as_view()),
    path('protected-view',protected_view.as_view()),

]