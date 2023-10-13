from django.contrib import admin
from .models import (
    RiceStock,
    Product, Category, Stock, Order,
    OrderItem, PaymentMethod, PaymentStatus, OrderStatus, FarmerStock,
    QueuePosition, MillingRecord,
)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(PaymentMethod)
class PaymentMethodAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(PaymentStatus)
class PaymentStatusAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(OrderStatus)
class OrderStatusAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(FarmerStock)
class FarmerStockAdmin(admin.ModelAdmin):
    list_display = ('farmer', 'quantity_stocked', 'date_stocked')


admin.site.register(MillingRecord)
admin.site.register(QueuePosition)
admin.site.register(Stock)
admin.site.register(Product)
admin.site.register(RiceStock)
admin.site.register(Order)
admin.site.register(OrderItem)
