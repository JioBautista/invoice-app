from django.urls import path, include
from clients import views


urlpatterns = [
    path("clients/", views.ClientsList.as_view()),
    path("clients/<int:pk>/", views.ClientDetails.as_view()),
    path("items/", views.ItemList.as_view()),
    path("items/<int:pk>/", views.ItemDetails.as_view()),
]
