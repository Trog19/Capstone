from django.db import models

# Create your models here.


class Menu(models.Model):
    drink = models.CharField(max_length=20)
    price = models.IntegerField
    description = models.CharField(max_length=50)
