from django.db import models


class Todo(models.Model):
    task = models.CharField(max_length=255)
    new_date = models.DateField(auto_now_add=True)
    pass_due_date = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    is_editing = models.BooleanField(default=False)

    def __str__(self):
        return self.task
