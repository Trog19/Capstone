# Generated by Django 4.0.4 on 2022-07-25 18:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0011_rename_table_id_reservation_table'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='table',
            new_name='table_id',
        ),
    ]
