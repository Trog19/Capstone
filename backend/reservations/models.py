from django.db import models
from authentication.models import User
from restaurant.models import Restaurant
# Create your models here.

class Reservation(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True,default=None )
    time = models.IntegerField(blank=True, null=True, default=None)
    party_size = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True,default=None )