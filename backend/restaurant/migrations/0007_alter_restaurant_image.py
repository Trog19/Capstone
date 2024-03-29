# Generated by Django 4.1 on 2022-08-05 14:46

from django.db import migrations, models
import restaurant.models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0006_restaurant_wait_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='image',
            field=models.ImageField(blank=True, default=None, null=True, upload_to=restaurant.models.upload_to),
        ),
    ]
