from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def clients(request):
    return HttpResponse("Hello Client")
