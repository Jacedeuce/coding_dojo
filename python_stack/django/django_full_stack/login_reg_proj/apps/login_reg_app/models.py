from django.db import models
from datetime import date, datetime
import re
import bcrypt

from .functions import subtract_years

# Create your models here.
class BaseModel(models.Model):
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True

class UserManager(models.Manager):
    def f_name_validator(self, postData):
        errors = {}
        if len(postData['first_name']) < 2:
            errors['first_name'] = f"{postData['first_name']} is not at least 2 characters."
        if errors:
            return errors
    
    def l_name_validator(self, postData):
        errors = {}
        if len(postData['last_name']) < 2:
            errors['last_name'] = f"{postData['last_name']} is not at least 2 characters."
        if errors:
            return errors
            
    def password_validator(self, postData):
        errors = {}
        if len(postData['password']) < 8:
            errors['password'] = "Pleaes enter a password that is at least 8 characters."
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

    def birthdate_validator(self, postData):
        errors = {}
        bday = postData['birthdate']
        today = date.today()
        years13 = subtract_years(today, 13)
        if datetime.strptime(bday, '%Y-%m-%d').date() > years13:
            errors['birthdate'] = f"You must be born before {years13} to register on this site."
        if errors:
            print(errors)
            return errors

    def validate_registration(self, postData):
        errors = {}
        if self.f_name_validator(postData):
            errors.update(self.f_name_validator(postData))
        if self.l_name_validator(postData):
            errors.update(self.l_name_validator(postData))
        if self.email_validator(postData):
            errors.update(self.email_validator(postData))
        if self.password_validator(postData):
            errors.update(self.password_validator(postData))
        if self.birthdate_validator(postData):
            errors.update(self.birthdate_validator(postData))
        return errors

class User(BaseModel):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=32)
    birthdate = models.DateField()

    objects = UserManager()

    def __repr__(self):
        return f"[User Object: Name({self.first_name} {self.last_name}) id({self.id})]"

    def bcrypt_password(self):
        pw = self.password
        try:
            self.password = bcrypt.hashpw(pw.encode(), bcrypt.gensalt())
        except:
            raise Exception("Password not hashed")
            
        # Carver325@ameritech.net - greghanna
        
    
    # def validate_login(request):
    #     user = User.objects.get(email=request.POST['email'])  # hm...is it really a good idea to use the get method here?
    #     if bcrypt.checkpw(request.POST['password'].encode(), user.pw_hash.encode()):
    #         print("password match")
    #     else:
    #         print("failed password")