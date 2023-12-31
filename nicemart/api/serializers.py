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
    
    email = serializers.EmailField(required=True)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'profile_image', 'verify')


class InventoryManagerUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = InventoryManagerUser
        fields = UserSerializer.Meta.fields + ('employee_id',)


class FarmerUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = FarmerUser
        fields = UserSerializer.Meta.fields + \
            ('first_name', 'last_name', 'farmer_id', 'phone', 'rice_stored')


class CustomerUserSerializer(UserSerializer):
    status = serializers.SerializerMethodField()

    class Meta(UserSerializer.Meta):
        model = CustomerUser
        fields = UserSerializer.Meta.fields + \
            ('first_name', 'last_name', 'phone',
             'status', 'city', 'address')    


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name',
                  'last_name', 'phone', 'profile_image')


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

        # Use the 'get' method to retrieve the relaed InventoryManagerUser
        # inventory_manager = InventoryManagerUser.objects.get(user=user)
        # token['employee_id'] = inventory_manager.employee_id
        token['profile_image'] = user.profile_image.url
        token['verify'] = user.verify
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


class CustomerUserRegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    class Meta:
        model = CustomerUser
        fields = ['username', 'email', 'password', 'confirm_password', 'city', 'address', 'status']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        """
        Validate that the password and confirm_password match.
        
        """
        if data.get('password') and data.get('confirm_password') and data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords don't match.")
        return data
 
    def create(self, validated_data):
        confirm_password = validated_data.pop('confirm_password', None)
        
        user = CustomerUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            city=validated_data.get('city', ''),
            address=validated_data.get('address', ''),
            status=validated_data.get('status', 'Active')
        )
        if confirm_password:
            user.set_password(confirm_password)
            user.save()
        return user


class CustomerUserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class FarmerUserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerUser
        fields = ['username', 'email', 'password', 'first_name',
                  'last_name', 'phone', 'profile_image', 'farmer_id', 'rice_stored']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = FarmerUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone=validated_data['phone'],
            profile_image=validated_data['profile_image'],
            farmer_id=validated_data['farmer_id'],
            rice_stored=validated_data['rice_stored']
        )
        return user


class FarmerUserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
