from django.contrib import admin
from django.urls import URLPattern, path, include
from reservations import views

urlpatterns = [
    path('all/', views.get_all_reservations),
    path('<int:pk>', views.edit_reservation),
    path('', views.make_reservation)
]