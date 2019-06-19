## Login_reg_app models.py ##
from django.db import models
from apps.login_reg_app.models import User, BaseModel

class BookManager(models.Manager):


    def validate_title(self, postData):
        title=postData['title']
        errors = {}
        if len(title) == 0:
            errors['title'] = "Title is required."
        if errors:
            return errors
    
    def validate_desc(self, postData):
        errors = {}
        if len(postData['desc']) < 5:
            errors['desc'] = 'Description must be at least 5 characters'
        if errors:
            return errors

    def validate_add_book(self, postData):
        errors = {}
        if self.validate_title(postData):
            errors.update(self.validate_title(postData))
        if self.validate_desc(postData):
            errors.update(self.validate_desc(postData))
        return errors
        

class Book(BaseModel):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    uploaded_by = models.ForeignKey(User)
    favorited_by = models.ManyToManyField(User, related_name='favorites') 
    # https://stackoverflow.com/questions/5674968/django-query-to-get-users-favorite-posts
    
    objects = BookManager()

    def __repr__(self):
        return f"[Book object: Book_ID({self.id}) Title({self.title}) Uploaded By({self.uploaded_by})]"
