# Generated by Django 5.0.3 on 2024-03-13 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_alter_clientinfo_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientinfo',
            name='invoice_num',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
