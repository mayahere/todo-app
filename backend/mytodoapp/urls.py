from django.contrib import admin
from django.urls import path, include
from todos import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("polls/", include("polls.urls")),
    path("", include("todos.urls"))
]
