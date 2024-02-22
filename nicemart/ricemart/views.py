from rest_framework import generics, viewsets, permissions
from .models import RiceStock, Product, Category, Stock, Order, OrderItem, FarmerStock, QueuePosition, MillingRecord, Report
from api.models import CommonUserFields, User, FarmerUser, InventoryManagerUser, CustomerUser
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
    ReportSerializer
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
from .service import Cart
from decimal import Decimal
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import JsonResponse

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
    writer.writerows(['Column 1', 'Column 2', 'Column 3']) # write column headers
    writer.writerows(['Data 1', 'Data 2', 'Data 3'])  # write report data

    return response


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [IsAdminUserOrReadOnly]



class CartAPI(APIView):
    """
    Single API to handle cart operations
    """
    def get(self, request, format=None):
        cart = Cart(request)

        return Response(
            {"data": list(cart.__iter__()),
             "cart_total_price": cart.get_total_price()},
             status=status.HTTP_200_OK
        )
    
    def post(self, request, **kwargs):
        cart = Cart(request)

        if "remove" in request.data:
            product = request.data["product"]
            cart.remove(product)

        elif "clear" in request.data:
            cart.clear()
        
        else: 
            product = request.data
            cart.add(
                product=product["product"],
                quantity=product["quantity"],
                overide_quantity=product.get("overide_quantity", False) #if "overide_quantity" in product else False
            )
        
        return Response(
            {"message": "Product added to cart successfully", "cart_total_price": cart.get_total_price()},
             status=status.HTTP_202_ACCEPTED)


# class DecimalEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, Decimal):
#             return str(obj)
#         return json.JSONEncoder.default(self, obj)

# class CartAPI(APIView):
#     """
#     Single API to handle cart operations
#     """
#     def get(self, request, format=None):
#         cart = Cart(request)
#         serialized_data = self.serialize_data(cart)
#         cart_total_price = float(cart.get_total_price())

#         # Convert Decimal objects to serializable format within the data
        
#         #serialized_data = list(cart.__iter__())
#         #cart_total_price = float(cart.get_total_price())  # Convert total price to string

#         return JsonResponse(
#             {"data": serialized_data, "cart_total_price": cart_total_price}, 
#             status=status.HTTP_200_OK)
    
#     def serialize_data(self, cart):
#         serialized_data = []
#         for item in cart:
#             serialized_item = {
#                 "quanitity": item["quantity"],
#                 "price": float(item["price"]),
#                 "product": self.serialize_product(item["product"]),
#                 "total_price": float(item["total_price"])
#             }
#             serialized_data.append(serialized_item)
#         return serialized_data
    
#     def serialize_product(self, product):
#         serialized_product = {
#             "id": product["id"],
#             "name": product["name"],
#             "price": float(product["price"]),
#             "image": product["image"],
#             "category": product["category"],
#             "description": product["description"],
            
#             # other fields of the product and convert decimal types
#         }
#         return serialized_product

            
#     def post(self, request, **kwargs):
#         cart = Cart(request)

#         if "remove" in request.data:
#             product = request.data["product"]
#             cart.remove(product)

#         elif "clear" in request.data:
#             cart.clear()
        
#         else: 
#             product = request.data
#             cart.add(
#                 product=product["product"],
#                 quantity=product["quantity"],
#                 overide_quantity=product.get("overide_quantity", False) #if "overide_quantity" in product else False
#             )

#         # After performing the operation, fetch the updated card data
#         updated_cart_data = list(cart)
        
#         return Response(
#             {"message": "Cart updated successfully",
#             "data": updated_cart_data,
#             "cart_total_price": cart.get_total_price()},
#             status=status.HTTP_202_ACCEPTED)








