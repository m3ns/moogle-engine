# MOOGLE SEARCH ENGINE

## Overview

Moogle Search Engine is a moderated search platform that allows users to search categorized links through a simple search interface. The platform includes authentication, role-based moderation, and tag management systems.

## Frontend
       • logo(above search bar)
       • search bar(in middle of the page)
Details: We have a dashboard for the admins and moderators that can add, remove, edit links. Only the admins can add new tags, moderators can use these tags when adding a new link. Every link has a title, description(short), content(optional), approved status(true or false).


## API ENDPOINTS
        • '/api/search' this endpoint is for the search, the request requires a parameter called 'q'. Request should look like '/api/search?q=example'.
        • '/api/mod' this endpoint is for the moderators, they can add, remove, edit links and tags.
        • '/api/mod/add-url' add new link.
        • '/api/mod/add-tag' add new tag.

        • '/api/auth/login' login endpoint.

    search-endpoint: It requires a parameter that comes with the request
    
    mod-add-url-endpoint:
        {
            "url": "https://example.com",
            "title": "example title",
            "description": "example description",
            "content": "example content",
            "tags": ["Social", "Forum"]
        }

    mod-add-tag-endpoint:
    {
        "tagName": "tag"
    }

## Authentication
        • JWT
        • Password Hashing
        • Roles
        • Permissions

## Moderation
        • CRUD Links
        • CRUD Tags
