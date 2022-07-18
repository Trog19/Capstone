from django.contrib import admin
from django.urls import URLPattern, path, include
from restaurant import views

urlpatterns = [
    path('', views.get_restaurant)
]