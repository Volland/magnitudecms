
MagnitudeCMS
============

A simple CMS with the primary goal of one login managing many, many sites. 
Haml and Compass as primary citizens.
CouchDB and CouchRest are the starting point. 
ORM agnostic? Not a "goal", however much of the heavy lifting will be contained in the models, so... 

In the begining it'll be to solve my problems/issues/questions - I can see a path like what Harmony (Sidebar Creative) is going down. 
The end goal is as stated above. I'm sick of having to do the same stuff over and over again to setup/configure a new site. 
I want to be able to click a button "new site" then point DNS records, presto new site setup, sort out theme, sort out content, ta-da new site live. 

Here are the bullet points on functionality, pretty basic/simple.

* Mulipe Sites
    + Site
        - Domain
        - Domain
        - Domain
* Page
    + Meta
        - Title
        - Robots
        - Keywords
        - Description
        - Canonical
    + URL
    + Content
        - Parts
            - Different content for showing up in different places
        - Maruku gem is used - again simple/basic required.
            - I was going to go pure xhtml however after using maruku, you can have markdown+
            - Then with the wmd-editor.com you get live preview...
                - May need to tweak wmd later to get additional maruku features...
    + Title (html > head > title)
    + Layout
* Theme (aka template)
    + multiple layouts - so page can look different depending on how you want content laid out
    + themes are global and assigned to sites
* Layout
    + Site has a default layout from a theme
    + Page can pick layout from site theme
* Administration
    + Minimal, Minimal
    + On page editing of everything
        - edit box is out of flow of page, update edit box, content on page updates
        - live preview
        - want content item in a menu on page, drag and drop
        - create new pages by typing new url (ala wiki style)
    + Edit theme in admin area
        - Sass is text
        - Haml is text
        - see point about where to store files, below.

What can be on a page?
----------------------

* Menus
* Content
* Summary of another pages content clicking of which will change pages
* Forms
* Stats Code

How can a Page Look?
--------------------

* Summary of a bunch of pages
* A single page of content
* An idea spread over multiple pages accessed by a tree hierarchy, like sub menus
* Different types of content items presented differently

What sort of files are involved?
--------------------------------

* CSS
* Javascript
* Images
* Flash
* PDF / DOC / other misc.

Where could these files be stored?
----------------------------------

* Database
    + cache to disk on first access so web server may serve files quickly
* On disk
    + what about transferring site to another host? If it is in a CouchDB database it would be simpler to replicate...
   
What License?
-------------

Umm good question - guess I need to see what I'm using to build this project, then I'll see which fits best and is compatible :)

Merb or Sinatra?
----------------

I'm still divided on which to use. The thing with Merb is the bundler works great. I've only really used Merb for ruby projects and I hate dealing with gems.
However auxesis has just pointed me towards a solution for bundling with Sinatra :/ Think I'm going to go Merb as it is nicely structured etc.

