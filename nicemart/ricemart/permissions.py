from rest_framework import permissions


class IsAdminUserOrReadOnly(permissions.BasePermission):
    """
        Custom permission to allow only admin users to edit reports.
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        # check if the user is an admin
        return request.user and request.user.is_staff
