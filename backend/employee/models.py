from django.db import models
from authentication.models import User
from restaurant.models import Restaurant
# Create your models here.


class Employee(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True,default=None )



