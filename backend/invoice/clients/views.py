from clients.models import client_test
from clients.serializers import ClientsSerializers, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User


class ClientList(generics.ListCreateAPIView):
    queryset = client_test.objects.all()
    serializer_class = ClientsSerializers

    def perform_create(self, serializer):
        serializer.save(ower=self.request.user)


class ClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = client_test.objects.all()
    serializer_class = ClientsSerializers


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
