from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.utils import timezone # for datetime compare because datetime.datetime.now() is not timezone aware
from datetime import timedelta 

from apps.login_reg_app.models import User
from .models import Message, Comment

# Create your views here.
def the_wall(request):
    for key, value in request.session.items():
        print(key, "======", value)
    try:
        user = User.objects.get(id=request.session['userid'])
    except:
        messages.error(request, 'You forgot to log in.')
        return redirect('/')

    try: 
        user_messages = Message.objects.all().order_by('-created_at')
    except:
        user_messages = ["There aren't any messages yet."]
    
    current_time_minus_30 = timezone.now() - timedelta(minutes=30)
    print("%"*80)
    print(current_time_minus_30)
    context = {
        "time_for_del" : current_time_minus_30,
        "username" : f"{user.first_name} {user.last_name}",
        "first_name" : user.first_name,
        "user_messages" : user_messages,
    }
    return render(request, "the_wall_app/the_wall.html", context = context)


def add_message(request):
    if request.method=='POST':
        text = request.POST['message_text']
        userid = request.session['userid']
        user = User.objects.get(id=userid)
        message = Message.objects.create(message=text, user=user)
        messages.success(request, "Message posted!")

    return redirect('/the_wall')

def add_comment(request):
    if request.method=='POST':
        text = request.POST['comment_text']
        userid=request.session['userid']
        user = User.objects.get(id=userid)
        messageid = request.POST['user_message_id']
        message = Message.objects.get(id=messageid)
        comment = Comment.objects.create(comment=text, user=user, message=message)
    print("comment added")
    return redirect('/the_wall')

def del_message(request, message_id):
    userid=request.session['userid']
    user = User.objects.get(id=userid)
    messageid = message_id
    message = Message.objects.get(id=messageid)

    current_time_minus_30 = timezone.now() - timedelta(minutes=30)

    if message.created_at > current_time_minus_30 and message.user.id == userid:
        message.delete()
        messages.success(request, 'Message deleted')
    elif message.user.id != userid:
        messages.error(request, "That's not your message.")
    else:
        messages.error(request, "That message is too old to delete.")
    return redirect('/the_wall')