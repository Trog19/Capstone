# Generated by Django 4.0.4 on 2022-08-04 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0005_restaurant_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='wait_time',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]
