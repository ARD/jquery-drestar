/**
 * Drestar plugin for jQuery
 * Copyright (c) 2014 Andre Rainaud <contato@andrerainaud.com.br>
 * Licensed under the MIT license (http://opensource.org/licenses/MIT)
 * Version: 0.1
 */
(function($){
    $.fn.drestar = function(settings){
        var config = {
            'total': 5,
            onClick: null,
            startRate: 0,
            isDisabled: false
        },
        ul         = null,
        elemid     = null,
        star       = null,
        lastStar   = null;
        
        if (settings){$.extend(config, settings);}

        return this.each(function(){
            ul = $(this);
            elemid = ul.attr('id');
            
            ul.addClass('drestar');
            
            if(config.isDisabled)
                ul.addClass('drestar-off');
            
            for(i = 1; i <= config.total; i++)
            $(this).append('<li class="'+elemid+'-drestar-'+i+(i <= config.startRate ? ' active' : '')+'" data-star="'+i+'"></li>');
            
            ul.append('<input type="hidden" value="'+config.startRate+'" id="'+elemid+'-input-drestar-value" name="'+elemid+'-input-drestar-value" />');
            
            if(!config.isDisabled)
            $('> li',ul).click(function(){
                elemid = $(this).parent().attr('id');
                star = parseInt($(this).attr('data-star'));
                $('#'+elemid+'-input-drestar-value').val(star);
                
                if(config.onClick) config.onClick(star);
                
            });
            
            if(!config.isDisabled)
            $('> li',ul).hover(function(){
                elemid = $(this).parent().attr('id');
                lastStar = parseInt($('#'+elemid+'-input-drestar-value').val());
                star = parseInt($(this).attr('data-star'));
		 
                for(i=1; i <= star; i++)
                $('li.'+elemid+'-drestar-'+i).addClass('active');
                
                for(i=(star+1); i <= config.total; i++)
                $('li.'+elemid+'-drestar-'+i).removeClass('active');
                
            });
            
            if(!config.isDisabled)
            ul.mouseout(function(){
                lastStar = parseInt($('#'+elemid+'-input-drestar-value').val());
                for(i=1; i <= lastStar; i++)
                $('li.'+elemid+'-drestar-'+i).addClass('active');
                
                for(i=(lastStar+1); i <= config.total; i++)
                $('li.'+elemid+'-drestar-'+i).removeClass('active');
                
            });
        });
    };
})(jQuery);
