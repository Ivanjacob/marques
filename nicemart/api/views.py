from django.shortcuts import render
from rest_framework import generics
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, RiceSerializer
from .models import Rice
from django.http import JsonResponse
from api.models import User

from api.serializers import MyTokenObtainPairSerializer, RegisterSerializer, RiceSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated


# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndpoint(request):
    if request.method == 'GET':
        data = f"Congratulations {request.user}, you are authenticated!"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Good Day."
        data = f"Congratulations your API responded to POST with {text}"
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({'response': 'Invalid Request'}, status=status.HTTP_400_BAD_REQUEST)


class RiceView(generics.CreateAPIView):
    queryset = Rice.objects.all()
    serializer_class = RiceSerializer
