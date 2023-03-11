# Social Network Routes

## Description

The purpose of this server side application is to populate information in regards to a possible Social Networking app or site. As you go through the controllers, you will see a variety of information that can be populated.

Github Repository: [https://github.com/godwingi/social_network]

Walkthrough Video Link: [https://watch.screencastify.com/v/6iH3ZqmxoF683N6hFfKh]

## Installation

Once you have downloaded the source code, please make sure you "npm install" the necessary packages before running the server.

## Usage

Using a server side application tester, such as Insomnia, you can test to see if the routes work as expected.
In order to access the USER routes, you will need to use the following commands:

```
localhost:3001/api/user
```

In order to access the THOUGHT routes, you will need to use the following commands:

```
localhost:3001/api/thoughts
```

In order to access the REACTIONS, you will be required to have thought IDs.
And in order to access the FRIEND routes, you will need a USER ID to target a user, and another USER ID who will be the friend of the target user.

\*\* NOTE: In order to test this application, the SEEDS do not work. They are left in the code in order to help you insert the information on your own, so that you can make the application work.

## License

MIT
