from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import *
# Create your views here.

#to save number if it didn't exist

class CheckNumberView(APIView):
    def post(self, request):
        serializer = NumberSerializer(data=request.data)
        if serializer.is_valid():
            number = serializer.validated_data['number']
            if Number.objects.filter(number=number).exists():
                return Response({"message": "Number already exists"}, status=status.HTTP_200_OK)
            else:
                Number.objects.create(number=number)
                return Response({"message": "Number saved successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  
        

