from django.db import models
from datetime import datetime


class ShowManager(models.Manager):
    def show_validator(self, postData, show_num=0):
        errors = {}

        ##Title > 2 chars (unique)
        if len(postData['form_title']) < 2:
            errors['title'] = "Title must be at least 2 characters."

        shows = Show.objects.exclude(id=show_num)
        # print(shows)
        # print("="*80)
        try:
            temp = shows.get(title=postData['form_title'])
            # print(temp)
            errors['title_unique'] = "Title must be unique."
        except:
            pass

        ##Network > 3 chars
        if len(postData['form_network']) < 3:
            errors['network'] = "Network must be at least 3 characters."

        ##Desc > 10 chars (optional)
        if len(postData['form_description']) > 0 and len(postData['form_description']) < 10:
            errors['desc'] = "Description must be at least 10 characters."

        ##Release date in past
        if datetime.strptime(postData['form_date'], "%Y-%m-%d") > datetime.today():
            errors['release_date'] = "Release date must be in the past." 

        return errors

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=90)
    network = models.CharField(max_length=45)
    release_date = models.DateField()
    desc = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

    def __repr__(self):
        return f"[Show Object: Title({self.title}) ID({self.id})]"

