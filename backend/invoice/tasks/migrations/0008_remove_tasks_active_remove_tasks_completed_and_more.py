# Generated by Django 5.0.3 on 2024-05-07 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_tasks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='active',
        ),
        migrations.RemoveField(
            model_name='tasks',
            name='completed',
        ),
        migrations.AddField(
            model_name='tasks',
            name='active',
            field=models.ManyToManyField(blank=True, null=True, to='tasks.active'),
        ),
        migrations.AddField(
            model_name='tasks',
            name='completed',
            field=models.ManyToManyField(blank=True, null=True, to='tasks.completed'),
        ),
    ]
