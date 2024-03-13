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


class ClientAddress(models.Model):
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    postCode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)


class ClientInfo(models.Model):
    owner = models.ForeignKey(
        "auth.User", related_name="client", on_delete=models.CASCADE
    )
    client_address = models.OneToOneField(
        ClientAddress,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    created_at = models.DateField()
    payment_due = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    payment_terms = models.IntegerField()
    client_name = models.CharField(max_length=100)
    client_email = models.EmailField(unique=True)
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")],
        max_length=200,
    )
    total = models.IntegerField()


class Meta:
    ordering = ["created"]
