from django.db import models
from django import forms

# Create your models here.
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True, db_index=True)

    class Meta:
        abstract = True

class User(BaseModel):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=32)
    birthdate = models.DateField()
    
    USERNAME_FIELD = 'email'


    def __repr__(self):
        return f"[User Object: Name({self.first_name} {self.last_name}) id({self.id})]"