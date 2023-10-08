from rest_framework import generics, viewsets, permissions
from .models import RiceStock, Product, Category, Stock
from api.models import CommonUserFields, User
from .serializers import RiceStockSerializer, ProductSerializer, CategorySerializer, StockSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.db.models import Sum
from django.views.decorators.http import require_GET
from django.utils.decorators import method_decorator
from django.views import View
from django.utils.timezone import make_aware
from datetime import datetime
from django.shortcuts import render
from django.db.models import Q


# @method_decorator(require_GET, name='dispatch')
# class GenerateStockReport(View):
#     def get(self, request):
#         try:
#             # Get report criteria from request (e.g. start_date, end_date, category)
#             start_date_str = request.GET.get('start_date')
#             end_date_str = request.GET.get('end_date')
#             #

#             # parse the date strings into datetime objects
#             start_date = make_aware(
#                 datetime.strptime(start_date_str, "%Y-%m-%d"))
#             end_date = make_aware(
#                 datetime.strptime(end_date_str, "%Y-%m-%d"))
#             #

#             # Query the stock model to filter data based on the date range
#             stocks = Stock.objects.filter(
#                 Q(last_updated__gte=start_date) & Q(last_updated__lte=end_date))
#             #

#             #  Calculate the total quantity of stock for each product
#             report_data = []
#             for stock in stocks:
#                 # product = stock.product
#                 # total_quantity = stocks.filter(
#                 #     product=product).aggregate(Sum('quantity'))['quantity__sum']

#                 report_data.append({
#                     'product_name': stock.product.name,
#                     # 'category': stock.product.category,
#                     'quantity_in_stock': stock.quantity_in_stock,
#                     'last_updated': stock.last_updated
#                 })

#             return JsonResponse(report_data, safe=False)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)


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


class StockDetailView(generics.RetrieveUpdateDestroyAPIView):
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
