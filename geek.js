
        function openCourses() {
            document.getElementById('courses').style.display = 'block'
           ;
        }

        function closePopup() {
            setTimeout(setAlert, 4000)
            document.getElementById('popup').style.display = 'none';
        }

        window.onload = function() {
            if (localStorage.getItem('popupShown') !== 'true') {
                document.getElementById('popup').style.display = 'block';
                localStorage.setItem('popupShown', 'true');
            }
        }
    