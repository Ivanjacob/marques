from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

# Create your models here.........


class CommonUserFields(models.Model):
    first_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")
    phone = models.CharField(max_length=100, default="")

    class Meta:
        abstract = True


class User(AbstractUser, CommonUserFields):
    username = models.CharField(max_length=100, default="", unique=True)
    email = models.EmailField(max_length=100, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def profile(self):
        profile = Profile.objects.get(user=self)
        return profile


class InventoryManagerUser(User):
    employee_id = models.CharField(max_length=100, default="", unique=True)

    def __str__(self):
        return f'{self.username} - {self.first_name} {self.last_name}'

    class Meta:
        verbose_name = "Inventory Manager"
        verbose_name_plural = "Inventory Managers"


class FarmerUser(User):
    farmer_id = models.CharField(max_length=100, default="", unique=True)
    rice_stored = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.phone} - {self.rice_stored}'

    class Meta:
        verbose_name = "Farmer"
        verbose_name_plural = "Farmers"


class CustomerUser(User):
    customer_id = models.CharField(max_length=100, default="", unique=True)
    city = models.CharField(max_length=100, default="")
    address = models.CharField(max_length=100, default="")

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"


# USer Profiles
# Define the User Profile
class ProfileManager(models.Manager):
    pass


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to='user_images', default='default.jpg')
    verified = models.BooleanField(default=False)

    objects = ProfileManager()

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


# post_save.connect(create_user_profile, sender=User)
# post_save.connect(save_user_profile, sender=User)


# signals to create and save profiles upon user creation


# @receiver(post_save, sender=FarmerUser)
# @receiver(post_save, sender=InventoryManagerUser)
# @receiver(post_save, sender=CustomerUser)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         UserProfile.objects.create(user=instance)


# @receiver(post_save, sender=FarmerUser)
# @receiver(post_save, sender=InventoryManagerUser)
# @receiver(post_save, sender=CustomerUser)
# def save_user_profile(sender, instance, **kwargs):
#     instance.userprofile.save()


# post_save.connect(create_user_profile, sender=User)
# post_save.connect(save_user_profile, sender=User)

# Can we end this repetition on the users account profile creation
# # class rice


class Rice(models.Model):
    name = models.CharField(max_length=100, default="", unique=True)
    category = models.CharField(max_length=100)
    price = models.IntegerField()
    quantity = models.IntegerField()
    added_at = models.DateTimeField(auto_now_add=True)


# Create your models here.


# class User(AbstractUser):
#     username = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100, unique=True)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username']

#     def profile(self):
#         profile = Profile.objects.get(user=self)


# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     full_name = models.CharField(max_length=100)
#     bio = models.CharField(max_length=100)
#     image = models.ImageField(upload_to='user_images', default='default.jpg')
#     verified = models.BooleanField(default=False)


# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)


# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()
