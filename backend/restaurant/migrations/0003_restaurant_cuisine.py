# Generated by Django 4.0.4 on 2022-07-26 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_remove_restaurant_menu'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='cuisine',
            field=models.CharField(default='American', max_length=50),
            preserve_default=False,
        ),
    ]