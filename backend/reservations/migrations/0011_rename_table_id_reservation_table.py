# Generated by Django 4.0.4 on 2022-07-25 18:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0010_reservation_accepted'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='table_id',
            new_name='table',
        ),
    ]