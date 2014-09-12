facade : Modal Library
======
###Using the library
create a facade using "new facade(content, options)"
or just run one of my tests using...
 - test.domTest()
 - test.imgTest()
 - test.imgLoadTest()
 - test.imgContentClickTest()


###Interface
 - facade(content, options) 
   - arguments
     - content : DOM element or string specifying an image URL
     - options : configuration options including...
       - Width
       - Height
       - Whether to close the overlay if the user clicks outside of it
       - Whether to close the overlay if the user clicks the content of the overlay
       - For image content, a loading message to be shown in place of the image until it has fully
         loaded
   - return
     - facade object

 - facade object
   - open() : opens the modal
   - close(): closes the modal

###Browsers

###Resources
 - [displaying text while loading an image](http://community.sitepoint.com/t/displaying-text-while-an-image-is-down-loading/12400/3)
 - [reveal modal](http://foundation.zurb.com/docs/components/reveal.html) for styling
 - [jquery cheat sheet](http://overapi.com/jquery/)

###Libraries
 - jquery
   - DOM manipulation
   - utilities (specifically proxy and on)
  - underscore
    - utilities

###Framework Integration
Integrating this library into Backbone might involve a built in "facade" method views have that render their $el inside a modal.

###Time
####Distribution
 Activity                         | Time
 ---------------------------------|----------
 Documentation                    | 0:13:08
 modal rendering                  | 0:15:58
 resizing, open and close methods |	0:27:58
 handle clicks                    |	0:09:03
 render dom content               |	0:24:03
 display loading message          |	0:13:15
 total                            | 1:43:25
 
####If I had more time...
 I would spend additional time on the following items, in order of priority
 
 1. Animation: allowing the user to specify animations (fly in, fly out, etc.) with durations
 2. Default close button: The modal would ideally have a close button in the top right corner
 3. Layouts: The library could come with preset layouts that might include a header and content, a login form, etc.
