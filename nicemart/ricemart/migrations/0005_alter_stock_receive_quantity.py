# Generated by Django 4.2.4 on 2023-10-06 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0004_remove_product_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='receive_quantity',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
