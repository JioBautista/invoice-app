from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("clients/", views.ClientList.as_view(), name="clients"),
    path("clients/<int:pk>", views.ClientDetail.as_view(), name="client_detail"),
    path("users/", views.UserList.as_view()),
    path("users/<int:pk>/", views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
