from django.contrib import admin
from .models import ClientInfo, ClientAddress

# Register your models here.


class ClientAdmin(admin.ModelAdmin):
    list_display = (
        "created_at",
        "payment_due",
        "description",
        "payment_terms",
        "client_name",
        "client_email",
        "client_address",
        "status",
        "total",
    )


admin.site.register(
    ClientInfo,
    ClientAdmin,
)


class ClientAddressAdmin(admin.ModelAdmin):
    list_display = ("street", "city", "postCode", "country")


admin.site.register(ClientAddress, ClientAddressAdmin)
