from django.contrib.auth.models import User
from users.serializers import UserSerializers
from rest_framework import generics
from rest_framework.permissions import (
    IsAuthenticated,
)
from .customauth import CustomTokenAuth


class UserList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = User.objects.all()
    serializer_class = UserSerializers
