from django.db import models
from authentication.models import User

# Create your models here.


class Employee(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


class Customer(models.Model):
    pass
