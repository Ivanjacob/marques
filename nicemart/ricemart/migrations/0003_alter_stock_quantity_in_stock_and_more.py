# Generated by Django 4.2.4 on 2023-10-01 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0002_rename_quantity_stock_quantity_in_stock_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='quantity_in_stock',
            field=models.PositiveBigIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='stock',
            name='reorder_level',
            field=models.PositiveBigIntegerField(default=0),
        ),
    ]