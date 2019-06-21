from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Book, Review, Author
from apps.log_reg_app.models import User

# Create your views here.
def index(request):
    reviews = Review.objects.all().order_by('-id')[:3] 
    books = Book.objects.all()

    context = {
        'books' : books,
        'reviews' : reviews,
    }   
    return render(request, 'book_review_app/index.html', context) 


def new(request):
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        messages.error(request, "You must be logged in to do that!")
        return redirect("/")
    rating_range = list(range(5,0,-1))
    authors = Author.objects.all()

    context = {
        'rating_range' : rating_range,
        'authors' : authors
    }
    return render(request, 'book_review_app/new.html', context)

def create(request):
    try:
        user=User.objects.get(id=request.session['userid'])
    except:
        messages.error(request, "You must be logged in to do that!")
        return redirect("/")

    if request.method == 'POST':
        if 'author_pick' in request.POST:
            author = Author.objects.get(id=request.POST['author_pick'])
        else:
            try:
                author = Author.objects.get(name=request.POST['author_add'])
            except:
                author = Author.objects.create(name=request.POST['author_add'])
        try:
            book = Book.objects.get(title=request.POST['title'])
        except:
            book = Book.objects.create(title=request.POST['title'], author=author)
        
        review = Review.objects.create(review=request.POST['review'], rating=request.POST['rating'], writer=user, book = book)

    return redirect('/books/'+str(book.id))

def show(request, booknum):
    try:
        book = Book.objects.get(id=booknum)
    except:
        return redirect('/books')
    context = {
        "book" : book,
        'rating_range' : list(range(5,0,-1))
    }
    return render(request, 'book_review_app/show.html', context)

# def edit(request):
#     return HttpResponse('edit book')

def new_review(request, booknum):
    if request.method == 'POST':
        try:
            user = User.objects.get(id=request.session['userid'])       
        except:
            messages.error(request, "You must log in to do that")
        try:
            book = Book.objects.get(id=booknum)
        except:
            message.error(request, "That book doesn't exist")
        
        review = Review.objects.create(review=request.POST['review'], rating=request.POST['rating'], book=book, writer=user)
        return redirect("/books/"+str(booknum)) 

# def delete(request):
#     ## Not Necessary???
#     return HttpResponse('delete book')

def review_delete(request):
    return HttpResponse('Delete Review')