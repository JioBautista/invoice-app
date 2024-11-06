from rest_framework import serializers
from clients.models import ClientInfo, ClientAddress, SenderAddress, ClientItems
from drf_writable_nested.serializers import WritableNestedModelSerializer


class ClientAddressSerializers(serializers.ModelSerializer):

    class Meta:
        model = ClientAddress
        fields = ["street", "city", "postCode", "country"]


class SenderAddressSerializers(serializers.ModelSerializer):

    class Meta:
        model = SenderAddress
        fields = ["street", "city", "postCode", "country"]


class ClientItemsSerializers(serializers.ModelSerializer):

    class Meta:
        model = ClientItems
        fields = ["id", "name", "price", "total", "quantity"]


class ClientsSerializers(WritableNestedModelSerializer):
    client_address = ClientAddressSerializers()
    sender_address = SenderAddressSerializers()
    items = ClientItemsSerializers(many=True)

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
            "client_name",
            "client_email",
            "sender_address",
            "client_address",
            "items",
        ]
        depth = 1
        owner = serializers.ReadOnlyField(source="owner.username")
