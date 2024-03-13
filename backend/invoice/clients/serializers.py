from rest_framework import serializers
from clients.models import ClientInfo
from django.contrib.auth.models import User


class ClientsSerializers(serializers.ModelSerializer):

    class Meta:
        model = ClientInfo
        exclude = ["owner"]
        depth = 1
        owner = serializers.ReadOnlyField(source="owner.username")


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
