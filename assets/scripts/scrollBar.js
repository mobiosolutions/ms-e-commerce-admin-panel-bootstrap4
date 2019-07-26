/**
 * jQiery scrollBar Plugin
 * @author Falk Müller (www-falk-m.de)
 * Thankts to https://codepen.io/IliaSky/pen/obowmv
 */
;( function( $, window, document ) {

	"use strict";

		var pluginName = "scrollBox",
			defaults = {
				containerClass: "sb-container",
                                containerNoScrollClass: "sb-container-noscroll",
                                contentClass: "sb-content",
                                scrollbarContainerClass: "sb-scrollbar-container",
                                scrollBarClass: "sb-scrollbar"
                                
			};

		// plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
                        
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				this.addScrollbar();
                                this.addEvents();
                                this.onResize();
			},
			addScrollbar: function() {
                                $( this.element ).addClass(this.settings.containerClass);
                                this.wrapper = $("<div class='" + this.settings.contentClass + "' />");
                                this.wrapper.append($( this.element ).contents());
                                $( this.element ).append( this.wrapper );
                                
                                this.scollbarContainer = $("<div class='" + this.settings.scrollbarContainerClass + "' />");
                                this.scrollBar = $("<div class='" + this.settings.scrollBarClass + "' />");
                                this.scollbarContainer.append(this.scrollBar);
                                $( this.element ).prepend(this.scollbarContainer);
			},
                        addEvents: function(){
                            
                            this.wrapper.on("scroll." + pluginName, $.proxy(this.onScroll, this) )
                            $(window).on("resize." + pluginName, $.proxy(this.onResize, this) )
                            
                            this.scrollBar.on('mousedown.' + pluginName, $.proxy(this.onMousedown, this));
                            this.scrollBar.on('touchstart.' + pluginName, $.proxy(this.onTouchstart, this));
                        },
                        
                        onTouchstart: function(ev){
                            var me = this;
                            
                            ev.preventDefault();
                            var y = me.scrollBar[0].offsetTop;

                            var onMove = function(end){
                                   var delta = end.touches[0].pageY - ev.touches[0].pageY;
                                   me.scrollBar[0].style.top = Math.min(me.scollbarContainer[0].clientHeight - me.scrollBar[0].clientHeight, Math.max(0, y + delta)) + 'px';
                                   me.wrapper[0].scrollTop = (me.wrapper[0].scrollHeight * me.scrollBar[0].offsetTop / me.scollbarContainer[0].clientHeight);
                            };

                           $(document).on("touchmove." + pluginName, onMove);
                           $(document).on("touchend." + pluginName, function(){
                               $(document).off("touchmove." + pluginName);
                               $(document).off("touchend." + pluginName);
                           });
                        },
                        
                        onMousedown: function(ev){
                            var me = this;
                            
                            ev.preventDefault();
                            var y = me.scrollBar[0].offsetTop;

                            var onMove = function(end){
                                   var delta = end.pageY - ev.pageY;
                                   me.scrollBar[0].style.top = Math.min(me.scollbarContainer[0].clientHeight - me.scrollBar[0].clientHeight, Math.max(0, y + delta)) + 'px';
                                   me.wrapper[0].scrollTop = (me.wrapper[0].scrollHeight * me.scrollBar[0].offsetTop / me.scollbarContainer[0].clientHeight);
                            };

                           $(document).on("mousemove." + pluginName, onMove);
                           $(document).on("mouseup." + pluginName, function(){
                               $(document).off("mousemove." + pluginName);
                               $(document).off("mouseup." + pluginName);
                           });
                        },
                        
                        onResize: function(){
                            
                            this.wrapper.css("max-height", $(this.element).height());
                            
                            var wrapper_client_height = this.wrapper[0].clientHeight;
                            
                            this.scrollBar.css("height", this.scollbarContainer[0].clientHeight * wrapper_client_height / this.wrapper[0].scrollHeight + "px");
                             if(this.scollbarContainer[0].clientHeight <= this.scrollBar[0].clientHeight){
                                 $( this.element ).addClass(this.settings.containerNoScrollClass);
                             } else {
                                 $( this.element ).removeClass(this.settings.containerNoScrollClass);
                             }
                             
                             this.onScroll();
                        },
                        
                        onScroll: function(){
                            
                            this.scrollBar.css("top", Math.min(this.scollbarContainer[0].clientHeight - this.scrollBar[0].clientHeight, this.scollbarContainer[0].clientHeight * this.wrapper[0].scrollTop / this.wrapper[0].scrollHeight) + "px");
                            
                        }
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[pluginName] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );