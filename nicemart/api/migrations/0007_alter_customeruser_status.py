# Generated by Django 4.2.6 on 2023-10-11 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_customeruser_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeruser',
            name='status',
            field=models.CharField(choices=[('Active', 'Active'), ('Inactive', 'Inactive')], default='Active', max_length=10),
        ),
    ]
