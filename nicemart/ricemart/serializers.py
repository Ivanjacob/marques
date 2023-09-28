from rest_framework import serializers
from .models import RiceStock, Product, Category, Stock
from django.contrib.auth.models import User


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
    product_quantity_in_stock = serializers.CharField(
        source='product.quantity_in_stock', read_only=True)
    created_by = serializers.CharField(
        source='product.created_by', read_only=True)

    class Meta:
        model = Stock
        fields = '__all__'

        # fields = ['id', 'product', 'product_details', 'quantity', 'receive_by_details', 'issue_quantity',
        #         'issue_by', 'issue_by_details', 'issue_to', 'created_by_details', 'reorder_level', 'last_updated']
        # read_only_fields = ['product_details', 'receive_by_details',
        #                  'issue_by_details', 'created_by_details']
