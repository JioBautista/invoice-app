from clients.models import ClientInfo, ClientItems
from clients.serializers import (
    ClientsSerializers,
    ClientItemsSerializers,
)
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from users.customauth import CustomTokenAuth


class ClientsList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers


class ClientDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers


class ItemList(generics.ListCreateAPIView):
    queryset = ClientItems.objects.all()
    serializer_class = ClientItemsSerializers


class ItemDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClientItems.objects.all()
    serializer_class = ClientItemsSerializers
