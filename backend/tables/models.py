from django.db import models



# Create your models here.

class Table(models.Model):
    Number = models.IntegerField
    seats = models.IntegerField

