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

    # product
    path('product/', views.ProductListCreateView.as_view(), name='product'),
    path('product/<int:pk>/', views.ProductDetailView.as_view(),
         name='product-detail'),

    # stock
    path('stock/', views.StockListCreateView.as_view(), name='stock'),
    path('stock-edit/', views.StockRetrieveUpdateDestroyView.as_view(),
         name='manage-stock'),
    path('stock/<int:pk>/', views.StockDetailView.as_view(), name='stock-detail'),
    # path('generate_stock_report/', views.GenerateStockReport.as_view(),
    #    name='generate_stock_report'),

    # Orders
    path('order/', views.OrderListCreateView.as_view(), name='order'),
    path('order/<int:pk>/', views.OrderDetailView.as_view(),
         name='order-detail'),
    path('order-edit/', views.OrderRetrieveUpdateDestroyView.as_view(),
         name='order-edit'),

    # Order Item
    path('order-item/', views.OrderItemListCreateView.as_view(), name='order-item'),
    path('order-item/<int:pk>/', views.OrderItemDetailView.as_view(),
         name='order-item-details'),
    path('order-item-edit/', views.OrderItemRetrieveUpdateDestroyView.as_view(),
         name='order-item-edit'),
]

urlpatterns += router.urls
