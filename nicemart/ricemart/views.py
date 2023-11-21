from rest_framework import generics, viewsets, permissions
from .models import RiceStock, Product, Category, Stock, Order, OrderItem, FarmerStock, QueuePosition, MillingRecord, Report
from api.models import CommonUserFields, User, FarmerUser, InventoryManagerUser
from .serializers import (
    RiceStockSerializer,
    ProductSerializer,
    CategorySerializer,
    StockSerializer,
    OrderItemSerializer,
    OrderSerializer,
    FarmerStockSerializer,
    QueuePositionSerializer,
    MillingRecordSerializer,
    ReportSerializer,

)
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import csv
from .permissions import IsAdminUserOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from django.db.models import Sum
from django.views.decorators.http import require_GET
from django.utils.decorators import method_decorator
from django.views import View
from django.utils.timezone import make_aware
from datetime import datetime
from django.shortcuts import render
from django.db.models import Q
from rest_framework.views import APIView

@api_view(['GET'])
def getRoutes(request):
    routes= [

       "/ricemart/stock/",
       "/ricemart/stock/<int:pk>/",
       "/ricemart/stock-edit/",
       
       "/ricemart/order-item/",
       "/ricemart/order-item/<int:pk>/",
       "/ricemart/order-item-edit/",
       
       "/ricemart/order/",
       "/ricemart/order/<int:pk>/",
       "/ricemart/order-edit/",
       
       "/ricemart/product/",
       "/ricemart/product/<int:pk>/",
       
       "/ricemart/rice-stock/",
       "/ricemart/rice-stock/<int:pk>/",

       "/ricemart/farmer-stock/",
        "/ricemart/farmer-stock/<int:pk>/",
    ] 
    return Response(routes)



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


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemListCreateView(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


# View for FarmerStock
class FarmerStockListCreateView(generics.ListCreateAPIView):
    queryset = FarmerStock.objects.all()
    serializer_class = FarmerStockSerializer


class FarmerStockDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmerStock.objects.all()
    serializer_class = FarmerStockSerializer

# View for QueuePosition


class QueuePositionListCreateView(generics.ListCreateAPIView):
    queryset = QueuePosition.objects.all()
    serializer_class = QueuePositionSerializer


class QueuePositionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = QueuePosition.objects.all()
    serializer_class = QueuePositionSerializer

# View for MillingRecord


class MillingRecordListCreateView(generics.ListCreateAPIView):
    queryset = MillingRecord.objects.all()
    serializer_class = MillingRecordSerializer


class MillingRecordDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MillingRecord.objects.all()
    serializer_class = MillingRecordSerializer


def generate_pdf_report(request):
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="report.pdf"'

    # Create a pdf object with the response object
    p = canvas.Canvas(response, pagesize=letter)
    p.drawString(100, 750, "Your PDF Report Content Here")
    p.showPage()
    p.save()

    return response


def generate_csv_report(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="report.csv"'

    writer = csv.writer(response)
    writer.writerows(['Column 1', 'Column 2', 'Column 3']
                     )            # write column headers
    writer.writerows(['Data 1', 'Data 2', 'Data 3'])  # write report data

    return response


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [IsAdminUserOrReadOnly]
