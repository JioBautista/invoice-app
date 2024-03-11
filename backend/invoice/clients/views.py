from clients.models import client_test
from clients.serializers import ClientsSerializers, UserSerializer
from clients.permissions import IsOwnerOrReadOnly
from rest_framework import generics
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
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
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(["GET"])
def api_foot(request, format=None):
    return Response(
        {
            "users": reverse("user-list", request=request, format=format),
            "clients": reverse("client-list", request=request, format=format),
        }
    )
