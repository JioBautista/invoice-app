# Generated by Django 5.0.3 on 2024-03-13 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0006_remove_clientinfo_items_clientinfo_items'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientinfo',
            name='items',
            field=models.ManyToManyField(blank=True, to='clients.clientitems'),
        ),
    ]
