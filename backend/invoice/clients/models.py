from django.db import models


#  "senderAddress": {
#       "street": "19 Union Terrace",
#       "city": "London",
#       "postCode": "E1 3EZ",
#       "country": "United Kingdom"
#     },
class SenderAddress(models.Model):
    street = models.CharField(default="19 Union Terrace", max_length=200)
    city = models.CharField(default="London", max_length=200)
    postCode = models.CharField(default="E1 3EZ", max_length=200)
    country = models.CharField(default="United Kingdom", max_length=200)


class ClientInfo(models.Model):
    owner = models.ForeignKey(
        "auth.User", related_name="client", on_delete=models.CASCADE
    )
    createdAt = models.DateField()
    paymentDue = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    paymentTerms = models.IntegerField()
    clientName = models.CharField(max_length=100)
    clientEmail = models.EmailField(unique=True)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    postCode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")],
        max_length=200,
    )
    total = models.IntegerField()


class Meta:
    ordering = ["created"]
