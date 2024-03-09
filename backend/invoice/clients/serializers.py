from rest_framework import serializers
from clients.models import client_test, SenderAddress
from django.contrib.auth.models import User


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SenderAddress
        fields = "__all__"


class ClientsSerializers(serializers.ModelSerializer):
    class Meta:
        model = client_test
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    clients = serializers.PrimaryKeyRelatedField(
        many=True, queryset=client_test.objects.all()
    )

    class Meta:
        model = User
        fields = ["id", "username", "clients"]
