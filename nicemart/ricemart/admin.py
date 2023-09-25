from django.contrib import admin
from .models import RiceStock, Product, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


admin.site.register(Product)
admin.site.register(RiceStock)
