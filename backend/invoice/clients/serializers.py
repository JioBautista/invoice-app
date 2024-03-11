from rest_framework import serializers
from clients.models import client_test
from django.contrib.auth.models import User


class ClientsSerializers(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="client-detail")

    class Meta:
        model = client_test
        fields = "__all__"
        owner = serializers.ReadOnlyField(source="owner.username")


class UserSerializer(serializers.HyperlinkedModelSerializer):
    client = serializers.HyperlinkedRelatedField(
        many=True, view_name="client-detail", read_only=True
    )

    class Meta:
        model = User
        fields = "__all__"
