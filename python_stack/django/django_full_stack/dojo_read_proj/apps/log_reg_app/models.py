from django.db import models
from datetime import date, datetime
import re
import bcrypt

from .functions import subtract_years

# Create your models here.
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class UserManager(models.Manager):
    



    # def f_name_validator(self, postData):
    #     errors = {}
    #     if len(postData['first_name']) < 2:
    #         errors['first_name'] = f"{postData['first_name']} is not at least 2 characters."
    #     if errors:
    #         return errors
    
    # def l_name_validator(self, postData):
    #     errors = {}
    #     if len(postData['last_name']) < 2:
    #         errors['last_name'] = f"{postData['last_name']} is not at least 2 characters."
    #     if errors:
    #         return errors
            
    def password_length_validator(self, postData):
        errors = {}
        if len(postData['password']) < 8:
            errors['password'] = "Please enter a password that is at least 8 characters."
        if errors:
            return errors

    def password_match_validator(self, postData):
        errors = {}
        if postData['password'] != postData['confirm']:
            errors['password_match'] = "Passwords do not match"
        if errors:
            return errors


    def email_validator(self, postData):
        errors = {}
        pattern = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
        if not re.fullmatch(pattern, postData['email']):
            errors['email'] = "Please enter a valid email address."
        db_emails = User.objects.filter(email=postData['email'])
        if len(db_emails) > 0:
            errors['unique_email'] = "That email address is already in use."
        if errors:
            return errors

    # def birthdate_validator(self, postData):
    #     errors = {}
    #     bday = postData['birthdate']
    #     today = date.today()
    #     years13 = subtract_years(today, 13)
    #     if datetime.strptime(bday, '%Y-%m-%d').date() > years13:
    #         errors['birthdate'] = f"You must be born before {years13} to register on this site."
    #     if errors:
    #         print(errors)
    #         return errors

    def validate_registration(self, postData):
        errors = {}
        # if self.f_name_validator(postData):
        #     errors.update(self.f_name_validator(postData))
        # if self.l_name_validator(postData):
        #     errors.update(self.l_name_validator(postData))
        if self.email_validator(postData):
            errors.update(self.email_validator(postData))
        if self.password_length_validator(postData):
            errors.update(self.password_length_validator(postData))
        if self.password_match_validator(postData):
            errors.update(self.password_match_validator(postData))
        # if self.birthdate_validator(postData):
        #     errors.update(self.birthdate_validator(postData))
        return errors

class User(BaseModel):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=32)
    # birthdate = models.DateField()

    objects = UserManager()

    def __repr__(self):
        return f"[User Object: Name({self.first_name} {self.last_name}) id({self.id})]"

    def bcrypt_password(self):
        '''
        Hashes password in place from value stored in the user object.
        Only hash once.
        '''
        pw = self.password
        try:
            self.password = bcrypt.hashpw(pw.encode(), bcrypt.gensalt())
        except:
            raise Exception("Password not hashed")

    def auth_pw(self, password):
        '''
        Checks supplied password against the stored hash in the database
        password = plaintext password from POST login
        '''
        if bcrypt.checkpw(password.encode(), self.password.encode()):
            
            return True
        else:
            return False

    def get_books(self):
        '''
        Helper method to traverse and return all books that a user has reviewed.
        '''
        reviews = self.reviews.all()
        reviews = reviews.select_related('book')
        for review in reviews:
            print(review.book.id)
        return books