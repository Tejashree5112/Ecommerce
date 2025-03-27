from django.db import models

# Create your models here.
class ProductModel(models.Model):
    productname=models.CharField(max_length=200)
    price=models.IntegerField(null=True, blank=True)
    description=models.TextField(max_length=200)
    stock=models.IntegerField()
    photo=models.FileField(upload_to='photo', null=True, blank=True)
    
    
    def __str__(self):
        return f"{self.productname}--{self.price}--{self.description}--{self.stock}"
    