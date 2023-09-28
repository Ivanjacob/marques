from django.contrib import admin
from .models import RiceStock, Product, Category, Stock


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


admin.site.register(Stock)
admin.site.register(Product)
admin.site.register(RiceStock)
