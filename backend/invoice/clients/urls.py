from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("clients/", views.clients, name="clients"),
    path("clients/<int:pk>", views.client_details, name="client_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
