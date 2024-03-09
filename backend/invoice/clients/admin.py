from django.contrib import admin
from .models import client_test, SenderAddress

# Register your models here.


class ClientAdmin(admin.ModelAdmin):
    list_display = (
        "createdAt",
        "paymentDue",
        "description",
        "paymentTerms",
        "clientName",
        "clientEmail",
        "status",
        "total",
    )


admin.site.register(
    client_test,
    ClientAdmin,
)


class SenderAdmin(admin.ModelAdmin):
    list_display = ("street", "city", "postCode", "country")


admin.site.register(SenderAddress, SenderAdmin)
