$(document).ready(function(){
        var fadeTime = 100;

        /* menu controls */

        $("#navbar-education").click(function() {
            $("#about").fadeOut(fadeTime);
            $("#project").fadeOut(fadeTime);
            $("#presentations").fadeOut(fadeTime);
            $("#publications").fadeOut(fadeTime);
            setTimeout(function(){
                $("#education").fadeIn(fadeTime);
            }, fadeTime);
            return false;
        });

        $("#navbar-project").click(function() {
            $("#education").fadeOut(fadeTime);
            $("#about").fadeOut(fadeTime);
            $("#presentations").fadeOut(fadeTime);
            $("#publications").fadeOut(fadeTime);
            setTimeout(function(){
                $("#project").fadeIn(fadeTime);
            }, fadeTime);
            return false;
        });

        $("#navbar-presentations").click(function() {
            $("#education").fadeOut(fadeTime);
            $("#project").fadeOut(fadeTime);
            $("#about").fadeOut(fadeTime);
            $("#publications").fadeOut(fadeTime);
            setTimeout(function(){
                $("#presentations").fadeIn(fadeTime);
            }, fadeTime);
            return false;
        });

        $("#navbar-publications").click(function() {
            $("#education").fadeOut(fadeTime);
            $("#project").fadeOut(fadeTime);
            $("#about").fadeOut(fadeTime);
            $("#presentations").fadeOut(fadeTime);
            setTimeout(function(){
                $("#publications").fadeIn(fadeTime);
            }, fadeTime);
            return false;
        });

        $("#transparency-in-modern-hebrew-abstract").click(function() {
            $("#transparency-in-modern-hebrew-abstract-div").slideToggle();
        });

        $("#learnability-abstract").click(function() {
            $("#learnability-abstract-div").slideToggle();
        });

        $("#contacttrees-abstract").click(function() {
            $("#contacttrees-abstract-div").slideToggle();
        });

        $("#text-and-the-city-abstract").click(function() {
            $("#text-and-the-city-abstract-div").slideToggle();
        });

        $("#transformations-abstract").click(function() {
            $("#transformations-abstract-div").slideToggle();
        });

        $("#enclaves-abstract").click(function() {
            $("#enclaves-abstract-div").slideToggle();
        });

    });
