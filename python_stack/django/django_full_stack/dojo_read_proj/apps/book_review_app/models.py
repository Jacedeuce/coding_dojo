from django.db import models
from apps.log_reg_app.models import User, BaseModel

# Create your models here.
class Author(BaseModel):
    name = models.CharField(max_length=90)

class Book(BaseModel):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='books')
    

class Review(BaseModel):
    review = models.TextField()
    rating = models.PositiveIntegerField()
    book = models.ForeignKey(Book, related_name='reviews')
    writer = models.ForeignKey(User, related_name='reviews')