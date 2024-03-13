# Generated by Django 5.0.3 on 2024-03-13 17:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('postCode', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='SenderAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(default='19 Union Terrace', max_length=200)),
                ('city', models.CharField(default='London', max_length=200)),
                ('postCode', models.CharField(default='E1 3EZ', max_length=200)),
                ('country', models.CharField(default='United Kingdom', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ClientInfo',
            fields=[
                ('client_address', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='clients.clientaddress')),
                ('created_at', models.DateField()),
                ('payment_due', models.DateField(blank=True, null=True)),
                ('description', models.CharField(max_length=200)),
                ('payment_terms', models.IntegerField()),
                ('client_name', models.CharField(max_length=100)),
                ('client_email', models.EmailField(max_length=254, unique=True)),
                ('status', models.CharField(choices=[('paid', 'Paid'), ('pending', 'Pending'), ('draft', 'Draft')], max_length=200)),
                ('total', models.IntegerField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
