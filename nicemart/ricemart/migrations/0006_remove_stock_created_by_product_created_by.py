# Generated by Django 4.2.4 on 2023-09-28 12:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ricemart', '0005_remove_stock_product_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='created_by',
        ),
        migrations.AddField(
            model_name='product',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='created_stock', to=settings.AUTH_USER_MODEL),
        ),
    ]
