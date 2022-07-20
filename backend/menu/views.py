from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Menu
from .serializers import MenuSerializer
from django.shortcuts import get_object_or_404

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_menus(request):
    if request.method == 'GET':
        menu = Menu.objects.all()
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_menu (request, pk):
    menu =get_object_or_404(Menu, pk=pk)
    if request.method == 'GET':
        serializer = MenuSerializer(menu)
    elif request.method == 'PUT':
        serializer = MenuSerializer(menu, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_post (request):
    if request.method == 'POST' :
        serializers = MenuSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)