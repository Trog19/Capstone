from datetime import datetime
from tkinter import CASCADE
from django.db import models
from authentication.models import User

# Create your models here.

class Reservation(models.Model):
    user=models.ForeignKey(User, on_delete=CASCADE)
    time = datetime
    party_size = int