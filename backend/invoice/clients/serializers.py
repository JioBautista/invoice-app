from rest_framework import serializers
from clients.models import ClientInfo, ClientAddress
from django.contrib.auth.models import User


class ClientAddressSerializers(serializers.ModelSerializer):

    class Meta:
        model = ClientAddress
        fields = ["street", "city", "postCode", "country"]


class ClientsSerializers(serializers.ModelSerializer):
    client_address = ClientAddressSerializers()

    class Meta:
        model = ClientInfo
        fields = [
            "id",
            "invoice_num",
            "created_at",
            "payment_due",
            "description",
            "payment_terms",
            "status",
            "total",
            "sender_address",
            "client_name",
            "client_email",
            "items",
            "client_address",
        ]
        depth = 1
        owner = serializers.ReadOnlyField(source="owner.username")

    def create(self, validated_data):
        address = validated_data.pop("client_address")
        client = ClientInfo.objects.create(**validated_data)
        ClientAddress.objects.create(**address)
        return client


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
