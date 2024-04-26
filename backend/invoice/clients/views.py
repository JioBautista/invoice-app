from clients.models import ClientInfo, ClientItems
from clients.serializers import (
    ClientsSerializers,
    ClientItemsSerializers,
)
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class ClientsList(generics.ListCreateAPIView):
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers


class ClientDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers


class ItemList(generics.ListCreateAPIView):
    queryset = ClientItems.objects.all()
    serializer_class = ClientItemsSerializers


class ItemDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClientItems.objects.all()
    serializer_class = ClientItemsSerializers
