from rest_framework import generics, viewsets
from .models import RiceStock, Product, Category, Stock
from .serializers import RiceStockSerializer, ProductSerializer, CategorySerializer, StockSerializer


class RiceStockListCreateView(generics.ListCreateAPIView):
    queryset = RiceStock.objects.all()
    serializer_class = RiceStockSerializer


class RiceStockRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RiceStock.objects.all()
    serializer_class = RiceStockSerializer


class StockListCreateView(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class StockRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
