from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=90)
    desc = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f"Book Object: ID({self.id}) Title({self.title})"

class Author(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    books = models.ManyToManyField(Book, related_name="authors")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f"[Author Object: ID({self.id}) First Name({self.first_name}) Last Name({self.last_name})]"