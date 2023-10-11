from django.contrib import admin
from api.models import FarmerUser, InventoryManagerUser, CustomerUser, Profile, User

# Register your models here.


class UserAdmin(admin.ModelAdmin):
    # list_editable = ['email']
    list_display = ['username', 'email']


class FarmerUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'phone', 'farmer_id', 'rice_stored']
    # list_editable = ['rice_stored']


class InventoryManagerUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'phone', 'employee_id']
    list_editable = ['phone']


class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'phone', 'customer_id', 'city', 'address']
    list_editable = ['phone', 'customer_id', 'city', 'address']


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'verified']
    list_editable = ['full_name', 'verified']


admin.site.register(FarmerUser, FarmerUserAdmin)
admin.site.register(InventoryManagerUser, InventoryManagerUserAdmin)
admin.site.register(CustomerUser, CustomerUserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(User, UserAdmin)


# class ProfileAdmin(admin.ModelAdmin):
#     list_editable = ['verified']
#     list_display = ['user', 'full_name', 'verified']


# admin.site.register(Profile, ProfileAdmin)
