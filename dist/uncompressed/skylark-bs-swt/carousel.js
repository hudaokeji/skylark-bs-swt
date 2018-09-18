/**
 * skylark-bs-swt - The old skylark bootstrap standard widget toolkit
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-bs-swt/
 * @license MIT
 */
define([
  "skylark-bootstrap3/carousel",
  "./sbswt"
],function(carousel,sbswt){

  sbswt.Carousel = carousel.Constructor;

  return carousel;
});
