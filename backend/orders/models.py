from operator import truediv
from tkinter import CASCADE
from django.db import models
from authentication.models import User
from tables.models import Table
from reservations.models import Reservation
from restaurant.models import Restaurant
from menu.models import Menu
# Create your models here.


class Order(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True,default=None)
    table = models.ForeignKey(Table, on_delete=models.CASCADE, blank=True, null=True,default=None)
    reservation = models.ForeignKey(Reservation, on_delete= models.CASCADE, blank=True, null=True,default=None)
    drinks = models.ForeignKey(Menu, on_delete= models.CASCADE, blank=True, null=True,default=None)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True,default=None )
