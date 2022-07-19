from django.contrib import admin
from django.urls import URLPattern, path, include
from orders import views

urlpatterns = [
    path('', views.get_all_orders),
    path('', views.user_Order)
]