---
layout: default
title: FAQ
nav_order: 4
---

# So I can just run Javascript? Isn't that just XSS?

The code will be executed inside a very limited environment to avoid security issues. This means plugins will not have access to anything in the website itself, only the pieces we decide to expose to it.

# How can I add X to the plugin configuration?

Check out the [Manifest](Manifest.html) page, it should contain information regarding how to add specific types of fields to your configuration.

# Can I make custom forms or HTML elements?

Not as of August '23, but we have those two in our roadmap, stay tuned! Check out the [Limitations page](Limitations.html) for more details.

# How do I publish a plugin?

Currently there is no way to publish a plugin, but will be as soon as we get out of Alpha.

Keep in mind that during development, most [Limitations](Limitations.html) are off, so you can use any Javascript and browser API you want, but they might not work on a published version of the plugin.

# What languages can I develop plugins with?

Plugins are ran using Javascript, so anything that compiles to Javascript should work, like Typescript.

# How do I make an itemRef field that accepts any type of item?

Use this as the accept value on the itemRef field

```json
{
  "accept": [
    "rich-content",
    "widget-video",
    "widget-audio",
    "chart",
    "area",
    "group",
    "image",
    "svg",
    "text"
  ]
}
```

Keep in mind that there are only a few properties that are common to every item type.
