from django.db import models

# Create your models here.

class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=100)

    bio = models.TextField()

    profile_image = models.ImageField(
        upload_to='profile/',
        blank=True,
        null=True
    )

    resume = models.FileField(
        upload_to='resume/',
        blank=True,
        null=True
    )

    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    portfolio = models.URLField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("Programming", "Programming"),
        ("Frontend", "Frontend"),
        ("Backend", "Backend"),
        ("Database", "Database"),
        ("Tools", "Tools"),
        ("Other", "Other"),
    ]

    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(default=80)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    icon = models.CharField(
        max_length=100,
        blank=True,
        help_text="Example: fa-python, fa-react"
    )

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)

    github_link = models.URLField(blank=True)
    live_demo = models.URLField(blank=True)

    technologies = models.CharField(
        max_length=255,
        help_text="Example: Python, Django, React, MySQL"
    )

    featured = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=150)
    institution = models.CharField(max_length=200)
    university = models.CharField(max_length=200, blank=True)
    cgpa = models.DecimalField(max_digits=3, decimal_places=2)
    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.degree} - {self.institution}"

class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    currently_working = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return f"{self.position} - {self.company}"

class Certificate(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    issue_date = models.DateField()
    certificate_url = models.URLField(blank=True)
    certificate_image = models.ImageField(
        upload_to="certificates/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name