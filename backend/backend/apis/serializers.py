from .models import *
from rest_framework import serializers

class NumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Number
        fields = '__all__'
        
    def validate_number(self, value):
        """
        Check if the number is exactly 10 digits long.
        """
        if len(value) != 10:
            raise serializers.ValidationError("Phone number must be exactly 10 digits long")
        return value