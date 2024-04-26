from django.contrib.auth.models import User
from users.serializers import UserSerializers
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class UserList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializers
