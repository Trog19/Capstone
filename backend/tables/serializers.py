from .models import Table
from rest_framework import serializers




class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ['table', 'id', 'number', 'seats']
        depth = 1