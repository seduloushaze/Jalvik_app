from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('check_number/', CheckNumberView.as_view(), name='check_number'),
]