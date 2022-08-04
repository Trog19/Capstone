from rest_framework import serializers
from .models import Restaurant 



class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'location', 'cuisine', 'info', 'image']
        depth = 1
    
