from django.urls import path
from api import views
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('test/', views.testEndpoint, name='test'),
    path('', views.getRoutes),
]
