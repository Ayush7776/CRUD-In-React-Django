from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ItemSerializer


from .models import Item
class ItemView(viewsets.ModelViewSet):
    
    queryset=Item.objects.all()
    serializer_class= ItemSerializer