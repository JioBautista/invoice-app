from rest_framework import serializers
from clients.models import client_test


class ClientsSerializers(serializers.ModelSerializer):
    clientAddress = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = client_test
        fields = "__all__"
