from django.db import models

# Create your models here.


class Products(models.Model):
    code = models.CharField(max_length=25, blank=False)
    name = models.CharField(max_length=25, blank=False)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=250)
    image = models.ImageField(upload_to='uploads/products/')

    #image = models.ImageField(upload_to='media/products/')

    #price = models.IntegerField(max_length=25, blank=False)
    #image = models.ImageField(max_length=25, blank=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name', )
