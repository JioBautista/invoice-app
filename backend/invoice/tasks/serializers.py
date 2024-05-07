from rest_framework import serializers
from tasks.models import Active, Completed


class ActiveSerializers(serializers.ModelSerializer):

    class Meta:
        model = Active
        fields = "__all__"


class CompletedSerializers(serializers.ModelSerializer):

    class Meta:
        model = Completed
        fields = "__all__"
