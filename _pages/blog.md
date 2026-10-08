---
layout: page
permalink: /blog/
title: Blog
description: Research notes.
nav: false
nav_order: 4
---

{% if site.posts.size == 0 %}
I’ll use this space for notes on quantum physics, experiments, and life in the lab. No posts yet.
{% else %}
{% for post in site.posts reversed %}

### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: '%B %d, %Y' }} — {{ post.description }}

{% endfor %}
{% endif %}
