---
layout: page
title: Research / Projects
permalink: /projects/
description: From quantum microwave networks to nanoscale devices.
nav: true
nav_order: 2
---

{% assign projects = site.projects | sort: 'importance' %}
{% for project in projects %}

### [{{ project.title }}]({{ project.url | relative_url }})

{{ project.description }}

{% endfor %}
