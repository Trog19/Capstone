from rest_framework import serializers

from authentication.serializers import RegistrationSerializer
from .models import Reservation


class ReservationSerializer(serializers.ModelSerializer):
    restaurant_id = serializers.IntegerField()
    table_id =serializers.IntegerField()
    class Meta:
        model = Reservation
        fields = ['id', 'user', 'restaurant_id', 'time', 'party_size', 'check_in', 'table_id', 'accepted', 'last_name']
        depth = 1