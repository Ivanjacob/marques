# from django.db import models
# from django.contrib.auth.models import User
# from django.db.models.signals import post_save
# from django.db.models.fields import BLANK_CHOICE_DASH


# class Product(models.Model):
#     name = models.CharField(max_length=200, null=True, blank=True)
#     image = models.ImageField(null=True, blank=True,
#                               default='/images/placeholder.png', upload_to="images/")
#     category = models.CharField(max_length=200, null=True, blank=True)
#     description = models.TextField(null=True, blank=True)
#     price = models.DecimalField(
#         max_digits=12, decimal_places=2, null=True, blank=True)
#     rating = models.DecimalField(
#         max_digits=7, decimal_places=2, null=True, blank=True)
#     numReviews = models.IntegerField(null=True, blank=True, default=0)
#     countInStock = models.IntegerField(null=True, blank=True, default=0)
#     createdAt = models.DateTimeField(auto_now_add=True)
#     _id = models.AutoField(primary_key=True, editable=False)

#     def __str__(self):
#         return f"{self.name} - {self.category} - {self.description} - {self.price}"


# User = get_user_model()


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classess = [permissions.IsAuthenticated]


# class FarmerUserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.filter(
#         profile__isnull=False, profile__user_type='Farmer')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class InventoryManagerUserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.filter(
#         profile__isnull=False, profile__user_type='Inventory Manager')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class CustomerUserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.filter(
#         profile__isnull=False, profile__user_type='Customer')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class RegisterViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer
#     permission_classes = [permissions.AllowAny]

#     def perform_create(self, serializer):
#         user = serializer.save()
#         user.set_password(serializer.validated_data['password'])
#         user.save()


# class MyTokenObtainPairViewSet(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer
