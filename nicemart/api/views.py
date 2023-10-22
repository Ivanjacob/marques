# Version: 1.0
from django.shortcuts import render
from rest_framework import generics
from knox.models import AuthToken

from rest_framework.views import APIView
from .models import Profile, Rice
from django.http import JsonResponse
from api.models import User, InventoryManagerUser, FarmerUser, CustomerUser

from api.serializers import MyTokenObtainPairSerializer, RegisterSerializer, RiceSerializer, UserSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from api.serializers import (
    MyTokenObtainPairSerializer,
    RegisterSerializer,
    UserSerializer,
    FarmerUserSerializer,
    InventoryManagerUserSerializer,
    CustomerUserSerializer, 
    RegisterInventorySerializer,
    ProfileSerializer,
    CustomerUserRegistrationSerializer,
    CustomerUserLoginSerializer,
    FarmerUserRegistrationSerializer,
    FarmerUserLoginSerializer,
    UserProfileSerializer,

)


# Create your views here.


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class FarmerUserListView(generics.ListAPIView):
    queryset = FarmerUser.objects.all()
    serializer_class = FarmerUserSerializer


class InventoryManagerUserListView(generics.ListAPIView):
    queryset = InventoryManagerUser.objects.all()
    serializer_class = InventoryManagerUserSerializer


class CustomerUserListView(generics.ListAPIView):
    #
    queryset = CustomerUser.objects.all()
    serializer_class = CustomerUserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # Adjust permissions as needed
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'id'


class UsersProfileView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer

# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = (AllowAny,)
#     serializer_class = RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class RegisterInventoryManagerView(generics.CreateAPIView):
    queryset = InventoryManagerUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterInventorySerializer


class ProfileListView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # Adjust permissions as needed
    # permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'id'


class UpdateUserVerifyStatusView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class UpdateUserVerifyStatus(APIView):

    #permission_classes = [permissions.IsAuthenticated]

    def put(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            user.verify = True # Update the "verify" status
            user.save()
            return Response({"message": "User verified successfully" })
        except User.DoesNotExist:
            return Response({"message": "User not found."}, status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/test/',
        '/api/users/',
        '/api/farmers/',
        '/api/inventorymanagers/',
        '/api/customers/',
        '/api/register/inventorymanager/',
        '/api/profile/',
        '/api/user/profile/',
        '/api/customer-user/register/',
        '/api/customer-user/login/',
        '/api/farmer-user/register/',
        '/api/farmer-user/login/',

    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndpoint(request):
    if request.method == 'GET':
        data = f"Congratulations {request.user}, you are an authenticated user!"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Good Day."
        data = f"Congratulations your API responded to POST with {text}"
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({'response': 'Invalid Request'}, status=status.HTTP_400_BAD_REQUEST)


class RiceView(generics.CreateAPIView):
    queryset = Rice.objects.all()
    serializer_class = RiceSerializer


class UserProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        identifier = self.kwargs.get('identifier')
        try:
            user_id = int(identifier)
            return Profile.objects.get(user_id=user_id)
        except ValueError:
            try:
                return Profile.objects.get(user__email=identifier)
            except Profile.DoesNotExist:
                return None

    def retrieve(self, request, *args, **kwargs):
        profile = self.get_object()
        if profile is not None:
            serializer = self.get_serializer(profile)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                {"detail": "User profile not found."},
                status=status.HTTP_404_NOT_FOUND,
            )


class CustomerUserRegistrationView(generics.CreateAPIView):
    serializer_class = CustomerUserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            _, token = AuthToken.objects.create(user)
            return Response({
                "user": CustomerUserRegistrationSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomerUserLoginView(generics.GenericAPIView):
    serializer_class = CustomerUserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            _, token = AuthToken.objects.create(user)
            return Response({
                "user": CustomerUserRegistrationSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FarmerUserRegistrationView(generics.CreateAPIView):
    serializer_class = FarmerUserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            _, token = AuthToken.objects.create(user)
            return Response({
                "user": FarmerUserRegistrationSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FarmerUserLoginView(generics.GenericAPIView):
    serializer_class = FarmerUserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            _, token = AuthToken.objects.create(user)
            return Response({
                "user": FarmerUserRegistrationSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
