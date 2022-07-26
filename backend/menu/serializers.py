from rest_framework import serializers
from .models import Menu




class MenuSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    class Meta:
        model = Menu
        fields = ['id', 'restaurant_name', 'drink', 'description', 'price']
        depth = 1
    

