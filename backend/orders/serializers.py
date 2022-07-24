from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    class Meta:
        model = Order
        fields = ['user', 'restaurant_id', 'table', 'reservation', 'drinks']
        depth = 1