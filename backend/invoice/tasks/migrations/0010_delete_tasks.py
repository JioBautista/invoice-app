# Generated by Django 5.0.3 on 2024-05-07 21:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0009_alter_tasks_active_alter_tasks_completed'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Tasks',
        ),
    ]
