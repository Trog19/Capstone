from rest_framework import serializers

from backend.restaurant.serializers import RestaurantSerializer
from .models import Menu
from restaurant import serializers



class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        restaurant_id = RestaurantSerializer.IntegerField(write_only=True)
        model = Menu
        fields = ['id', restaurant_id, 'drink', 'description', 'price']
        depth = 1
