from django.contrib.auth.models import User
from users.serializers import UserSerializers
from rest_framework import generics
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    DjangoModelPermissions,
    IsAdminUser,
)
from .customauth import CustomTokenAuth


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [IsAdminUser]
    authentication_classes = [CustomTokenAuth]


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializers
