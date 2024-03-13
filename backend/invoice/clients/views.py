from clients.models import ClientInfo
from clients.serializers import ClientsSerializers, UserSerializer
from clients.permissions import IsOwnerOrReadOnly
from rest_framework import permissions, viewsets
from django.contrib.auth.models import User


class ClientViewSet(viewsets.ModelViewSet):
    queryset = ClientInfo.objects.all()
    serializer_class = ClientsSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
