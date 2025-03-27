from rest_framework import serializers
from .models import *

# Serializers for getting the overall data without using id 
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductModel
        fields='__all__'


# Serializers for getting data using id;
class ProductSerializerById(serializers.ModelSerializer):
    class Meta:
        model=ProductModel
        fields='__all__'
        
