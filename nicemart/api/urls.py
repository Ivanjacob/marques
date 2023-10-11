from django.urls import path
from api import views
from .models import User
from .serializers import UserSerializer
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('test/', views.testEndpoint, name='test'),
    path('users/', views.UserListView.as_view(), name='users'),
    path('farmers/', views.FarmerUserListView.as_view(), name='farmers'),
    path('inventorymanagers/', views.InventoryManagerUserListView.as_view(),
         name='inventorymanagers'),
    path('customers/', views.CustomerUserListView.as_view(), name='customers'
         ),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    path('register/inventorymanager/', views.RegisterInventoryManagerView.as_view(),
         name='register-inventorymanager'),
    path('profile/', views.ProfileListView.as_view(), name='profile'),
    path('profile/<str:identifier>/',
         views.UserProfileView.as_view(), name='user-profile'),
    path('user/profile/', views.UsersProfileView.as_view(), name='user-profile'),
    path('', views.getRoutes),

    # Customer User Registration and Login
    path('customer-user/register/',
         views.CustomerUserRegistrationView.as_view(), name='customer-user-register'),
    path('customer-user/login/',
         views.CustomerUserLoginView.as_view(), name='customer-user-login'),

    # Farmer User Registration and Login
    path('farmer-user/register/', views.FarmerUserRegistrationView.as_view(),
         name='farmer-user-register'),
    path('farmer-user/login/',
         views.FarmerUserLoginView.as_view(), name='farmer-user-login'),

]
