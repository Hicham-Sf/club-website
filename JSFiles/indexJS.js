$(document).ready(function() {

    // 1. Basic Interaction: Change navbar background on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNav').addClass('scrolled');
        } else {
            $('#mainNav').removeClass('scrolled');
        }
    });

    // 2. Basic Interaction: "Back to Top" button that appears after scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').fadeIn(300).css("display", "flex");
        } else {
            $('#backToTop').fadeOut(300);
        }
    });
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

    // 3. DOM Manipulation: Append a "Nouveau" badge to the first competition card only
    $('.main-event-card').first().find('.d-flex.gap-2.mb-3').prepend(
        '<span class="badge bg-success rounded-pill px-3"><i class="bi bi-star me-1"></i>NOUVEAU</span>'
    );

    // 4. Events: Display an alert when a team member card is clicked
    $('.team-card').click(function() {
        let memberName = $(this).find('h5').text();
        alert("Vous consultez le profil de : " + memberName);
    });

    // 5. Events: Show a tooltip message when hovering over social icons
    $('.team-social, .social-btn').hover(
        function() { 
            $(this).attr('title', 'Visitez le profil !'); 
        },
        function() { 
            $(this).removeAttr('title'); 
        }
    );

    // 6. Animations: Make sections fade in when they enter the viewport
    function checkFade() {
        $('.fade-section').each(function() {
            var bottom_of_object = $(this).offset().top + 50;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'}, 800);
                $(this).removeClass('fade-section'); // Ensures it doesn't trigger repeatedly
            }
        });
    }
    $(window).scroll(checkFade);
    checkFade(); // Trigger instantly on page load for elements already in view

    // 7. Animations / Advanced Effects: Create a progress bar that fills while scrolling
    $(window).scroll(function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        $('#progressBar').css('width', scrolled + '%');
    });

    // 8. Traversing: When clicking a team member, highlight it and remove highlight from siblings
    $('.team-card').click(function(e) {
        // Remove highlight class from all siblings within the parent container
        $(this).parent().siblings().find('.team-card').removeClass('team-highlight');
        // Toggle highlight on the clicked element
        $(this).toggleClass('team-highlight');
    });

    // 9. Traversing: Count how many cards exist and display the number dynamically
    var activityCardCount = $('.activity-card').length;
    $('#activities .section-title').append(
        ' <span class="badge bg-primary fs-5 align-middle ms-2">' + activityCardCount + ' Modules</span>'
    );

    // 10. Smart Logic: Implement a dark mode toggle using jQuery
    $('#darkModeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        // Swap icon between sun and moon
        let icon = $(this).find('i');
        if($('body').hasClass('dark-mode')) {
            icon.removeClass('bi-moon-fill').addClass('bi-sun-fill text-warning');
        } else {
            icon.removeClass('bi-sun-fill text-warning').addClass('bi-moon-fill');
        }
    });

});