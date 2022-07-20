from django.db import models
from authentication.models import User




# Create your models here.

class Restaurant(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    


