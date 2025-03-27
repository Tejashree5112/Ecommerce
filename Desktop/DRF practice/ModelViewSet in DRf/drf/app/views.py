from rest_framework.views import Response
from .serializer import *
from rest_framework.viewsets import ViewSet, ModelViewSet

# Create your views here.

class ProductViewSet(ModelViewSet):
    queryset=ProductModel.objects.all()
    serializer_class=ProductSerializer
    
    
    