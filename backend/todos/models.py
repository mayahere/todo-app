from django.db import models


class Todo(models.Model):
    content = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)
    expired = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    editting = models.BooleanField(default=False)

    def __str__(self):
        return self.content
