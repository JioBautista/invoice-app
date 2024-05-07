from tasks.models import Active, Completed
from tasks.serializers import ActiveSerializers, CompletedSerializers
from rest_framework import generics


class ActiveList(generics.ListCreateAPIView):
    queryset = Active.objects.all()
    serializer_class = ActiveSerializers


class ActiveDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Active.objects.all()
    serializer_class = ActiveSerializers


class CompletedList(generics.ListCreateAPIView):
    queryset = Completed.objects.all()
    serializer_class = CompletedSerializers


class CompletedDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Completed.objects.all()
    serializer_class = CompletedSerializers
