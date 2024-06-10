
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemView

router = DefaultRouter()
router.register(r'items', ItemView)

urlpatterns = [
    path('', include(router.urls)),
]
