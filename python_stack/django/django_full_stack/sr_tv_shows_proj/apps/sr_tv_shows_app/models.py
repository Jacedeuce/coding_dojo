from django.db import models

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=90)
    network = models.CharField(max_length=45)
    release_date = models.DateField()
    desc = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)