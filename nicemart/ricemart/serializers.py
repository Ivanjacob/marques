from rest_framework import serializers
from .models import RiceStock


class RiceStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiceStock
        fields = '__all__'
