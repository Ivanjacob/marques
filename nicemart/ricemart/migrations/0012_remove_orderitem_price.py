# Generated by Django 4.2.6 on 2023-10-10 14:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ricemart', '0011_orderitem_full_amount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='price',
        ),
    ]