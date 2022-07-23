from bisect import insort_right
from django.db import models
from restaurant.models import Restaurant
from authentication.models import User


# Create your models here.

class Table(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)
    number = models.IntegerField(null=True)
    seats = models.IntegerField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    occupied = models.BooleanField(default=False)

