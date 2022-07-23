from .models import Table
from rest_framework import serializers




class TableSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    class Meta:
        model = Table
        fields = ['restaurant_id', 'id', 'number', 'seats', 'occupied']
        depth = 1