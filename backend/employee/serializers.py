from rest_framework import serializers
from .models import Employee

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class EmployeeSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    class Meta:
        model = Employee
        fields = ['id', 'restaurant_id', 'first_name', 'last_name', 'email']
        depth = 1
