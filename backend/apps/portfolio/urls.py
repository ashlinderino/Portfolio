from django.urls import path
from .views import *

urlpatterns = [
    path("profile/", ProfileAPIView.as_view(), name="profile"),
        path("skills/", SkillAPIView.as_view()),
path("projects/", ProjectAPIView.as_view()),
path("education/", EducationAPIView.as_view()),
path("experience/", ExperienceAPIView.as_view()),
 path("certificates/", CertificateAPIView.as_view()),
 path("contact/", ContactAPIView.as_view()),
]