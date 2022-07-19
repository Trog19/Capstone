from django.urls import path, include
from menu import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('<int:pk>', views.user_menu),
    path('all/', views.get_all_menus),
    path('', views.user_post)
]
