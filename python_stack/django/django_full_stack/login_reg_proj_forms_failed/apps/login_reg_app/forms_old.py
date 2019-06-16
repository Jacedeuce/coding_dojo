from django import forms
from datetime import date, timedelta

from .models import User
from .functions import subtract_years


class RegisterForm(forms.ModelForm):
    birthdate = forms.DateField(
        widget=forms.DateInput(format=('%Y-%m-%d'),
                                attrs={'class':'bootstrapdate',
                                'placeholder':'2000-01-01',
                                'type':'date'}))
    
    class Meta:
        model = User
        fields = '__all__'
        # widgets = {
        #     'password' : forms.PasswordInput(),
        # }
    
    def validatePasswordLength(self):
        pw1 = self.cleaned_data.get('password')
        if len(pw1) < 8:
            raise forms.ValidationError("Password must be at least 8 chars.")
        return pw1

    def validateFirstNameLength(self):
        fn1 = self.cleaned_data.get('first_name')
        if len(fn1) < 2:
            raise forms.ValidationError("First Name must be at least 2 chars.")
        return fn1

    def validateLastNameLength(self):
        ln1 = self.cleaned_data.get('last_name')
        if len(ln1) < 2:
            raise forms.ValidationError("Last Name must be at least 2 chars.")
        return ln1

    def validateBirthdate(self):
        bday = self.cleaned_data.get('birthdate')
        today = date.today()
        years13 = subtract_years(today, 13)
        if bday > years13:
            raise forms.ValidationError("Age must be over 13.")
        return bday
        
    def validateAllFieldLengths(self):
        print("validating input")
        print("="*80)
        self.validateLastNameLength()
        self.validateFirstNameLength()
        self.validatePasswordLength()
        self.validateBirthdate()
        return self


class LoginForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())
    class Meta():
        model = User
        fields = ('email', 'password')