# Generated by Django 4.2.4 on 2023-10-01 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0003_alter_stock_quantity_in_stock_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='quantity',
        ),
    ]
