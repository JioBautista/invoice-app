from django.urls import path
from tasks import views

urlpatterns = [
    path("active/", views.ActiveList.as_view()),
    path("active/<int:pk>", views.ActiveDetails.as_view()),
    path("completed/", views.CompletedList.as_view()),
    path("completed/<int:pk>", views.CompletedDetails.as_view()),
]
