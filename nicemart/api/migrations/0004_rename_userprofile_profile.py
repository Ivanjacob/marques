# Generated by Django 4.2.4 on 2023-09-15 13:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_user_phone'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserProfile',
            new_name='Profile',
        ),
    ]
