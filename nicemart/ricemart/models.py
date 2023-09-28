from django.db import models
from django.contrib.auth.models import AbstractUser

from api.models import CommonUserFields, User


class Category(models.Model):
    BASMATI = 'Basmati'
    MWEA_PISHORI = 'Mwea Pishori'
    JASMINE_RICE = 'Jasmine Rice'
    BIRYANI_RICE = 'Biryani Rice'

    CATEGORY_CHOICES = [
        (BASMATI, 'Basmati'),
        (MWEA_PISHORI, 'Mwea Pishori'),
        (JASMINE_RICE, 'Jasmine Rice'),
        (BIRYANI_RICE, 'Biryani Rice'),
    ]

    name = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default=MWEA_PISHORI,
    )

    def __str__(self):
        return self.get_name_display()


class Product(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True, default='')
    category = models.CharField(
        max_length=50, choices=Category.CATEGORY_CHOICES, blank=True, null=True, default='MWEA_PISHORI')
    description = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default=0, blank=True, null=True)
    price = models.IntegerField(default=0, blank=True, null=True)
    quantity_in_stock = models.IntegerField(default=0, blank=True, null=True)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='created_stock', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} - {self.category} - {self.description} - {self.quantity} - KSh.{self.price} - {self.quantity_in_stock} - {self.created_by}'


class RiceStock(models.Model):
    category = models.CharField(max_length=50, blank=True, null=True)
    item_name = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default=0, blank=True, null=True)
    receive_quantity = models.IntegerField(default=0, blank=True, null=True)
    receive_by = models.CharField(max_length=50, blank=True, null=True)
    issue_quantity = models.IntegerField(default=0, blank=True, null=True)
    issue_by = models.CharField(max_length=50, blank=True, null=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default=0, blank=True, null=True)
    last_updated = models.DateTimeField(auto_now=True)
    export_to_CSV = models.BooleanField(default=False)

    def __str__(self):
        return self.item_name


class Stock(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    receive_quantity = models.IntegerField(default=0)
    receive_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='received_stock', null=True, blank=True)
    issue_quantity = models.IntegerField(default=0)
    issue_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='issued_stock', null=True, blank=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)
    export_to_CSV = models.BooleanField(default=False)

    def __str__(self):
        # - {self.quantity} - {self.receive_quantity} - {self.receive_by} - {self.issue_quantity} - {self.issue_by} - {self.issue_to} - {self.reorder_level} - {self.last_updated}'
        return f'{self.product.name} - {self.product.category} - {self.product.quantity_in_stock} - {self.product.created_by}'
