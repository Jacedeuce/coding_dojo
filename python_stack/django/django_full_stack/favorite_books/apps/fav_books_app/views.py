from django.shortcuts import render, redirect
from django.contrib import messages

from apps.login_reg_app.models import User
from .models import Book

# Create your views here.
def books(request):
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        return redirect("/accounts")
    books = Book.objects.all()

    context = {
        'books' : books,
        'user' : user
    }
    return render(request, 'fav_books_app/book.html', context)

def add_book(request):
    if request.method == 'POST':
        errors = Book.objects.validate_add_book(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)

            return redirect('/books/')

        title, desc = request.POST['title'], request.POST['desc']
        logged_user = request.session['userid']
        user = User.objects.get(id=logged_user)
        newbook = Book.objects.create(title=title, desc=desc, uploaded_by_id=logged_user)
        return redirect('/books/')

def book_view(request, booknum):
    book=Book.objects.get(id=booknum)
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        return redirect("/accounts")
    
    users_book=False
    if book.uploaded_by_id == user.id:
        users_book=True
    context = {
        'user' : user,
        'users_book' : users_book,
        'book' : book
    }
    return render(request, 'fav_books_app/book_view.html', context)

def add_favorite(request, booknum):
    book = Book.objects.get(id=booknum)
    user = User.objects.get(id=request.session['userid'])
    book.favorited_by.add(user)
    messages.success(request, 'Book added to your favorites.')
    return redirect('/books/')

def delete_book(request, booknum):
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        return redirect("/accounts")
    book=Book.objects.get(id=booknum)
    if request.session['userid'] == book.uploaded_by_id:
        book.delete()
        messages.success(request, 'Book deleted successfully!')
    return redirect('/books')

def remove_favorite(request, booknum):
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        return redirect("/accounts")
    book=Book.objects.get(id=booknum)

    if user in book.favorited_by.all():
        book.favorited_by.remove(user)
        messages.success(request, 'Book removed from your favorites.')
    return redirect('/books')

def update_book(request, booknum):
    if request.method=='POST':
        try:
            user=User.objects.get(id=request.session['userid'])
        except:
            return redirect("/accounts")
        book=Book.objects.get(id=booknum)

        book.title = request.POST['title']
        book.desc = request.POST['desc']
        book.save()
        messages.success(request, 'Book updated successfully!')
    return redirect('/books/'+str(booknum))    