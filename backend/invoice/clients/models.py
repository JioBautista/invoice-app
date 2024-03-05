from django.db import models

# Create your models here.


class SenderAddress(models.Model):
    street = models.CharField(default="19 Union Terrace")
    city = models.CharField(default="London")
    postcode = models.CharField(default="E1 3EZ")
    country = models.CharField(default="United Kingdom")


class client_test(models.Model):
    createdAt = models.DateField()
    paymentDue = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    paymentTerms = models.IntegerField()
    clientName = models.CharField(max_length=100)
    clientEmail = models.EmailField(unique=True)
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")]
    )
