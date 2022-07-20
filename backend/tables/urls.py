from django.contrib import admin
from django.urls import URLPattern, path, include
from tables import views

urlpatterns = [
    path('', views.get_all_tables),
    path('', views.user_table)
]