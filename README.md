### sigurdura13.github.io
# My personal web site
Sigurður Már Atlason

The project is an AngularJs project and uses gulp to run.

Prerequisits: You have to have npm, python and node installed.

1. Clone the project ```git clone https://github.com/sigurdura13/sigurdura13.github.io.git```


2. Open Terminal and go into the folder 'sigurdura13.github.io'. ```cd sigurdura13.github.io```


3. If you do not have gulp installed globally run ```[sudo] npm install -g gulp```(-g stands for global).


4. run ```npm install```

5. You should be good to go. The package.json should have all saved dependencies. 
   To add more plugins go to <http://gulpjs.com/plugins/> and modify the gulp file.


6. To compile the project use ```gulp``` and to run the python script (client) run fist ```chmod +x py2-start-client``` and then ```./py2-start-client``` for Mac/Linux or ```start-client.bat``` for Windows.
The client is set up on port 9000 (http://localhost:9000).


Extra info: The gulp file has livereload setup so you need to add [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) to your browser in order for that to work (recommended).

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)
