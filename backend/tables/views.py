from msilib.schema import tables
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Table
from .serializers import TableSerializer
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tables(request):
    if request.method == 'GET':
        table = Table.objects.all()
        serializer = TableSerializer(table, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_tables (request, pk):
    table =get_object_or_404(Table, pk=pk)
    if request.method == 'GET':
        serializer = TableSerializer(table)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TableSerializer(table, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        table.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_table (request):
 if request.method == 'POST':
        serializer = TableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)