from django.contrib import admin
from django.urls import path
from .views import *
from . import views

from rest_framework import routers
router=routers.DefaultRouter()
router.register("prodapi", views.ProductViewSet, basename='product')

urlpatterns = router.urls