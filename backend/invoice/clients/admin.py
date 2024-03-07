from django.contrib import admin
from .models import client_test

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


admin.site.register(client_test, ClientAdmin)
