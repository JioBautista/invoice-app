from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("", views.api_foot),
    path("clients/", views.ClientList.as_view(), name="client-list"),
    path("clients/<int:pk>", views.ClientDetail.as_view(), name="client-detail"),
    path("users/", views.UserList.as_view(), name="user-list"),
    path("users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
