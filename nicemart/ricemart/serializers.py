from rest_framework import serializers
from .models import RiceStock, Product


class RiceStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiceStock
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
