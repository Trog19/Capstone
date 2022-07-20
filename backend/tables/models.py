from bisect import insort_right
from django.db import models
from restaurant.models import Restaurant


# Create your models here.

class Table(models.Model):
    Restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)
    Number = models.IntegerField()
    Seats = models.IntegerField()

