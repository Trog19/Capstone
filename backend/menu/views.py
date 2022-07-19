from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Menu
from .serializers import MenuSerializer
from django.shortcuts import get_object_or_404

# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def make_restaurant(request):
    if request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        menu = Menu.objects.filter(user_id=request.user.id)
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data)



@api_view(['GET', 'PUT', 'DELETE'])
def menu_detail(request, pk):
    menu =get_object_or_404(Menu, pk=pk)
    if request.method == 'GET':
        serializer = MenuSerializer(menu)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MenuSerializer(menu, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
