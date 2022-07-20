# Generated by Django 4.0.4 on 2022-07-20 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0002_reservation_restaurant'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='party_size',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='reservation',
            name='time',
            field=models.DateTimeField(null=True),
        ),
    ]
