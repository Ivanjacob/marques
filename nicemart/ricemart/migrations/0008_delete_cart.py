# Generated by Django 4.2.6 on 2023-11-27 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0007_orderitem_date_added_shippingaddress'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Cart',
        ),
    ]