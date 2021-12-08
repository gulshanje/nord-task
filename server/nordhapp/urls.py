from django.contrib import admin
from django.urls import path
from nordhapp import views
urlpatterns = [

    path("",views.ListProductAPIView.as_view(),name="getProduct"),
    path("create/", views.CreateProductAPIView.as_view(),name="createProduct"),
    path("update/<int:pk>/",views.UpdateProductAPIView.as_view(),name="updateProduct"),
    path("delete/<int:pk>/",views.DeleteProductAPIView.as_view(),name="deleteProduct")
]
