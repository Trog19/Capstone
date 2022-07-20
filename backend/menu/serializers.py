from rest_framework import serializers
from .models import Menu




class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        restaurant = serializers.IntegerField(write_only=True)
        model = Menu
        fields = ['id', 'restaurant', 'drink', 'description', 'price']
        depth = 1
