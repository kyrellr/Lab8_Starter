# Lab 8 - Starter

## Kyrell Ringpis

### Check Your Understanding

**1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.\
a. Within a Github action that runs whenever code is pushed\
b. Manually run them locally before pushing code\
c. Run them all after all development is completed**

I would manually run my automated tests locally before pushing code so that when I decide to push code, it has already been thoroughly tested and debugged. It'd also be nice though to have it run whenever code is pushed, to see if further development was done well. <br></br>

**2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)**

No, I'd use unit testing. <br></br>

**3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**


No, I'd use end-to-end testing for this, as the application's functionality is to write and send messages to another user. This means that testing the "message" feature involves testing more than one unit. <br></br>

**4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

Yes. This focuses on a single aspect of the application rather than the entire thing from start to end. <br></br>