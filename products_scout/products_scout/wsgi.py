"""
WSGI config for products_scout project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

# Set the default settings module based on an environment variable
os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE',
    os.getenv('DJANGO_SETTINGS_MODULE', 'products_scout.settings')
)

try:
    # Initialize the WSGI application
    application = get_wsgi_application()
except Exception as e:
    # Log any errors during WSGI setup
    with open('wsgi_error.log', 'a') as error_log:
        error_log.write(f"WSGI Error: {str(e)}\n")
    raise
