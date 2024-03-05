from rest_framework import serializers
from clients.models import client_test


class ClientsSerializers(serializers.ModelSerializer):
    class Meta:
        model = client_test
        fields = [
            "id",
            "createdAt",
            "paymentDue",
            "description",
            "paymentTerms",
            "clientName",
            "status",
            "total",
        ]
