# Generated by Django 4.2.6 on 2023-11-21 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0004_product_image_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]