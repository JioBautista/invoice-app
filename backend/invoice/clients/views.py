from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from clients.models import client_test
from clients.serializers import ClientsSerializers, UserSerializer
from django.contrib.auth.models import User

# Create your views here.


@api_view(["GET", "POST"])
def clients(request, format=None):
    if request.method == "GET":
        clients = client_test.objects.all()
        serializer = ClientsSerializers(clients, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = ClientsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST", "DELETE"])
def client_details(request, pk, format=None):
    try:
        client = client_test.objects.get(pk=pk)
    except client_test.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = ClientsSerializers(client)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = ClientsSerializers(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
