from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
# from django.contrib.auth.models import User, CustomerUser

from api.models import CommonUserFields, User, CustomerUser, FarmerUser, InventoryManagerUser


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


class PaymentStatus(models.Model):
    PENDING = 'Pending'
    PAID = 'Paid'
    PAYMENT_STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (PAID, 'Paid'),
    ]

    name = models.CharField(
        max_length=50,
        choices=PAYMENT_STATUS_CHOICES,
        default=PENDING,
    )

    def __str__(self):
        return self.get_name_display()


class OrderStatus(models.Model):
    PENDING = 'Pending'
    APPROVED = 'Approved'
    SHIPPED = 'Shipped'
    DELIVERED = 'Delivered'
    CANCELLED = 'Cancelled'
    ORDER_STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (SHIPPED, 'Shipped'),
        (DELIVERED, 'Delivered'),
        (CANCELLED, 'Cancelled'),
    ]

    name = models.CharField(
        max_length=50,
        choices=ORDER_STATUS_CHOICES,
        default=PENDING,
    )

    def __str__(self):
        return self.get_name_display()


class PaymentMethod(models.Model):
    MPESA = 'Mpesa'
    AIRTELMONEY = 'Airtel Money'
    PAYMENT_METHOD_CHOICES = [
        (MPESA, 'Mpesa'),
        (AIRTELMONEY, 'Airtel Money'),
    ]

    name = models.CharField(
        max_length=50,
        choices=PAYMENT_METHOD_CHOICES,
        default=MPESA,
    )

    def __str__(self):
        return self.get_name_display()


class Product(models.Model):
    name = models.CharField(max_length=50, blank=True,
                            null=True, default='', unique=True)
    category = models.CharField(
        max_length=50, choices=Category.CATEGORY_CHOICES, blank=True, null=True, default='MWEA_PISHORI')
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)  # New field for URL input
    description = models.CharField(max_length=50, blank=True, null=True)
    price = models.IntegerField(default=0, blank=True, null=True)
    quantity_in_stock = models.IntegerField(default=0, blank=True, null=True)
    rating = models.IntegerField(default=0, blank=True, null=True)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='created_products', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} - {self.category} - {self.description} - KSh.{self.price} - {self.created_by}'


@receiver(post_save, sender=Product)
def update_created_by(sender, instance, created, **kwargs):
    if created:
        instance.created_by = instance.created_by
        instance.save()


class Stock(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, default='', null=True, blank=True)
    quantity_in_stock = models.PositiveBigIntegerField(default=0)
    receive_quantity = models.IntegerField(default=0, blank=True, null=True)
    added_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='added_by', default='', null=True, blank=True)
    receive_by = models.ForeignKey(
        InventoryManagerUser, on_delete=models.CASCADE, related_name='received_stock', default='', null=True, blank=True)
    issue_quantity = models.IntegerField(default=0)
    issue_by = models.ForeignKey(
        InventoryManagerUser, on_delete=models.CASCADE, related_name='issued_stock', default='', null=True, blank=True)
    issue_to = models.ForeignKey(
        CustomerUser, on_delete=models.CASCADE, related_name='issue_to', default='', null=True, blank=True)
    reorder_level = models.PositiveBigIntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)
    export_to_CSV = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.product.name} - {self.product.category} - {self.quantity_in_stock} - {self.product.created_by}'


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


class OrderItem(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, default='', null=True, blank=True)
    quantity = models.IntegerField(default=0, blank=True, null=True)
    total_price = models.IntegerField(
        default=0, blank=True, null=True)  # quantity * price
    shipping_cost = models.IntegerField(default=0, blank=True, null=True)
    full_amount = models.IntegerField(default=0, blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def calculate_total_price(self):
        if self.quantity is not None:
            # Get the price from the related Product instance
            product_price = self.product.price
            if product_price is not None:
                self.total_price = self.quantity * product_price
            else:
                self.total_price = 0
        else:
            self.total_price = 0

    def calculate_full_amount(self):
        if self.total_price is not None and self.shipping_cost is not None:
            self.full_amount = self.total_price + self.shipping_cost
        else:
            self.full_amount = 0

    def save(self, *args, **kwargs):
        self.calculate_total_price()
        self.calculate_full_amount()
        super(OrderItem, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.product.name} - {self.quantity} - {self.total_price} - {self.shipping_cost} - {self.full_amount}'


class Order(models.Model):
    order_number = models.CharField(max_length=50, blank=True, null=True)
    order_item = models.ForeignKey(
        OrderItem, on_delete=models.CASCADE, default='', null=True, blank=True)
    customer = models.CharField(max_length=50, blank=True, null=True)
    order_status = models.CharField(
        max_length=50, choices=OrderStatus.ORDER_STATUS_CHOICES, blank=True, null=True, default='Pending')
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_address = models.CharField(max_length=50, blank=True, null=True)
    payment_method = models.CharField(
        max_length=50, choices=PaymentMethod.PAYMENT_METHOD_CHOICES, blank=True, null=True, default='Mpesa')
    payment_status = models.CharField(
        max_length=50, choices=PaymentStatus.PAYMENT_STATUS_CHOICES, blank=True, null=True, default='Pending')

    def __str__(self):
        return f'{self.order_number} - {self.order_item} - {self.customer} - {self.order_status} - {self.delivery_address}'
    
    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.full_amount for item in orderitems])
        return total
    
    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total


class ShippingAddress(models.Model):
    customer = models.ForeignKey(CustomerUser, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, blank=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    town = models.CharField(max_length=50, blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address





# class Cart(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, default='', null=True, blank=True)
#     quantity = models.PositiveIntegerField(default=1)
#     user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE, default='', null=True, blank=True)
#     date_added = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.user.username}'s - {self.product.name} - {self.date_added}"






















class FarmerStock(models.Model):
    farmer = models.ForeignKey(
        FarmerUser, on_delete=models.CASCADE, default='', null=True, blank=True)
    quantity_stocked = models.IntegerField(default=0, blank=True, null=True)
    date_stocked = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.farmer.username} - {self.quantity_stocked} - {self.date_stocked}'


class QueuePosition(models.Model):
    farmer = models.ForeignKey(
        FarmerUser, on_delete=models.CASCADE, default='', null=True, blank=True)
    date_booked = models.DateField(auto_now_add=True)
    is_milled = models.BooleanField(default=False)


class MillingRecord(models.Model):
    farmer = models.ForeignKey(
        FarmerUser, on_delete=models.CASCADE, default='', null=True, blank=True)
    quantity_milled = models.PositiveIntegerField(
        default=0, blank=True, null=True)
    date_milled = models.DateField(auto_now_add=True)
    quantity_remaining = models.PositiveIntegerField(
        default=0, blank=True, null=True)


class Report(models.Model):
    report_type = models.CharField(max_length=50)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='created_report', default='', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='reports/', blank=True, null=True)

    def __str__(self):
        return f"{self.report_type} - {self.created_by} - {self.created_at} - {self.file}"
