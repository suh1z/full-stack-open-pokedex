I'll choose Python for this exercise. Although Python does not include integrated linting within the language itself, 
the community has agreed to work towards a standard called PEP8. However, this doesn't mean that code not following these standards cannot be published, 
so the team needs third-party libraries to test code style. One third-party library the team can use to detect formatting errors in Python is "flake8," 
but it does not fix the errors automatically, which would require manual work. Another library, called "black," helps with autonomous code formatting.

Besides Jenkins, there are alternatives like Travis-CI, which is open source, can run tests, have notifications / comments of commits and can be seamlessly integrated into public GitHub repositories. 
For more complex projects such as software stacks that include Python, Django, and Nginx, which involve more than just Python, 
a package manager like Conda could be used for building the environment, for example. If we consider a web service that doesn't need a lot of computing power, 
with a team size of six, I would recommend the setup to be hosted in a cloud-based environment because of convenience of setup, 
as long as the hardware requirements are inexpensive in the cloud. However, if it starts to scale, a self-hosted solution might be a better option.
