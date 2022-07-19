from datetime import datetime
from django.db import models
from authentication.models import User

# Create your models here.

class Reservation(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True,default=None )
    time = datetime
    party_size = int