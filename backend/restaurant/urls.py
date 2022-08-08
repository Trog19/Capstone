from django.contrib import admin
from django.urls import URLPattern, path, include
from restaurant import views

urlpatterns = [
    path('', views.make_restaurant),
    path('all/', views.get_restaurant),
    path('<int:pk>', views.restaurant_detail)
]