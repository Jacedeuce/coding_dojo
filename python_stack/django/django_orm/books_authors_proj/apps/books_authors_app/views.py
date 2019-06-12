from django.shortcuts import render, redirect, HttpResponse
from apps.books_authors_app.models import Book, Author

# Create your views here.
def books(request):
    context = {}
    context['books'] = Book.objects.all()
    return render(request, "books_authors_app/books.html", context)

## Route to add a book to the database
def addbook(request):
    '''Placeholder for route to add books'''
    if request.method == "POST":
        newbook = Book.objects.create(title=request.POST['form_book_title'],
                                        desc=request.POST['form_book_desc'])
    return redirect("/books")

## Route to display authors
def authors(request):
    context = {}
    context['authors'] = Author.objects.all()
    return render(request, "books_authors_app/authors.html", context)

## Route to add author to the database
def addauthor(request):
    if request.method == "POST":
        newauthor = Author.objects.create(first_name=request.POST['form_author_f_name'],
                                        last_name=request.POST['form_author_l_name'],
                                        notes=request.POST['form_author_notes'])
    return redirect("/authors")

def booknum(request, url_num):
    book = Book.objects.get(id=url_num)
    context = {
        "title" : book.title,
        "id" : book.id,
        "desc" : book.desc,
        "authors" : book.authors.all(),
        "authors_exclude" : Author.objects.exclude(books=url_num),
    }
    return render(request, "books_authors_app/booknum.html", context) 

def authornum(request, url_num):
    author = Author.objects.get(id=url_num)
    context = {
        "id" : author.id,
        "first_name" : author.first_name,
        "last_name" : author.last_name,
        "notes" : author.notes,
        "books" : author.books.all(),
        "books_exclude" : Book.objects.exclude(authors=url_num),
        
    }
    return render(request, "books_authors_app/authornum.html", context)

def author2book(request):
    if request.method == 'POST':
        # print("*"*80)
        # print(request.POST['author_to_add'])
        # print(request.POST['book_id'])
        book = Book.objects.get(id=request.POST['book_id'])
        book.authors.add(Author.objects.get(id=request.POST['author_to_add']))
    return redirect("books/"+request.POST['book_id'])

def book2author(request):
    if request.method == 'POST':
        author = Author.objects.get(id=request.POST['author_id'])
        author.books.add(Book.objects.get(id=request.POST['book_to_add']))
    return redirect("authors/"+request.POST['author_id']) 