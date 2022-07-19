from django.db import models
from restaurant.models import Restaurant
# Create your models here.


class Menu(models.Model):
    Restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)
    drink = models.CharField(max_length=20)
    price = models.DecimalField(decimal_places=2, max_digits=4)
    description = models.CharField(max_length=50)
