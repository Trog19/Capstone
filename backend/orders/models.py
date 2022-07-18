from tkinter import CASCADE
from django.db import models
from authentication.models import User
from tables.models import Table
from reservations.models import Reservation
# Create your models here.


class Order(models.Model):
    user=models.ForeignKey(User, on_delete=CASCADE)
    table = models.ForeignKey(Table, on_delete= None)
    reservation = models.ForeignKey(Reservation, on_delete= CASCADE)
    order = models.CharField(max_length=150)