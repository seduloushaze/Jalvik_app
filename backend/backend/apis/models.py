from django.db import models

# Create your models here.


class Number(models.Model):
    number = models.CharField(max_length=100, unique=True)
