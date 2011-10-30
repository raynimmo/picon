

The module allows for easy selection of images using a sidebar that displays the available images. Images that follow the relevant naming convention within Drupal's /misc/ folder are used as default but the module allows for that to be switched to the sites own /images/icons/ folder with the theme folder.

The module also allows site admins to switch off the anchor tag functionality of the image so that clicking it does not result in a hit to Drupal.org, it does not however allow the URL that the link points to to be changed.

When enabled as a link the anchor tags title attribute can be changed from the admin settings page of the module. The image alt attribute can also be changed to anything the site admin wishes.

The icons placement is by default set for the "Powered By' block that comes with the stanbdard installation but site administrators can change this placement to be appended to the sites $closure variable of it can be appended to the inside of the html body end tag.

Installation
------------

Copy picon.module to your module directory and then enable on the admin
modules page.  The main settings for the module can be found at admin/settings/picon.

Author
------
Ray Nimmo
ray@junglecreative.com