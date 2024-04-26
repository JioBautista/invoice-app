from users.models import Users
from users.serializers import UserSerializers
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializers
