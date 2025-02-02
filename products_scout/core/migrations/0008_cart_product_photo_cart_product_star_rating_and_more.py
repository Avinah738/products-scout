# Generated by Django 5.1.3 on 2024-11-29 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_user_terms_accepted'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='product_photo',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='cart',
            name='product_star_rating',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='cart',
            name='product_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
