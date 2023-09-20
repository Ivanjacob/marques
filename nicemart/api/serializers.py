from api.models import Rice

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions

from django.contrib.auth import get_user_model
from api.models import FarmerUser, InventoryManagerUser, CustomerUser, User
from api.models import Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class InventoryManagerUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = InventoryManagerUser
        fields = UserSerializer.Meta.fields + ('employee_id',)


class FarmerUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = FarmerUser
        fields = UserSerializer.Meta.fields + \
            ('farmer_id', 'rice_stored')


class CustomerUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = CustomerUser
        fields = UserSerializer.Meta.fields + \
            ('customer_id', 'city', 'address')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Password fields did not match.'})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            username=validated_data['username'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class RegisterInventorySerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = InventoryManagerUser
        fields = ('email', 'username', 'password', 'password2', 'employee_id')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Password fields did not match.'})

        return attrs

    def create(self, validated_data):
        employee_id = validated_data.pop('employee_id')
        user = InventoryManagerUser.objects.create(
            email=validated_data['email'],
            username=validated_data['username'],
            employee_id=employee_id
        )

        user.set_password(validated_data['password'])
        user.save()
        profile, created = Profile.objects.get_or_create(user=user)

        return user


class RiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rice
        fields = ('id', 'name', 'category', 'price', 'quantity', 'added_at')


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email')


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         token['full_name'] = user.profile.full_name
#         token['username'] = user.username
#         token['email'] = user.email
#         token['bio'] = user.profile.bio
#         token['image'] = str(user.profile.image)
#         token['verified'] = user.profile.verified
#         return token


# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#         write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)

#     class Meta:
#         model = User
#         fields = ('email', 'username', 'password', 'password2')

#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError(
#                 {'password': 'Password fields did not match.'})

#         return attrs

#     def create(self, validated_data):
#         user = User.objects.create(
#             email=validated_data['email'],
#             username=validated_data['username'],
#         )

#         user.set_password(validated_data['password'])
#         user.save()

#         return user
