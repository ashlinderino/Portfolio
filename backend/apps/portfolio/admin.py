from django.contrib import admin

# Register your models here.
from .models import Profile,Skill,Project,Education,Experience,Certificate,Contact


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "designation",
        "email",
        "phone",
    )

    search_fields = (
        "full_name",
        "email",
    )

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "percentage")
    list_filter = ("category",)
    search_fields = ("name",)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "featured",
        "created_at",
    )

    list_filter = (
        "featured",
    )

    search_fields = (
        "title",
    )

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree",
        "institution",
        "cgpa",
        "start_year",
        "end_year",
    )

    search_fields = (
        "degree",
        "institution",
    )

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "company",
        "position",
        "currently_working",
    )

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "issuer",
        "issue_date",
    )

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "created_at",
    )