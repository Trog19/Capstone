# Generated by Django 4.0.4 on 2022-07-20 17:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tables', '0004_table_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='table',
            name='Number',
        ),
    ]
