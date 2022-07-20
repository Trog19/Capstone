from django.contrib import admin
from django.urls import URLPattern, path, include
from orders import views

urlpatterns = [
    path('all/', views.get_all_orders),
    path('<int:pk>', views.user_Order)
]