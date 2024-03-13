from django.contrib import admin
from .models import ClientInfo, ClientAddress, SenderAddress, ClientItems

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
    filter_horizontal = ("items",)


admin.site.register(
    ClientInfo,
    ClientAdmin,
)


class ClientAddressAdmin(admin.ModelAdmin):
    list_display = ("street", "city", "postCode", "country")


admin.site.register(ClientAddress, ClientAddressAdmin)


class SenderAddressAdmin(admin.ModelAdmin):
    list_display = ("street", "city", "postCode", "country")


admin.site.register(SenderAddress, SenderAddressAdmin)


class ClientItemsAdmin(admin.ModelAdmin):
    list_display = ("name", "quantity", "price", "total")


admin.site.register(ClientItems, ClientItemsAdmin)
