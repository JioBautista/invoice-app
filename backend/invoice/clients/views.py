from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from clients.models import client_test
from clients.serializers import ClientsSerializers

# Create your views here.


@csrf_exempt
def clients(request):
    if request.method == "GET":
        clients = client_test.objects.all()
        serializer = ClientsSerializers(clients, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ClientsSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
