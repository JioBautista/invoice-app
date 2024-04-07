from rest_framework import serializers
from clients.models import ClientInfo, ClientAddress, SenderAddress, ClientItems
from django.contrib.auth.models import User


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


class ClientsSerializers(serializers.ModelSerializer):
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

    def create(self, validated_data):
        # EXTRACT ITEM DATA
        items_data = validated_data.pop("items")

        # EXTRACT SENDERS ADDRESS DATA AND INSERT IN SENDER ADDRESS MODEL
        sender_data = validated_data.pop("sender_address")
        sender_address = SenderAddress.objects.create(**sender_data)

        # EXTRACT CLIENT ADDRESS DATA AND INSERT IN CLIENT ADDRESS MODEL
        address_data = validated_data.pop("client_address")
        client_address = ClientAddress.objects.create(**address_data)

        # CLIENT INFO MODELS W/ CLIENT ADDRESS, SENDER ADDRESS AND ITEMS FIELD
        client = ClientInfo.objects.create(
            client_address=client_address,
            sender_address=sender_address,
            **validated_data
        )

        # INSERT ITEMS DATA IN CLIENT ITEMS MODEL
        for data in items_data:
            item = ClientItems.objects.create(**data)
            client.items.add(item)
        return client

    def update(self, instance, validated_data):
        address_data = validated_data.pop("client_address")
        client_address = instance.client_address

        client_address.street = address_data.get("street", client_address.street)
        client_address.city = address_data.get("city", client_address.city)
        client_address.postCode = address_data.get("postCode", client_address.postCode)
        client_address.country = address_data.get("country", client_address.country)
        client_address.save()

        instance.client_name = validated_data.get("client_name", instance.client_name)
        instance.client_email = validated_data.get(
            "client_email", instance.client_email
        )
        instance.status = validated_data.get("status", instance.status)
        instance.total = validated_data.get("total", instance.total)

        items_data = validated_data.pop("items")

        for data in items_data:
            new_items = ClientItems.objects.create(**data)
            instance.items.add(new_items)
            print(instance.items)
            print(data)

        instance.save()

        return instance


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
