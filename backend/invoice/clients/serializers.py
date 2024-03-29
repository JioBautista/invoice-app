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

    def create(self, validated_data):
        print(validated_data)
        client_address_data = validated_data.pop("client_address")
        client_info = ClientInfo.objects.create(**validated_data)
        for client_address in client_address_data:
            ClientAddress.objects.create(client=client_info, **client_address)
        return client_info


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
