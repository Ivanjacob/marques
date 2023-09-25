from rest_framework import generics
from .models import RiceStock, Product
from .serializers import RiceStockSerializer, ProductSerializer


class RiceStockListCreateView(generics.ListCreateAPIView):
    queryset = RiceStock.objects.all()
    serializer_class = RiceStockSerializer


class RiceStockRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RiceStock.objects.all()
    serializer_class = RiceStockSerializer


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
