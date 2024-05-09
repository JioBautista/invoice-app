from tasks.models import Active, Completed
from tasks.serializers import ActiveSerializers, CompletedSerializers
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from users.customauth import CustomTokenAuth


class ActiveList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = Active.objects.all()
    serializer_class = ActiveSerializers


class ActiveDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = Active.objects.all()
    serializer_class = ActiveSerializers


class CompletedList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = Completed.objects.all()
    serializer_class = CompletedSerializers


class CompletedDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [CustomTokenAuth]
    queryset = Completed.objects.all()
    serializer_class = CompletedSerializers
