from rest_framework import serializers
from clients.models import ClientInfo, ClientAddress
from django.contrib.auth.models import User


class ClientAddressSerializers(serializers.ModelSerializer):

    class Meta:
        model = ClientAddress
        fields = "__all__"


class ClientsSerializers(serializers.ModelSerializer):
    client_address = ClientAddressSerializers(read_only=True)

    class Meta:
        model = ClientInfo
        exclude = ["owner"]
        depth = 1
        owner = serializers.ReadOnlyField(source="owner.username")


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
