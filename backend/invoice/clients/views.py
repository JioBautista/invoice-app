from clients.models import client_test
from clients.serializers import ClientsSerializers, UserSerializer
from rest_framework import generics
from rest_framework import permissions
from django.contrib.auth.models import User


class ClientList(generics.ListCreateAPIView):
    queryset = client_test.objects.all()
    serializer_class = ClientsSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = client_test.objects.all()
    serializer_class = ClientsSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
