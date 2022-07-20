from django.contrib import admin
from django.urls import path, include
from customer import views  

urlpatterns =[
    path('', views.make_profile),
    path('<int:pk>', views.get_profile)
]