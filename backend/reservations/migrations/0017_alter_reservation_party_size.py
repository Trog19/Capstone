# Generated by Django 4.0.4 on 2022-07-27 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0016_alter_reservation_accepted_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='party_size',
            field=models.IntegerField(null=True),
        ),
    ]