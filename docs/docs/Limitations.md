---
layout: default
title: Limitations
nav_order: 2
---

In order to prevent security issues, **published plugins** are ran in a restricted environment. This means that the plugin does not have access to the document, won't be able to send HTTP requests, etc

During development, these limits are disabled for a better developer experience.

# Roadmap

We plan to release an alpha on late August, which will include:

- Selecting elements
- Reading and writing most items properties
- Basic event handling (click, drag, drop)
- Add a Genially interactivity to your plugin

The next iterations of the API will include:

- HTML Input elements for "form"-like plugins.
- Arbitrary HTML via an iframe, for things like canvases

For now we have no plans for things like:

- Sending HTTP requests
- Advanced styling & animation functionality
- Creating items on the fly

but are open to suggestions.
