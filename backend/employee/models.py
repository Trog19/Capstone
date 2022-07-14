from django.db import models

# Create your models here.


class Employee(models.Models):
    user=models.ForeignKey( on_delete=models.CASCADE)