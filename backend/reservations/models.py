from django.db import models
from authentication.models import User
from restaurant.models import Restaurant
from tables.models import Table
# Create your models here.

class Reservation(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, default=None )
    time = models.IntegerField(blank=True, null=True, default=None)
    party_size = models.IntegerField(null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True,default=None )
    table = models.ForeignKey(Table, on_delete=models.CASCADE, blank=True, null=True, default=None )
    check_in = models.BooleanField(blank=True, default=False)
    accepted = models.BooleanField(blank=True, default=False)
    user_name= models.CharField(max_length=50)