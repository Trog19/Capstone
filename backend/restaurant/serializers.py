from rest_framework import serializers
from .models import Restaurant 



class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'first_name', 'last_name', 'user_id']
        depth = 1
    