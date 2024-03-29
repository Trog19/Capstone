from rest_framework import serializers
from .models import Restaurant 



class RestaurantSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'location', 'cuisine', 'info', 'image', 'wait_time']
        depth = 1
    
