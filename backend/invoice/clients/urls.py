from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns
from clients import views

router = DefaultRouter()
router.register(r"clients", views.ClientViewSet, basename="client")
router.register(r"users", views.UserViewSet, basename="user")

urlpatterns = [path("", include(router.urls))]
