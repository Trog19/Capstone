from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Restaurant
from .serializers import RestaurantSerializer
from django.shortcuts import get_object_or_404
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_restaurant(request):
    restaurant = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurant, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def make_restaurant(request):
    if request.method == 'POST':
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def restaurant_detail(request, pk):
    restaurant =get_object_or_404(Restaurant, pk=pk)
    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RestaurantSerializer(restaurant, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        restaurant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)