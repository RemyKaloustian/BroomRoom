

function CheckImages() {

    //var pics_jpg = [":zac1",":zac2"]

    if (_message.indexOf(":zac1") > -1) {
        while (_message.indexOf(":zac1") > -1) {
            _message = _message.replace(":zac1", "<img src=\"pictures/zac1.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":zac2") > -1) {
        while (_message.indexOf(":zac2") > -1) {
            _message = _message.replace(":zac2", "<img src=\"pictures/zac2.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":zac3") > -1) {
        while (_message.indexOf(":zac3") > -1) {
            _message = _message.replace(":zac3", "<img src=\"pictures/zac3.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":usmot") > -1) {
        while (_message.indexOf(":usmot") > -1) {
            _message = _message.replace(":usmot", "<img src=\"pictures/usmot.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":stomedy3") > -1) {
        while (_message.indexOf(":stomedy3") > -1) {
            _message = _message.replace(":stomedy3", "<img src=\"pictures/stomedy3.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":stomedy2") > -1) {
        while (_message.indexOf(":stomedy2") > -1) {
            _message = _message.replace(":stomedy2", "<img src=\"pictures/stomedy2.jpg\" class=\"message_pic\" />");

        }
    }


    if (_message.indexOf(":stomedy1") > -1) {
        while (_message.indexOf(":stomedy1") > -1) {
            _message = _message.replace(":stomedy1", "<img src=\"pictures/stomedy1.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":soflo") > -1) {
        while (_message.indexOf(":soflo") > -1) {
            _message = _message.replace(":soflo", "<img src=\"pictures/soflo.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":pain3") > -1) {
        while (_message.indexOf(":pain3") > -1) {
            _message = _message.replace(":pain3", "<img src=\"pictures/pain3.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":pain2") > -1) {
        while (_message.indexOf(":pain2") > -1) {
            _message = _message.replace(":pain2", "<img src=\"pictures/pain2.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":pain1") > -1) {
        while (_message.indexOf(":pain1") > -1) {
            _message = _message.replace(":pain1", "<img src=\"pictures/pain1.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":leeeeee") > -1) {
        while (_message.indexOf(":leeeeee") > -1) {
            _message = _message.replace(":leeeeee", "<img src=\"pictures/leeeeee.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":ethan") > -1) {
        while (_message.indexOf(":ethan") > -1) {
            _message = _message.replace(":ethan", "<img src=\"pictures/ethan.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":crawling") > -1) {
        while (_message.indexOf(":crawling") > -1) {
            _message = _message.replace(":crawling", "<img src=\"pictures/crawling.jpg\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":cena") > -1) {
        while (_message.indexOf(":cena") > -1) {
            _message = _message.replace(":cena", "<img src=\"pictures/cena.gif\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":brent") > -1) {
        while (_message.indexOf(":brent") > -1) {
            _message = _message.replace(":brent", "<img src=\"pictures/brent.gif\" class=\"message_pic\" />");

        }
    }

    if (_message.indexOf(":black") > -1) {
        while (_message.indexOf(":black") > -1) {
            _message = _message.replace(":black", "<img src=\"pictures/black.jpg\" class=\"message_pic\" />");

        }
    }


}//CheckImages()







function CheckImagesAfterSelect() {

    //var pics_jpg = [":zac1",":zac2"]

    $(".message_box").each(function() {

    

        if ($(this).text().indexOf(":zac1") > -1) {
            while ($(this).text().indexOf(":zac1") > -1) {



                $(this).html($(this).html().replace(":zac1", "<img src=\"pictures/zac1.jpg\" class=\"message_pic\" />"));

            }
        }

        //if (message.indexOf(":zac2") > -1) {
        //    while (message.indexOf(":zac2") > -1) {
        //        message = message.replace(":zac2", "<img src=\"pictures/zac2.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":zac3") > -1) {
        //    while (message.indexOf(":zac3") > -1) {
        //        message = message.replace(":zac3", "<img src=\"pictures/zac3.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":usmot") > -1) {
        //    while (message.indexOf(":usmot") > -1) {
        //        message = message.replace(":usmot", "<img src=\"pictures/usmot.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":stomedy3") > -1) {
        //    while (message.indexOf(":stomedy3") > -1) {
        //        message = message.replace(":stomedy3", "<img src=\"pictures/stomedy3.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":stomedy2") > -1) {
        //    while (message.indexOf(":stomedy2") > -1) {
        //        message = message.replace(":stomedy2", "<img src=\"pictures/stomedy2.jpg\" class=\"message_pic\" />");

        //    }
        //}


        //if (message.indexOf(":stomedy1") > -1) {
        //    while (message.indexOf(":stomedy1") > -1) {
        //        message = message.replace(":stomedy1", "<img src=\"pictures/stomedy1.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":soflo") > -1) {
        //    while (message.indexOf(":soflo") > -1) {
        //        message = message.replace(":soflo", "<img src=\"pictures/soflo.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":pain3") > -1) {
        //    while (message.indexOf(":pain3") > -1) {
        //        message = message.replace(":pain3", "<img src=\"pictures/pain3.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":pain2") > -1) {
        //    while (message.indexOf(":pain2") > -1) {
        //        message = message.replace(":pain2", "<img src=\"pictures/pain2.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":pain1") > -1) {
        //    while (message.indexOf(":pain1") > -1) {
        //        message = message.replace(":pain1", "<img src=\"pictures/pain1.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":leeeeee") > -1) {
        //    while (message.indexOf(":leeeeee") > -1) {
        //        message = message.replace(":leeeeee", "<img src=\"pictures/leeeeee.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":ethan") > -1) {
        //    while (message.indexOf(":ethan") > -1) {
        //        message = message.replace(":ethan", "<img src=\"pictures/ethan.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":crawling") > -1) {
        //    while (message.indexOf(":crawling") > -1) {
        //        message = message.replace(":crawling", "<img src=\"pictures/crawling.jpg\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":cena") > -1) {
        //    while (message.indexOf(":cena") > -1) {
        //        message = message.replace(":cena", "<img src=\"pictures/cena.gif\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":brent") > -1) {
        //    while (message.indexOf(":brent") > -1) {
        //        message = message.replace(":brent", "<img src=\"pictures/brent.gif\" class=\"message_pic\" />");

        //    }
        //}

        //if (message.indexOf(":black") > -1) {
        //    while (message.indexOf(":black") > -1) {
        //        message = message.replace(":black", "<img src=\"pictures/black.jpg\" class=\"message_pic\" />");

        //    }
        //}

    });
}//CheckImages()