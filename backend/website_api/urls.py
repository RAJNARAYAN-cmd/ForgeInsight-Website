from django.urls import path
from .views import health_check, contact_inquiry

urlpatterns = [
    path('health/', health_check, name='health_check'),
    path('contact/', contact_inquiry, name='contact_inquiry'),
]