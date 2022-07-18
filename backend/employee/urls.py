from django.contrib import admin
from django.urls import path, include
from employee import views

urlpatterns = [
    path('', views.get_all_cars)
   
]





