from tkinter import Menu
from tkinter.messagebox import NO
from django.db import models
from authentication.models import User




# Create your models here.

class Restaurant(models.Model):
    # user=models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=50)
    info = models.CharField(max_length=300)
    image = models.URLField(null=True, blank=True, default=None)
    wait_time = models.IntegerField(null=True, blank=True, default=None)

    


