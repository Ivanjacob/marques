# Generated by Django 4.2.6 on 2023-10-17 23:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Basmati', 'Basmati'), ('Mwea Pishori', 'Mwea Pishori'), ('Jasmine Rice', 'Jasmine Rice'), ('Biryani Rice', 'Biryani Rice')], default='Mwea Pishori', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='OrderStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Shipped', 'Shipped'), ('Delivered', 'Delivered'), ('Cancelled', 'Cancelled')], default='Pending', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Mpesa', 'Mpesa'), ('Airtel Money', 'Airtel Money')], default='Mpesa', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Pending', 'Pending'), ('Paid', 'Paid')], default='Pending', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='', max_length=50, null=True, unique=True)),
                ('category', models.CharField(blank=True, choices=[('Basmati', 'Basmati'), ('Mwea Pishori', 'Mwea Pishori'), ('Jasmine Rice', 'Jasmine Rice'), ('Biryani Rice', 'Biryani Rice')], default='MWEA_PISHORI', max_length=50, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('description', models.CharField(blank=True, max_length=50, null=True)),
                ('price', models.IntegerField(blank=True, default=0, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_by', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='created_products', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RiceStock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('item_name', models.CharField(blank=True, max_length=50, null=True)),
                ('quantity', models.IntegerField(blank=True, default=0, null=True)),
                ('receive_quantity', models.IntegerField(blank=True, default=0, null=True)),
                ('receive_by', models.CharField(blank=True, max_length=50, null=True)),
                ('issue_quantity', models.IntegerField(blank=True, default=0, null=True)),
                ('issue_by', models.CharField(blank=True, max_length=50, null=True)),
                ('issue_to', models.CharField(blank=True, max_length=50, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=50, null=True)),
                ('created_by', models.CharField(blank=True, max_length=50, null=True)),
                ('reorder_level', models.IntegerField(blank=True, default=0, null=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('export_to_CSV', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity_in_stock', models.PositiveBigIntegerField(default=0)),
                ('receive_quantity', models.IntegerField(blank=True, default=0, null=True)),
                ('issue_quantity', models.IntegerField(default=0)),
                ('reorder_level', models.PositiveBigIntegerField(default=0)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('export_to_CSV', models.BooleanField(default=False)),
                ('added_by', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='added_by', to=settings.AUTH_USER_MODEL)),
                ('issue_by', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='issued_stock', to='api.inventorymanageruser')),
                ('issue_to', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='issue_to', to='api.customeruser')),
                ('product', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='ricemart.product')),
                ('receive_by', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='received_stock', to='api.inventorymanageruser')),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_type', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='reports/')),
                ('created_by', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='created_report', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='QueuePosition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_booked', models.DateField(auto_now_add=True)),
                ('is_milled', models.BooleanField(default=False)),
                ('farmer', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.farmeruser')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(blank=True, default=0, null=True)),
                ('total_price', models.IntegerField(blank=True, default=0, null=True)),
                ('shipping_cost', models.IntegerField(blank=True, default=0, null=True)),
                ('full_amount', models.IntegerField(blank=True, default=0, null=True)),
                ('product', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='ricemart.product')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_number', models.CharField(blank=True, max_length=50, null=True)),
                ('customer', models.CharField(blank=True, max_length=50, null=True)),
                ('order_status', models.CharField(blank=True, choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Shipped', 'Shipped'), ('Delivered', 'Delivered'), ('Cancelled', 'Cancelled')], default='Pending', max_length=50, null=True)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('delivery_address', models.CharField(blank=True, max_length=50, null=True)),
                ('payment_method', models.CharField(blank=True, choices=[('Mpesa', 'Mpesa'), ('Airtel Money', 'Airtel Money')], default='Mpesa', max_length=50, null=True)),
                ('payment_status', models.CharField(blank=True, choices=[('Pending', 'Pending'), ('Paid', 'Paid')], default='Pending', max_length=50, null=True)),
                ('order_item', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='ricemart.orderitem')),
            ],
        ),
        migrations.CreateModel(
            name='MillingRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity_milled', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('date_milled', models.DateField(auto_now_add=True)),
                ('quantity_remaining', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('farmer', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.farmeruser')),
            ],
        ),
        migrations.CreateModel(
            name='FarmerStock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity_stocked', models.IntegerField(blank=True, default=0, null=True)),
                ('date_stocked', models.DateTimeField(auto_now_add=True)),
                ('farmer', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.farmeruser')),
            ],
        ),
    ]
