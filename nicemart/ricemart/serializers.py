from rest_framework import serializers
from .models import (
    RiceStock,
    Product,
    Category,
    Stock,
    Order,
    OrderItem,
    FarmerStock,
    QueuePosition,
    MillingRecord,
    Report,
)
from django.contrib.auth.models import User
from rest_framework import permissions


class FarmerStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerStock
        fields = '__all__'


class QueuePositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueuePosition
        fields = '__all__'


class MillingRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MillingRecord
        fields = '__all__'


class RiceStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiceStock
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class StockSerializer(serializers.ModelSerializer):

    # Add fields from the related Product model
    product_name = serializers.CharField(source='product.name', read_only=True)
    product_category = serializers.CharField(
        source='product.category', read_only=True)
    created_by = serializers.CharField(
        source='product.created_by', read_only=True)

    class Meta:
        model = Stock
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    item = serializers.CharField(source='product.name', read_only=True)
    image = serializers.CharField(source='product.image', read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    item_name = serializers.CharField(
        source='order_item.product.name', read_only=True)
    image = serializers.CharField(
        source='order_item.product.image', read_only=True)
    full_amount = serializers.IntegerField(
        source='order_item.full_amount', read_only=True)
    quantity = serializers.IntegerField(
        source='order_item.quantity', read_only=True)
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
