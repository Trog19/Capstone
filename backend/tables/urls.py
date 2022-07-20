from django.contrib import admin
from django.urls import URLPattern, path, include
from tables import views

urlpatterns = [
    path('all/', views.get_all_tables),
    path('<int:pk>', views.user_tables),
    path('', views.add_table)
]