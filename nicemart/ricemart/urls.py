from django.urls import path
from . import views

urlpatterns = [
    path('rice-stock/',
         views.RiceStockListCreateView.as_view(), name='rice-stock'),
    path('rice-stock/<int:pk>/',
         views.RiceStockRetrieveUpdateDestroyView.as_view(), name='rice-stock-detail'),
    path('product/', views.ProductListCreateView.as_view(), name='product'),
    path('product/<int:pk>/', views.ProductDetailView.as_view(),
         name='product-detail'),
]
