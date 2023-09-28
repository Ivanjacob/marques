from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet, basename='categories')

urlpatterns = [
    path('rice-stock/',
         views.RiceStockListCreateView.as_view(), name='rice-stock'),
    path('rice-stock/<int:pk>/',
         views.RiceStockRetrieveUpdateDestroyView.as_view(), name='rice-stock-detail'),
    path('product/', views.ProductListCreateView.as_view(), name='product'),
    path('product/<int:pk>/', views.ProductDetailView.as_view(),
         name='product-detail'),
    path('stock/', views.StockListCreateView.as_view(), name='stock'),
    path('stock-edit/', views.StockRetrieveUpdateDestroyView.as_view(),
         name='manage-stock'),
]

urlpatterns += router.urls
