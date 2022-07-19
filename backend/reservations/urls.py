from django.contrib import admin
from django.urls import URLPattern, path, include
from reservations import views

urlpatterns = [
    path('', views.get_all_reservations),
    path('', views.user_reservation)
]