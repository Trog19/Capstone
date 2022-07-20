from rest_framework import serializers
from .models import Reservation


class ReservationSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    class Meta:
        model = Reservation
        fields = ['id', 'user', 'restaurant_id', 'time', 'party_size']
        depth = 1