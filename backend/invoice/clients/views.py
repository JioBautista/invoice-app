from clients.models import ClientInfo, ClientItems
from clients.serializers import (
    ClientsSerializers,
    UserSerializer,
    ClientItemsSerializers,
)
from clients.permissions import IsOwnerOrReadOnly
from rest_framework import permissions, viewsets
from django.contrib.auth.models import User


class ClientViewSet(viewsets.ModelViewSet):
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = ClientItems.objects.all()
    serializer_class = ClientItemsSerializers
