from django.db import models


class Active(models.Model):
    is_active = models.CharField(max_length=200, null=True, blank=True)


class Completed(models.Model):
    is_completed = models.CharField(max_length=200, null=True, blank=True)
