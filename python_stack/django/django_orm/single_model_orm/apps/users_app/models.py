from django.db import models

# Create your models here
class Users(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email_address = models.EmailField()
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __repr__(self):
        return f"<Users object: {self.first_name} {self.last_name} - ({self.id})>"