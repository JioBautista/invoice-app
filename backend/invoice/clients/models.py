from django.db import models


# Create your models here.
#   "clientAddress": {
#       "street": "106 Kendell Street",
#       "city": "Sharrington",
#       "postCode": "NR24 5WQ",
#       "country": "United Kingdom"
#     },


class ClientAddress(models.Model):
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    postCode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)


class client_test(models.Model):
    createdAt = models.DateField()
    paymentDue = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    paymentTerms = models.IntegerField()
    clientName = models.CharField(max_length=100)
    clientEmail = models.EmailField(unique=True)
    clientAddress = models.ForeignKey(
        ClientAddress,
        related_name="clientAddress",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")],
        max_length=200,
    )
    total = models.IntegerField()


class Meta:
    ordering = ["created"]
