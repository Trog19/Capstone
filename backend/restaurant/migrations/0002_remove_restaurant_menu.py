# Generated by Django 4.0.4 on 2022-07-19 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='menu',
        ),
    ]