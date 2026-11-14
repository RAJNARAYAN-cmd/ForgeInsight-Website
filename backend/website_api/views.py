from django.http import JsonResponse
from django.utils import timezone

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactInquirySerializer


# Backend Health Check
def health_check(request):
    return JsonResponse({
        "status": "success",
        "message": "ForgeInsight Backend is running!",
        "service": "Django REST API",
        "timestamp": timezone.now().isoformat()
    })


# Contact Inquiry API
@api_view(['POST'])
def contact_inquiry(request):

    serializer = ContactInquirySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "status": "success",
            "message": "Your inquiry has been submitted successfully!",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)

    return Response({
        "status": "error",
        "errors": serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)