from django.db import models
from apps.login_reg_app.models import User, BaseModel
# Create your models here.


class MessageManager(models.Manager):
    def message_edit(self, text):
        self.message = text
        self.save()

class Message(BaseModel):
    message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    objects = MessageManager()
    
    def __repr__(self):
        return f"[Message object: Message_ID({self.id}) User_ID({self.user})]"

class Comment(BaseModel):
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)

    def __repr__(self):
        return f"[Comment object: Comment_ID({self.id}) Message_ID({self.message}) User_ID({self.user})]"
