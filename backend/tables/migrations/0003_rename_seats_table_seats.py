# Generated by Django 4.0.4 on 2022-07-20 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tables', '0002_rename_table_table_restaurant'),
    ]

    operations = [
        migrations.RenameField(
            model_name='table',
            old_name='seats',
            new_name='Seats',
        ),
    ]
