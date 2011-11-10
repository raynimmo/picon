
Project Sandbox
---------------
http://drupal.org/sandbox/raynimmo/1326130

6.x-1.x Git Repository
----------------------
http://drupalcode.org/sandbox/raynimmo/1326130.git
  /shortlog/refs/heads/6.x-1.x

Git clone
---------
git clone --branch 6.x-1.x 
  http://git.drupal.org/sandbox/raynimmo/1326130.git picon

Drupal Version
--------------
Drupal 6
Built and tested with Drupal 6.22


Module Description
-------------------
Picon allows site administrators to edit many aspects of the 'Powered By
Drupal' icon that are not available within the core functionality.

The Picon module allows for easy selection of images using a sidebar element
that displays the available images. Images that follow the relevant naming
convention within Drupal's misc/ folder are used as default but the module
allows for that to be switched to the sites own images/icons folder within the
active theme folder.

The module also allows site admins to switch off the anchor tag functionality
of the image so that clicking it does not result in a hit to Drupal.org, it
does not however allow the URL that the link points to to be changed.

When enabled as a link, the anchor tags 'title' attribute can be changed from
the admin settings page of the module at admin/settings/picon. The image 'alt'
attribute can also be changed to anything the site admin wishes.

The admin can enable the link to open in a new tab or the existing tab,
however when set to open in a new tab the links 'title' attribute is changed
to the message 'This will open in a new tab' to address usability issues.

The icons placement is by default set for the 'Powered By' block that comes
with the standard installation but site administrators can change this
placement to be appended to the sites $closure variable or it can be appended
to the inside of the html body end tag.

Installation
------------

Copy picon.module to your module directory and then enable it on the admin
modules page.  The main settings for the module can be found at
admin/settings/picon.

The access permissions must be set for the module within 
admin/user/permissions

If using the standard block display option then this block must first be
enabled with the block admin settings at admin/build/block.

For an image file to be automatically included its filename must be preceeded
with 'powered-' followed by any other naming convention that you wish.
This has been tested using jpeg, png and gif filetypes.

Author
------
Ray Nimmo
ray@junglecreative.com

I welcome any feedback, suggestions or feature requests you may have.
