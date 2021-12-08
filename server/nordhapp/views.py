from django.shortcuts import render

# Create your views here.

from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView

from nordhapp.serializers import ProductsSerializer
from nordhapp.models import Products

class ListProductAPIView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class CreateProductAPIView(CreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class UpdateProductAPIView(UpdateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class DeleteProductAPIView(DestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer