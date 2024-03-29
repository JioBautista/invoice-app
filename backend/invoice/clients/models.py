from django.db import models


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


class ClientItems(models.Model):
    name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)


class ClientInfo(models.Model):
    owner = models.ForeignKey(
        "auth.User",
        related_name="client",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    invoice_num = models.CharField(max_length=6, null=True, blank=True)
    created_at = models.DateField()
    payment_due = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=200)
    payment_terms = models.IntegerField()
    status = models.CharField(
        choices=[("paid", "Paid"), ("pending", "Pending"), ("draft", "Draft")],
        max_length=200,
    )
    items = models.ManyToManyField(ClientItems, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    client_name = models.CharField(max_length=100)
    client_email = models.EmailField(unique=True)
    client_address = models.OneToOneField(
        ClientAddress,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    sender_address = models.ForeignKey(
        SenderAddress, on_delete=models.CASCADE, null=True, blank=True
    )
