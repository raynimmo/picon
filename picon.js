/**
 * @file
 * Contains JavaScript for Picon module.
 */

/*
 * Implements Drupal.theme().
 *   @return HTML formatted anchor tag.
 */
Drupal.theme.prototype.piconLink = function(url, title, target) {
  return '<a href="' + url + '" title="' + title + '" target="' + target + '"></a>';
}

/*
 * Implements Drupal.theme().
 *   @return HTML formatted image tag.
 */
Drupal.theme.prototype.piconImage = function(src, alt) {
  return '<img src="' + src + '" alt="' + alt + '" />';
}

/*
 * Implements Drupal.theme().
 *   @return HTML div tag.
 */
Drupal.theme.prototype.piconDiv = function(className) {
  return '<div class="' + className + '"></div>';
}

/*
 * Function to toggle disabled attribute of html elements.
 *
 * @param el.
 *   Contains ID attribute of HTML element.
 *
 * @param task.
 *   Contains boolean value for switching toggle.
 */
function disable_toggle(el, task) {
  if (task){
    $(el).attr('disabled', false);
  }
  else {
    $(el).attr('disabled', true);
  }
}

/*
 * Onload function to build image and link for embedding.
 */
Drupal.behaviors.picon = function(context) {
  var newtab_msg = 'This link will open in a new tab';
  var sametab_msg = 'Powered by Drupal, an open source content management system';
  var title_el = '#edit-picon-title-text';
  var open0radio = '#edit-picon-opento-0-wrapper input[type=radio]';
  var open1radio = '#edit-picon-opento-1-wrapper input[type=radio]';
  var image0radio = '#edit-picon-image-link-0-wrapper input[type=radio]';
  var image1radio = '#edit-picon-image-link-1-wrapper input[type=radio]';
  $(open0radio).change(function() {
    $(title_el).val(newtab_msg);
    disable_toggle(title_el, false);
  });
  $(open1radio).change(function() {
    $(title_el).val(sametab_msg);
    disable_toggle(title_el, true);
  });
  $(image0radio).change(function() {
    disable_toggle(open0radio, false);
    disable_toggle(open1radio, false);
    disable_toggle(title_el, false);
  });
  $(image1radio).change(function() {
    if ($(open1radio).attr('checked') == true) {
      disable_toggle(title_el, true);
      $(title_el).val(sametab_msg);
    }
    else {
      $(title_el).val(newtab_msg);
    }
    disable_toggle(open0radio, true);
    disable_toggle(open1radio, true);
  });
  if (typeof Drupal.settings.picon != 'undefined') {
    var picon_image_path = Drupal.settings.picon.picon_image_path;
    var picon_alt_text = Drupal.settings.picon.picon_alt_text;
    var picon_title_text = Drupal.settings.picon.picon_title_text;
    var picon_link_behaviour = Drupal.settings.picon.picon_link_behaviour;
    var picon_url = 'http://www.drupal.org';
    var piconImage = Drupal.theme('piconImage', picon_image_path, picon_alt_text);
    var piconLink = Drupal.theme('piconLink', picon_url, picon_title_text, picon_link_behaviour );
    var piconDiv = Drupal.theme('piconDiv', 'picon-el');
    if (picon_link_behaviour) {
      $('body').append($(piconDiv).append($(piconLink).append($(piconImage))));
    }
    else {
      $('body').append($(piconDiv).append($(piconImage)));
    }
  }
};
