from django.db import models
from restaurant.models import Restaurant
# Create your models here.


class Menu(models.Model):
    Restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)
    drink = models.CharField(max_length=20)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=50)
