from .models import Employee
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import EmployeeSerializer


# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_employees(request):
    employee = Employee.objects.all()
    serializer = EmployeeSerializer(employee, many=True)
    return Response(serializer.data)
