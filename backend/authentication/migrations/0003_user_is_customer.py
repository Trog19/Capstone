# Generated by Django 4.0.4 on 2022-07-26 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_is_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_customer',
            field=models.BooleanField(default=True, verbose_name='customer status'),
        ),
    ]
