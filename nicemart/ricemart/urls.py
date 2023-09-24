from django.urls import path
from . import views

urlpatterns = [
    path('rice-stock/',
         views.RiceStockListCreateView.as_view(), name='rice-stock'),
    path('rice-stock/<int:pk>/',
         views.RiceStockRetrieveUpdateDestroyView.as_view(), name='rice-stock-detail'),
]
