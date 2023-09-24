from django import forms
from .models import RiceStock


class StockCreateForm(forms.ModelForm):
    class Meta:
        model = RiceStock
        fields = ['category', 'item_name', 'quantity']
