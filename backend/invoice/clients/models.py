from django.db import models

# Create your models here.


# class SenderAddress(models.Model):
#     street = models.CharField(default="19 Union Terrace", max_length=200)
#     city = models.CharField(default="London", max_length=200)
#     postcode = models.CharField(default="E1 3EZ", max_length=200)
#     country = models.CharField(default="United Kingdom", max_length=200)


class client_test(models.Model):
    createdAt = models.DateField()
    paymentDue = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    paymentTerms = models.IntegerField()
    clientName = models.CharField(max_length=100)
    clientEmail = models.EmailField(unique=True)
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")],
        max_length=200,
    )
    total = models.IntegerField()


class Meta:
    ordering = ["created"]
